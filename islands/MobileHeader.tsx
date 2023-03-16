import { useSignal } from "@preact/signals";
import { HeaderProps } from "./Header.tsx";
import { menu } from "../components/data.tsx"
export default function MobileHeader(props: Omit<HeaderProps, "sticky">) {
  const checked = useSignal(false);
  return (
    <div
      class={`relative block text-lg font-bold text-gray-700 dark:text-gray-300 md:hidden`}
    >
      <div class="flex h-12 flex-row items-center justify-between gap-6 px-4">
        <div>
          {props.active !== "/" && (
          <div class="w-16 h-16 flex justify-center items-center text-indigo-500">
          <a href="/" class="flex items-center">
          <div class="text-4xl font-bold text-blue-500" id="ms">MS</div>

            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          </div>    
          )}
        </div>
        <div class="flex min-h-screen items-center justify-center">
          <div
            class="group relative my-2 mx-auto h-6 w-6 cursor-pointer"
            onClick={() => (checked.value = !checked.value)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`icon icon-tabler icon-tabler-menu-2 absolute top-0 transition ${
                checked.value ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0m-16 6l16 0m-16 6l16 0"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        class={`absolute w-full bg-black transition-all duration-300 ${
          checked.value ? "min-h-screen bg-opacity-80" : "min-h-0 bg-opacity-0"
        }`}
        onClick={() => (checked.value = false)}
      />
      <div class="absolute top-12 w-full bg-blue-50 dark:bg-gray-700">
        <div
          class={`divide-y-1 divide-gray-300 overflow-hidden transition-all duration-300 dark:divide-gray-600 ${
            checked.value ? "my-4 max-h-64" : "max-h-0"
          }`}
        >
          {menu && (
            <div class="flex w-full flex-col items-center justify-center py-2 first:pt-0 last:pb-0">
              {menu.map((menu) => (
                <div class="text-center text-gray-500 font-medium">
                  <a
                    href={menu.href}
                    class={
                      "hover:(text-blue-600 dark:text-gray-100) border-gray-500 px-2 dark:border-gray-300" +
                      (menu.href === props.active ? " border-l-4" : "")
                    }
                    onClick={() => {
                      if (menu.href.startsWith("#")) checked.value = false;
                    }}
                  >
                    {menu.name}
                  </a>
                </div>
              ))}
            </div>
          )}
          <div class="flex w-full flex-col items-center justify-center py-2 first:pt-0 last:pb-0">
            <a
                  href="/Resume"
                  target="_blank" rel="noopener noreferrer"
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-600 border-blue-600 hover:border-transparent hover:bg-yellow-400 mt-4 lg:mt-0"
            >
                  Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}