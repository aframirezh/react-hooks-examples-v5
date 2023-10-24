// Se usa más que todo para resolver problemas de performance
// Hace lo mismo que useCallback

import { useEffect, useState, useMemo } from 'react';
import expensiveMathOperation from './expensiveMathOperation';

// esta funcion ejecuta fibonacci un numero especifico de veces haciendola un calculo
// matematico muy costoso. Por encodeURI, se ejecuta dentro de useMemo para que no se re renderice 
// con cada ejecucion de la funcion y la animación no se vuelva lenta

export default function Home() {
  const [count, setCount] = useState(35);
  const [left, setLeft] = useState(0);
  const value = useMemo(() => expensiveMathOperation(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
}
