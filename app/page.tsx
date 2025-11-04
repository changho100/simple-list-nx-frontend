import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Next.js!</h1>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Link
          href="/hello"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Go to Hello Page
        </Link>
        <Link
          href="/items"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Go to Items Page
        </Link>
      </div>
    </div>
  );
}