import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Princing',
  description: 'SEO Description',
};

export default function PrincingPage() {
  return (
    <>
      <span className='text-7xl'>Princing Page</span>
    </>
  );
}
