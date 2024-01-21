import Image from "next/image";
import { getImageUrl } from "@/lib/pocketbase";
import { toBlogSlug } from "@/lib/utils";
export default function PostCard({
  title,
  short,
  postId,
  placeId,
  filename,
  collection,
  author,
}: {
  filename: string;
  collection: string;
  title: string;
  short: string;
  placeId: string;
  postId: string;
  author: string;
}) {
  const url = getImageUrl({ collection, filename, record: postId });
  const href = toBlogSlug({
    id: placeId,
    name: title,
  });
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <a
          href={href}
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <Image
            src={url}
            width={300}
            height={300}
            className="h-64 w-full rounded-t pb-6"
            alt="location image"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            {author}
          </p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            {title}
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            {short}
          </p>
        </a>
      </div>
      {/* <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
								<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div> */}
    </div>
  );
}
