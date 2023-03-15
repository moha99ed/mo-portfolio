export default function About() {
    return (
  <section className="bg-blue-50 opacity-90" id="about" >
    <div
      className="hero-content text-center"
    >
      <div className="py-4">
          <h2 className="text-blue-400 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] opacity-100">About me</h2>

          <p className="text-gray-500 py-6">
          Welcome to my portfolio website where you can explore my work, skills, and projects. From developing web applications to implementing robust database solutions I have a strong passion for creating innovative solutions that make a difference. My love for web development began when I created my first website using HTML and CSS, and I haven't stopped since. Let's connect and make a difference together!

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
  