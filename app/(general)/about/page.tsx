import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'SEO Description',
};

export default function Aboutpage() {
  return (
    <>
      <span className='text-7xl'>About Page</span>
    </>
  );
}
