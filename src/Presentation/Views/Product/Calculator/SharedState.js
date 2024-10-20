// sharedState.js
import { useEffect, useState, useCallback } from 'react';

function createSharedStateHook(initialValue) {
  let sharedValue = initialValue;
  const listeners = new Set();

  return function useSharedState() {
    const [state, setState] = useState(sharedValue);

    useEffect(() => {
      listeners.add(setState);
      return () => listeners.delete(setState);
    }, []);

    const setSharedState = useCallback((newValue) => {
      if (typeof newValue === 'function') {
        sharedValue = newValue(sharedValue);
      } else {
        sharedValue = newValue;
      }
      listeners.forEach(listener => listener(sharedValue));
    }, []);

    return [state, setSharedState];
  };
}

export const useCounterState = createSharedStateHook(0);