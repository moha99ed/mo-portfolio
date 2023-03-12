

export default function Hero() {


  return (
    <div
    class="flex w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl text-gray-500"
  >
    <div class="sm:(mt-14 mb-14) mt-12 mb-4 flex flex-col items-center gap-y-5 gap-x-10 md:flex-row">
    <object
        class="w-32 rounded-full shadow-lg"
        data="M.svg"
        type="image/svg+xml"
      />
      <div class="space-y-4 text-left">
          <h1 class="mb-3 font-medium text-gray-500 dark:text-gray-400">Hello, My name is</h1>
          <p class="text-4xl max-w-lg font-bold text-blue-400">
          Mo Sebbagh.
          </p>
          <p class="text-4xl max-w-lg font-bold text-blue-300">
          I am a Fullstack engineer
          </p>
      </div>
    </div>
  </div>




  );
}


