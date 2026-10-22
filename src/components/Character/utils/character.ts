import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            
            // Hide the skinned body of the male character, keeping only static environmental meshes
            character.traverse((child: any) => {
              if (child.isSkinnedMesh) {
                child.visible = false;
              } else if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });

            // Load and add the gorgeous 3D-styled female avatar image plane
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(
              "/images/female_avatar.png",
              async (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace;
                
                const geometry = new THREE.PlaneGeometry(3.6, 3.6);
                const material = new THREE.MeshBasicMaterial({
                  map: texture,
                  transparent: true,
                  side: THREE.DoubleSide,
                  depthWrite: false
                });
                
                const avatarPlane = new THREE.Mesh(geometry, material);
                avatarPlane.position.set(0, 4.1, 1.25);
                avatarPlane.name = "femaleAvatarPlane";
                character.add(avatarPlane);

                // Add a beautiful floating premium particle field around the avatar
                const particleCount = 45;
                const particleGeometry = new THREE.BufferGeometry();
                const positions = new Float32Array(particleCount * 3);
                for (let i = 0; i < particleCount * 3; i += 3) {
                  positions[i] = (Math.random() - 0.5) * 5;
                  positions[i + 1] = Math.random() * 3 + 2.5;
                  positions[i + 2] = (Math.random() - 0.5) * 3 + 0.5;
                }
                particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                
                const particleMaterial = new THREE.PointsMaterial({
                  color: 0xc2a4ff,
                  size: 0.05,
                  transparent: true,
                  opacity: 0.8,
                  blending: THREE.AdditiveBlending
                });
                
                const particles = new THREE.Points(particleGeometry, particleMaterial);
                particles.name = "avatarParticles";
                character.add(particles);

                // Compile renderer and initialize animation hooks synchronously after texture adds
                try {
                  await renderer.compileAsync(character, camera, scene);
                } catch (e) {
                  console.error("Renderer compilation failed:", e);
                }
                
                resolve(gltf);
                
                try {
                  setCharTimeline(character, camera);
                  setAllTimeline();
                } catch (e) {
                  console.error("GSAP timeline initialization failed:", e);
                }

                const footR = character.getObjectByName("footR");
                if (footR) footR.position.y = 3.36;
                const footL = character.getObjectByName("footL");
                if (footL) footL.position.y = 3.36;

                dracoLoader.dispose();
              },
              undefined,
              async (error) => {
                console.error("Error loading texture, falling back to original scene:", error);
                try {
                  await renderer.compileAsync(character, camera, scene);
                } catch (e) {}
                resolve(gltf);
                try {
                  setCharTimeline(character, camera);
                  setAllTimeline();
                } catch (e) {}
                dracoLoader.dispose();
              }
            );
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
