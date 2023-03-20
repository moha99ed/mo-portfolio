import { skills } from "../components/data.tsx";

export default function Skills() {
  
  return (

              <section>
                <div class="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                <h1 class="text-blue-400 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] text-center mt-6">
                    Tech Stack
                </h1>
                <p class="mt-4 text-center sm:text-xl sm:leading-relaxed text-blue-300">
                  some technologies I have experience with
                </p>
                  <div class="max-w-xl py-12 mx-auto lg:max-w-7xl">
                    <div >
                      <div class="grid grid-cols-3 gap-12 text-center lg:grid-cols-5 lg:space-y-0" >
                      {skills.map((skill) => (
                          <div key={skill.name} className="group flex items-center justify-center w-18 h-18 mx-auto text-black " id="skill-container">
                            <img 
                            class="w-8 h-8 sm:w-12 sm:h-12" 
                            src={skill.image}
                            type="image/svg+xml" 
                            id="skill-img"
                            />
                          </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>            
  );
}