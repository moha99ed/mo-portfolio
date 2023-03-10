export default function Hero() {
    return (
      <div
        class="flex w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl text-gray-500"
      >
        <div class="sm:(mt-14 mb-14) mt-12 mb-4 flex flex-col items-center gap-y-5 gap-x-10 md:flex-row">
        <img
            class="sm:(w-52 h-52) animate__animated animate__fadeIn h-24 w-24 rounded-full"
            src="M.png"
            alt="avatar"
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
        <div class="animate__animated animate__fadeIn animate__delay-5s hidden pb-2 sm:block">
          <div class="motion-safe:animate-bounce">
            <svg class="w-10 h-10" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fill-rule="nonzero"/>
            </svg>
          </div>
        </div>

      </div>
      
    );
   
}