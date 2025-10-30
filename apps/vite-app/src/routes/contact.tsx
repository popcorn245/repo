import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@org/components';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

function Contact() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Contact Us
      </h1>

      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Get in touch with us through this Vite + TanStack Router powered contact page.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <Link to="/">
          <Button variant="outline">← Back to Home</Button>
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="default">Send Email</Button>
        <Button variant="secondary">Call Us</Button>
        <Button variant="outline">Visit Office</Button>
      </div>
    </div>
  );
}
