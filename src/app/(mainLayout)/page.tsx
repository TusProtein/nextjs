import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Link href='/profile'>Profile</Link>
      <br />
      <Link href='/'>Home</Link>
      <div>Home Page</div>
    </>
  );
}
