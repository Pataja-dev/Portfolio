'use client';
import '../app/globals.css';
import Image from "next/image";
import Navbar from "@/ui/app/navbar";
import Footer from "@/ui/app/footer";

export default function Home() {
  return (
    <div>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-0">
        {/* Home Content */}
        <section id="home" className="py-10 pb-12 flex flex-col md:flex-row ">
          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/me.png"
              alt="John Lloyd Glee"
              width={542}
              height={630}
              className="rounded-lg"
            />
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 md:pl-7 mt-8 md:mt-0 pt-52 pb-16 bg-stone-200 rounded-lg justify-center h-full">
            <h1 className="text-5xl font-bold text-center md:text-7xl">John Lloyd Glee</h1>
            <p className="md:mt-4 mt-0 text-center text-xl font-bold pt-4 md:pt-32">Tito Solutions Intern Software Developer</p>
            <div className="justify-self-center h-0.5 bg-gray-950 w-10/12 mt-0"></div>
            <div className="flex justify-center">
              <a href="#projects" className="mt-8 bg-black text-white font-bold py-2 px-4 w-[100px] justify-center border-0 hover:bg-gray-800 transition duration-300">Projects</a>
            </div>
          </div>
        </section>

        {/* Skills Content */}
        <section id="skills" className="py-8 pt-8 flex flex-col md:flex-row items-center">
          {/* Text Column */}
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 p-6 rounded-lg flex flex-col justify-center h-full">
            <h2 className="text-5xl font-bold">Skills</h2>
            <p className="mt-4">Full-stack web developer proficient in Java and Python delivering results-driven solutions. Expertise includes front-end technologies <span className="font-black">(HTML, CSS, Next.js, React Native)</span> and back-end frameworks <span className="font-black">(Angular, Laravel)</span>. I contribute to projects from conception to deployment, leveraging SDLC Agile Scrum methodologies for effective project management and iterative progress. My strong communication and time management skills enable me to thrive in fast-paced environments, consistently delivering high-quality work within deadlines. At Tito Solutions, I collaborate effectively within development teams to understand and implement project requirements, ensuring transparency, adaptability, and successful outcomes.</p>
            <h2 className="text-3xl font-bold md:pt-5 pt-5">About Portfolio</h2>
            <p className="mt-4">This portfolio showcases a collection of my most impactful projects and highlights my skills and experience in Web development. Here you'll find examples of my work. I&apos;m passionate about creating user-friendly interfaces, crafting compelling narratives, developing innovative solutions, and I strive to bring that passion to every project I undertake. I&apos;m constantly learning and evolving my skillset, and this portfolio reflects that growth. I hope you enjoy exploring my work and gain a better understanding of what I can offer.</p>
          </div>
          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/skill.jpg"
              alt="John Lloyd Glee"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Project Content */}
        <section id="project" className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">My Project</h2>
            <div className="flex justify-center mb-6">
              <Image
                src="/ALSLOGO.png"
                alt="Description of the image"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <p className="text-lg text-gray-700">Learning Management for Alternative Learning System of Sison District in Pangasinan II District V</p>
          </div>
        </section>

        {/* Thank You */}
        <section className="py-10 pb-12 flex flex-col md:flex-row items-center">
          {/* Text Column */}
          <div className="md:w-1/2 md:pl-7 mt-4 md:mt-0 p-40 md:p-5 justify-center h-full">
            <h1 className="text-5xl font-bold text-center">Thank You</h1>
            <p className="mt-11 text-center">Thank you for visiting my online portfolio! I truly appreciate you taking the time to explore my work and learn more about my background, skills, and projects. I've put a lot of effort into showcasing my best work and highlighting what I'm passionate about, so I hope you found something that resonated with you. Whether you're a potential client, collaborator, or just curious about what I do, I'm always open to connecting. Please feel free to reach out with any questions, comments, or inquiries you may have. I'd love to hear from you!</p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/me.png"
              alt="John Lloyd Glee"
              width={550}
              height={650}
              className="rounded-lg"
            />
          </div>
        </section>

        <section id="contact" className="py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6 pb-10">My Contact</h2>
            <p className="text-light mb-5 text-justify text-stone-900">
              I'd love to connect with you! Whether you have a specific project in mind, are interested in collaborating, or simply want to learn more about my work, please don't hesitate to reach out.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <ul className="text-left">
              <li className="pt-4">+63-951-352-0909</li>
              <li className="pt-3">www.johnlloydglee.com</li>
              <li className="pt-3">johnlloydglee26@gmail.com</li>
              <li className="pt-3">Lambingan St., Floridablanca, Pampanga</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}