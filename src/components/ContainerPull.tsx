export default function ContainerPullUp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="mx-0 sm:mx-6">
        <div
          className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
          style={{ fontFamily: "Georgia,serif" }}
        >
          {children}
        </div>
      </div>
  );
}
