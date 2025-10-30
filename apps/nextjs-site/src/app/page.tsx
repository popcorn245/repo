import Link from 'next/link';
import { Button } from '@org/components';

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Welcome to Next.js + React Components
      </h1>
      
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        This Next.js site is consuming the Button component from our React component library.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/contact">
          <Button variant="link">Contact Us →</Button>
        </Link>
      </div>
    </main>
  );
}
