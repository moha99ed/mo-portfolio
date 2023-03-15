import { experience } from "../components/data.tsx"
export default function Experience () {
    return (
        <div>
            <div class="p-8" id="experience">
                <div class="flex felx-col items-center justify-center">
                </div>
                <h1 class="text-blue-400 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] text-center mt-6">
                    Experience
                </h1>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-3">

            {experience.map((exp) => (

            <div class="p-8">
                <div
                class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
                >
                <img
                    src={exp.image}
                    class="h-10 w-10"
                >
                </img>
                </div>
                <h2 class="uppercase mt-6 text-blue-400 font-medium mb-3">
                {exp.role}
                </h2>
                <p class="font-light text-sm text-gray-500 mb-3">
                {exp.description}
                </p>
                <time>{exp.date}</time>
                <a class="text-blue-500 flex items-center hover:text-indigo-600" href={exp.link} target="_blank" rel="noopener noreferrer">
                {exp.company} 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                    />
                </svg>
                </a>
            </div>

            ))}    



            </div>
        </div>
    )
}