import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
export const navItems = [
    {
    name : "Home",
    url: "/"
    },
    {
    name : "Courses",
    url: "/courses"
    },
    {
    name : "About",
    url: "/about"
    },
    {
    name : "Library",
    url: "https://book-finder-app-ebon.vercel.app/"
    },
    {
    name : "Blog",
    url: "/blog"
    },
    {
    name : "R&D",
    url: "/research"
    },
    {
    name : "Creator",
    url: "/creator"
    }
]

export default function navbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-base-100 text-sm py-4 fixed">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-center ">
          <div className="flex gap-2 items-center">
            
             <Image
                src='/images/Team.png'
                alt='Logo'
                width={40}
                height={40}
                quality={40}
              />
            
          <a className="text-xl font-semibold text-[#f4c430]" href="#">
           GYANKOSH
          </a>
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-collapse"
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            {
            navItems.map((items , index)=>(
                <Link key={index}
                className="font-medium text-base text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                href={items.url}
              >
               
                {items.name}
              </Link>
            ))
            }
             <UserButton afterSignOutUrl="/"/>
          </div>
        </div>
      </nav>
    </header>
  );
}
