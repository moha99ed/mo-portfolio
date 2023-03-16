import MobileHeader from "../islands/MobileHeader.tsx";
import { menu } from "../components/data.tsx"

function LargeHeader(props: Omit<HeaderProps, "sticky">) {
  return (
    <div class="text-md hidden h-14 flex-row flex-wrap gap-6 px-4 font-semibold text-gray-500 dark:text-gray-300 md:flex">
      <ul class="flex flex-1 items-center gap-6">
        {props.active !== "/" && (
          <div class="w-16 h-16 flex justify-center items-center text-indigo-500">
          <a href="/" class="flex items-center">
          <div class="text-4xl font-bold text-blue-500" id="ms">MS</div>

            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          </div>          
        )}
        {menu &&
          menu.map((menu) => (
            <li class="flex flex-col p-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-blue-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <a
                href={menu.href}
                class={
                  "hover:(text-blue-600 dark:text-gray-100) border-gray-500 py-1 dark:border-gray-300" +
                  (menu.href === props.active ? " border-b-2" : "")
                }
              >
                {menu.name}
              </a>
            </li>
          ))}
      </ul>
      <div class="flex items-center gap-6">
      <a
                  href="/Resume"
                  target="_blank" rel="noopener noreferrer"
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-600 border-blue-600 hover:border-transparent hover:bg-yellow-400 mt-4 md:mt-0"
            >
                  Resume
            </a>
      </div>
    </div>
  );
}

export default function Header(props: HeaderProps) {

  return (
    <header
      class={`bg-blue-50 border-gray-200 px-2 md:px-4 py-2.5 rounded dark:bg-gray-90 ${
        props.sticky ?? "sticky top-0 z-10 -mb-12 sm:-mb-14"
      }`}
    >
      <LargeHeader {...props} />
      <MobileHeader {...props} />
    </header>
  );
}