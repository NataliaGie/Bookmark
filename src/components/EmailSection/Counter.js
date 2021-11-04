import { useState, useEffect, useRef } from 'react';

function Counter() {
    const [count, setCount] = useState(35000);
  
    useInterval(() => {
      if (count - 222 < 0) {
        return setCount(0);
      }
      setCount(count - 222);
    }, 125);
  
    return <span>{count}</span>;
  }
  
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  export default Counter;