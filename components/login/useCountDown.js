import { useState, useEffect } from "react";

export default function useCounter() {
  const [remain, setRemain] = useState(0);
  useEffect(() => {
    if (remain > 0) {
      const countDown = () => setRemain((n) => n - 1);
      const timeout = setTimeout(countDown, 1000);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [remain]);
  return [remain, setRemain];
}
