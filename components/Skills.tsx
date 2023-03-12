import { skills } from "./data.tsx";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-96 px-8 py-4 gap-4 bg-cover bg-center bg-no-repeat rounded-xl text-gray-500">
      <h1 className="max-w-lg text-4xl font-bold text-blue-300">Tech Stack</h1>
      <p className="mb-4">some of the technologies I have experience with</p>
      <div className="w-full h-96 overflow-x-auto flex justify-center items-center gap-4">
        <div className="flex justify-center" style={{ maxWidth: "75vw" }}>
          {skills.map((skill) => (
            <div key={skill} className="pr-4">
              <object class="w-8 h-8" data={skill} type="image/svg+xml" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
