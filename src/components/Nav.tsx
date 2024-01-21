import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <Link
            className="flex text-white text-base no-underline hover:text-white hover:no-underline"
            href="/"
          >
            👻{" "}
            <span className="hidden w-0 md:w-auto md:block pl-1">
              Didi maps
            </span>
          </Link>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex  justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <Link
                className="inline-block text-indigo-200 no-underline hover:text-gray-100 hover:text-underline py-2 px-2"
                href="/"
              >
                Map
              </Link>
            </li>
            <li className="mr-2">
              <Link
                className="inline-block text-indigo-200 no-underline hover:text-gray-100 hover:text-underline py-2 px-2"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            {/* <li className="mr-2">
              <a
                className="inline-block text-indigo-200 no-underline hover:text-indigo-100 hover:text-underline py-2 px-2"
                href="#"
              >
                LINK
              </a>
            </li>
            <li className="mr-2">
              <a
                className="inline-block text-indigo-200 no-underline hover:text-indigo-100 hover:text-underline py-2 px-2"
                href="#"
              >
                LINK
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
