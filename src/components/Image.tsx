import {getImageUrl} from "@/lib/pocketbase";

export default function Image({collection,src, id}:{collection:string ,src:string, id:string}) {
  const url = getImageUrl({collection,src, id})
  return (
// <!--image-->
<div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{backgroundImage:`url('${url}')` ,height:"75vh"}}></div>
  );
}
