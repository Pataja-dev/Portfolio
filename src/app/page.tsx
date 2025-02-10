'use client'
import Image from "next/image";
import Navbar from "@/ui/app/navbar";
export default function Home() {
  return (
    
    <div>
    {/* Sticky Navbar */}
      <Navbar/>
  
    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 py-8">

    {/* Home Content */}
    <section id="home" className="py-10 flex flex-col md:flex-row items-center">
          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/me.png" 
              alt="John Lloyd Glee"
              width={550} 
              height={650} 
              className="rounded-lg" 
            />
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 md:pl-7 mt-8 md:mt-0 p-40  bg-stone-200  rounded-lg flex flex-col justify-center h-full">
            <h1 className="text-7xl font-bold text-center">John Lloyd Glee</h1>
            <p className="mt-4 text-center ">Tito Solutions Intern Software Developer</p>
            <div className="mt-4 h-0.5 bg-gray-950 w-full"></div>
            <div className="flex justify-center">

          <button className="mt-8 bg-black text-white font-bold py-2 px-4 w-[100px] justify-center border-0 hover:bg-gray-800 transition duration-300">Projects</button>
            </div>
          </div>
        </section>

    {/* Skills Content */}
    <section id="home" className="py-5 flex flex-col md:flex-row items-center">
          
          {/* Text Column */}
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0  p-6 rounded-lg flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-4">Full-stack web developer proficient in Java and Python, delivering results-driven solutions. Expertise includes front-end technologies (HTML, CSS, Next.js, React Native) and back-end frameworks (Angular, Laravel). I contribute to projects from conception to deployment, leveraging SDLC Agile Scrum methodologies for effective project management and iterative progress. My strong communication and time management skills enable me to thrive in fast-paced environments, consistently delivering high-quality work within deadlines. At Tito Solutions, I collaborate effectively within development teams to understand and implement project requirements, ensuring transparency, adaptability, and successful outcomes.</p>
        <h2 className="text-3xl font-bold">About Portfolio</h2>
        <p className="mt-4">This portfolio showcases a collection of my most impactful projects and highlights my skills and experience in Web development. Here you'll find examples of my work. I'm passionate about creating user-friendly interfaces, crafting compelling narratives, developing innovative solutions, and I strive to bring that passion to every project I undertake. I'm constantly learning and evolving my skillset, and this portfolio reflects that growth. I hope you enjoy exploring my work and gain a better understanding of what I can offer.</p>
      
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
      <section id="skills" className="py-20">
       </section>

      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-4">Here are some of my projects.</p>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out!</p>
      </section>
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out!</p>
      </section>
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out!</p>
      </section>
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out!</p>
      </section>
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out!</p>
      </section>
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out!</p>
      </section>
    </div>
  </div>
);
}
