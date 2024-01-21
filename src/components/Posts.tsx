import PostCard from "@/components/PostCard";
import { PostsResponse } from "@/../pocketbase-types";
export default function Posts({ posts }: { posts: PostsResponse[] }) {
  return (
    <div className="flex flex-wrap justify-between pt-12 -mx-6">
      {/* <!--1/3 col --> */}

      {/* <!--1/3 col --> */}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          short={''}
          collection={post.collectionId}
          filename={post.image}
          id={post.id}
        />
      ))}

      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"></div>
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"></div>
      {/* <!--1/3 col --> */}

      {/* <!--1/2 col --> */}
      {/* <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">
								<img src="https://source.unsplash.com/collection/3657445/800x600" className="h-full w-full rounded-t pb-6" /> 
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p className="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
								<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div> */}

      {/* <!--1/2 col --> */}
      {/* <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">	
								<img src="https://source.unsplash.com/collection/764827/800x600" className="h-full w-full rounded-t pb-6" />
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p className="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
								<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div> */}

      {/* <!--2/3 col --> */}
      {/* <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">	
								<img src="https://source.unsplash.com/collection/325867/800x600" className="h-full w-full rounded-t pb-6" />
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p className="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
								<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div> */}

      {/* <!--1/3 col --> */}
      {/* <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">
								<img src="https://source.unsplash.com/collection/1118905/800x600" className="h-full w-full rounded-t pb-6" />
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p className="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
								<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div> */}
    </div>
  );
}
