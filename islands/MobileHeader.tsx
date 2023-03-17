import { useSignal } from "@preact/signals";
import { HeaderProps } from "./Header.tsx";
import { menu } from "../components/data.tsx"
export default function MobileHeader(props: Omit<HeaderProps, "sticky">) {
  const checked = useSignal(false);
  return (
    <div
      class={`relative block text-lg font-bold text-gray-700 dark:text-gray-300 lg:hidden`}
    >
      <div class="flex h-12 flex-row items-center justify-between gap-6 px-4">
        <div>
          {props.active !== "/" && (
          <div class="w-16 h-16 flex justify-center items-center text-indigo-500">
          <a href="/" class="flex items-center">
          <div class="text-4xl font-bold text-blue-500 hover:(text-yellow-400 dark:text-gray-100)" id="ms">MS</div>

            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          </div>    
          )}
        </div>
        <div class="flex min-h-screen items-center justify-center">
          <div
            class="flex items-center px-3 py-2 border rounded text-blue-500 hover:border-yellow-400 hover:bg-yellow-400 focus:outline-none"
            onClick={() => (checked.value = !checked.value)}
          >
            <svg
              class="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
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
                      "hover:(text-yellow-400 dark:text-gray-100) border-gray-500 px-2 dark:border-gray-300" +
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