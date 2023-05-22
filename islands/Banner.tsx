

export default function Hero() {
  return (
<section class="bg-blue-10">
  <div
    class="grid mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center "
  >
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex" id="mainRunner">
     <object
         id="blob"
         class="w-32 h-32"
         data="Animated.svg"
         type="image/svg+xml"
       />

     </div>
    <div class="mx-auto max-w-xl text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
      Hello, My name is 
        <h2 class="font-extrabold text-blue-700 sm:block">
        Mohammed Sebbagh.
        </h2>
      </h1>

      <p class="mt-4 sm:text-xl sm:leading-relaxed text-blue-400">
        I am a FullStack Engineer
      </p>
    </div>
  </div>
</section>

  );
}


