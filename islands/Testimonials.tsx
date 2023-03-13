import { testimonials } from "../components/data.tsx"
export default function Testimonials () {
    return (
        <div>
            <div class="p-8" id="testimonials">
                <div class="flex felx-col items-center justify-center">
                </div>
                <h1 class="text-4xl font-bold text-blue-300 text-center mt-6">
                 Testimonials
                </h1>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-3">

            {testimonials.map((testimonials) => (

            <div class="p-8">
                <div
                class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
                >
                <img
                    src={testimonials.image}
                    class="h-14 w-14 rounded-full"
                >
                </img>
                </div>

                <p class="font-light text-sm text-gray-500 mb-3">
                "{testimonials.quote}"
                </p>
                <h2 class="uppercase mt-6 text-gray-600 font-medium mb-3">
                {testimonials.name}
                </h2>
                <a class="text-blue-500 flex items-center hover:text-indigo-600" href="/" target="_blank" rel="noopener noreferrer">
                SWE @ {testimonials.company} 
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