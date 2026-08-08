import React, { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const [value, setValue] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cache survives renders without causing re-renders
  const cacheRef = useRef({});

  useEffect(() => {
    if (!url) {
      setValue([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    // -------------------------
    // 1. CHECK CACHE
    // -------------------------
    if (cacheRef.current[url]) {
      console.log("🟢 CACHE HIT:", url);

      setValue(cacheRef.current[url]);
      return;
    }

    console.log("⏳ Waiting 500ms before API call...");

    // -------------------------
    // 2. DEBOUNCE
    // -------------------------
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("🚀 API CALL:", url);

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} error`);
        }

        const result = await response.json();

        // -------------------------
        // 3. SAVE RESPONSE IN CACHE
        // -------------------------
        cacheRef.current[url] = result.products;

        console.log("💾 SAVED TO CACHE:", url);

        setValue(result.products);
      } catch (error) {
        // -------------------------
        // 4. ABORT CONTROLLER
        // -------------------------
        if (error.name === "AbortError") {
          console.log("🛑 API REQUEST CANCELLED:", url);
          return;
        }

        console.error("❌ API ERROR:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    // -------------------------
    // CLEANUP
    // -------------------------
    return () => {
      console.log("🧹 Cleanup:", url);

      clearTimeout(timer);
      controller.abort();
    };
  }, [url]);

  return {
    value,
    loading,
    error,
  };
};

export default useFetch;