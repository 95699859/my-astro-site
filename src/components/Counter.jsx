import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{ padding: '8px 16px', marginTop: '1rem' }}
      >
        Нажато: {count}
      </button>
    </div>
  );
}