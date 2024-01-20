export default function Title({title}: {title:string}) {
  return (
    <div className="text-center pt-16 md:pt-32">
      {/* <p className="text-sm md:text-base text-green-500 font-bold">04 JULY 2023 <span className="text-gray-900">/</span> GETTING STARTED</p> */}
      <h1 className="font-bold break-normal text-3xl md:text-5xl">{title}</h1>
    </div>
  );
}
