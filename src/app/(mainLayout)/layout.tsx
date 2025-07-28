// src/app/(main)/layout.tsx
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('re-render');

  return (
    <>
      <header>Header</header>
      <main>{children}</main>
    </>
  );
}
