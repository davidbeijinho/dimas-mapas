import { getImageUrl } from "@/lib/pocketbase";

export default function PostImage({
  collection,
  filename,
  id,
}: {
  collection: string;
  filename: string;
  id: string;
}) {
  const url = getImageUrl({ collection, filename, record:id });
  return (
    // <!--image-->
    <div
      className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
      style={{ backgroundImage: `url('${url}')`, height: "75vh" }}
    ></div>
  );
}
