import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";

// Loading screen bypassed — skip straight to the site
const Loading = (_props: { percent: number }) => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Immediately dismiss the loading screen
    setIsLoading(false);
  }, []);

  return null;
};

export default Loading;

export const setProgress = (_setLoading: (value: number) => void) => {
  function clear() {}
  function loaded() {
    return Promise.resolve(100);
  }
  return { loaded, percent: 100, clear };
};
