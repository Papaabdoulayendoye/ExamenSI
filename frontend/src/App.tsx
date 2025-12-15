import { useEffect, useState } from 'react';

import './App.css';
import {
  decrementCounter,
  getCounter,
  incrementCounter,
  resetCounter,
} from './api/counter';

function App() {
  const [value, setValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        const v = await getCounter();
        if (!cancelled) setValue(v);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load counter');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const run = async (fn: () => Promise<number>) => {
    try {
      setError(null);
      setLoading(true);
      const v = await fn();
      setValue(v);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page" style={{ padding: '' }}>
      <header className="header">
        <h1>Countdown / Counter</h1>
      </header>
      <main className="card">
        <div className="value" aria-live="polite">
          {value === null ? '—' : value}
        </div>

        <div className="buttons">
          <button disabled={loading} onClick={() => run(decrementCounter)}>
            -
          </button>
          <button disabled={loading} onClick={() => run(incrementCounter)}>
            +
          </button>
          <button disabled={loading} onClick={() => run(resetCounter)}>
            Reset
          </button>
        </div>

        {loading && <p className="info">Loading…</p>}
        {error && <p className="error">{error}</p>}
      </main>

      <footer className="footer">
        API: <code>{import.meta.env.VITE_API_BASE_URL || '(via Vite proxy / relative)'}</code>
      </footer>
    </div>
  );
}

export default App;
