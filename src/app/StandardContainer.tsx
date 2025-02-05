export default function StandardContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[1280px] mx-auto">{children}</div>;
}
