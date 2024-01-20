export default function ContainerWrap({
  children,
  pullUp,
}: Readonly<{
  children: React.ReactNode;
  pullUp?: boolean;
}>) {
  return (
    <div className={`container max-w-5xl mx-auto ${pullUp ? "-mt-32" : ""}`}>
      <div className="mx-0 sm:mx-6">
          {children}
      </div>
    </div>
  );
}
