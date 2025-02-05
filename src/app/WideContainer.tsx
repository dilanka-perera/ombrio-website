export default function WideContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[1920px] mx-auto">{children}</div>;
}
