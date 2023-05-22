export default function About() {
    return (
  <section className="bg-blue-50 opacity-90" id="about" >
    <div
      className="hero-content text-center"
    >
      <div className="py-4">
          <h2 className="text-blue-400 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] opacity-100">About me</h2>

          <p className="text-gray-500 py-6">
            Welcome to my portfolio website! Here, you'll have the opportunity to explore my work, skills, and projects. As a FullStack Developer with over 4 years of experience, I am passionate about creating innovative solutions that have a meaningful impact.

            From developing web applications to implementing robust database solutions, I possess expertise in TypeScript, JavaScript, React, Node.js, and SQL. I am proficient in frameworks such as React.js, Redux, Next.js, and Express.js, and have hands-on experience working with RESTful APIs. My database knowledge spans both NOSQL (MongoDB) and SQL (PostgreSQL) technologies.

            I also have extensive experience with CSS frameworks like Tailwind CSS, Bootstrap, and Material UI, ensuring visually appealing and responsive designs. Version control using Git and build tools like Webpack and Vite are an integral part of my workflow.

            Testing is crucial to me, and I am skilled in using testing tools like Jest, Puppeteer, Enzyme, and SuperTest. Additionally, I have familiarity with containerization technologies such as Docker and cloud platforms like AWS.

            My journey in web development began with creating websites using HTML and CSS, igniting my passion for this field. I am constantly seeking new opportunities to collaborate and make a difference. Let's connect and create something remarkable together!
          </p>
          <a
            className="text-blue-500 flex items-center hover:text-indigo-600 inline-flex items-center"
            href="#contact">
              Get In Touch
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
    </div>
</section>

    );
  }
  