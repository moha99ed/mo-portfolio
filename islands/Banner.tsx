import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl text-gray-500"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-xl inline-block">Hello, My name is</h1>
        <p class="text-4xl max-w-lg font-bold text-blue-300">
          Mo Sebbagh.
        </p>
        <p class="text-4xl max-w-lg font-bold text-blue-300">
          I am a Fullstack engineer
        </p>
        <p class="text-lg max-w-lg text-gray-300">Welcome to my portfolio website where you can explore my work, skills, and projects. From developing web applications to implementing robust database solutions, I have a strong passion for building robust software that helps solve real-world problems. Come take a look at what I've accomplished so far and let's discuss how I can help bring your next project to life.</p>
      </div>
    </div>
  );
}
