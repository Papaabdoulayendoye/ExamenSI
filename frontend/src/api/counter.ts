const rawBase = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '';
const API_BASE_URL = rawBase.replace(/\/$/, '');

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${path}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText}${text ? `: ${text}` : ''}`);
  }

  return (await res.json()) as T;
}

type CounterResponse = { value: number };

export async function getCounter(): Promise<number> {
  const data = await request<CounterResponse>('/api/counter');
  return data.value;
}

export async function incrementCounter(): Promise<number> {
  const data = await request<CounterResponse>('/api/counter/increment', { method: 'POST' });
  return data.value;
}

export async function decrementCounter(): Promise<number> {
  const data = await request<CounterResponse>('/api/counter/decrement', { method: 'POST' });
  return data.value;
}

export async function resetCounter(): Promise<number> {
  const data = await request<CounterResponse>('/api/counter/reset', { method: 'POST' });
  return data.value;
}
