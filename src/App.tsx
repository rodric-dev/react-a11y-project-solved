import { useState, useEffect } from 'react';
import { add } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (window as any).add = add; // Expose the function globally
    console.log('%c🧪 You can now test add() in the browser console!', 'color: green; font-weight: bold;');
  }, []);

  const handleCalculate = () => {
    try {
      const res = add(input);
      setResult(res);
      setError(null);
    } catch (err: any) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#fff',
        color: '#222',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0'
        width={600}
        height={400}
        alt='A calculator on a desk with numbers visible'
        style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
      />

      <h1 style={{ fontSize: '1.8rem', marginTop: '1rem' }}>String Calculator</h1>

      <label
        htmlFor='numberInput'
        style={{ display: 'block', fontWeight: 600, marginTop: '1rem' }}
      >
        Enter numbers (comma-separated)
      </label>

      <textarea
        id='numberInput'
        name='numberInput'
        rows={4}
        style={{
          margin: '10px 0',
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          color: '#222',
          fontSize: '1rem',
        }}
        placeholder='e.g., 1,2,3 or //[*][%]\n1*2%3'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-describedby='inputHelp'
      />

      <p id='inputHelp' style={{ fontSize: '0.9rem', color: '#555' }}>
        Supports commas, newlines, or custom delimiters using // syntax.
      </p>

      <button
        type='button'
        onClick={handleCalculate}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007acc',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Calculate
      </button>

      {result !== null && (
        <p
          role='status'
          aria-live='polite'
          style={{
            color: 'green',
            marginTop: '1rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          Result: {result}
        </p>
      )}

      {error && (
        <div
          role='alert'
          aria-live='assertive'
          style={{
            marginTop: '1rem',
            backgroundColor: '#fdecea',
            borderLeft: '4px solid #d93025',
            padding: '10px',
            color: '#d93025',
          }}
        >
          {error}
        </div>
      )}
    </main>
  );
};

export default App;
