'use client';
import '../app/globals.css';
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Mail, Phone, MapPin, Globe, } from "lucide-react";
import { CvButton } from '../components/ui/cv';


export default function Home() {
  return (
    <div className="bg-slate-300 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 scroll-smooth">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-0">
        {/* Hero Section */}
        <section
          id="home"
          className="py-20 flex flex-col md:flex-row items-center gap-12"
        >
          {/* Text Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              John Lloyd Glee
            </h1>
            <p className="mt-6 text-lg text-neutral-600 font-medium dark:text-neutral-100">
              Intern Software Developer @ Tito Solutions
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a
                href="#project"
                className="bg-zinc-500 hover:bg-zinc-400 text-white font-semibold py-3 px-6 rounded-xl transition shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="dark:text-neutral-100 border border-neutral-300 hover:border-neutral-500 text-neutral-800 font-semibold py-3 px-6 rounded-xl transition"
              >
                Contact
              </a>
              <CvButton />
            </div>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/me.png"
              alt="John Lloyd Glee"
              width={500}
              height={600}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 flex flex-col md:flex-row items-center gap-12 border-t border-neutral-200"
        >
          {/* Text Column */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold">Skills</h2>
            <p className="mt-6 leading-relaxed dark:text-neutral-100  text-neutral-700">
              Full-stack web developer proficient in Java and Python delivering
              results-driven solutions. Expertise includes front-end technologies{" "}
              <span className="font-semibold">
                (HTML, CSS, Next.js, React Native)
              </span>{" "}
              and back-end frameworks{" "}
              <span className="font-semibold">(Angular, Laravel)</span>. I
              contribute to projects from conception to deployment, leveraging
              SDLC Agile Scrum methodologies for effective project management.
            </p>
            <h3 className="text-3xl font-bold mt-10">About Portfolio</h3>
            <p className="mt-4 leading-relaxed dark:text-neutral-100 text-neutral-700">
              This portfolio showcases a collection of my most impactful
              projects and highlights my skills and experience in web
              development. I&apos;m passionate about creating user-friendly
              interfaces, crafting compelling narratives, and developing
              innovative solutions. I&apos;m constantly learning and evolving my
              skillset, and this portfolio reflects that growth.
            </p>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/skill.jpg"
              alt="Skills"
              width={500}
              height={600}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="project"
          className="py-20 text-center border-t border-neutral-200"
        >
          <h2 className="text-5xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project Card */}
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <Image
                src="/ALSLOGO.png"
                alt="ALS Project"
                width={600}
                height={400}
                className="rounded-lg mx-auto"
              />
              <h3 className="text-2xl font-semibold mt-6">
                Alternative Learning System LMS
              </h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-100 leading-relaxed">
                A learning management system built for the Alternative Learning
                System of Sison District in Pangasinan II District V.
              </p>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section
          className="py-20 flex flex-col md:flex-row items-center gap-12 border-t border-neutral-200"
        >
          {/* Text Column */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-center md:text-left">
              Thank You
            </h2>
            <p className="dark:text-neutral-100 mt-6 leading-relaxed text-neutral-700 text-center md:text-left">
              Thank you for visiting my online portfolio! I truly appreciate you
              taking the time to explore my work and learn more about my
              background, skills, and projects. Whether you&apos;re a potential
              client, collaborator, or just curious, I&apos;m always open to
              connecting.
            </p>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/me.png"
              alt="Thank You"
              width={500}
              height={600}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 border-t border-neutral-200 text-center"
        >
          <h2 className="text-5xl font-bold mb-10">Contact</h2>
          <p className="dark:text-neutral-100 max-w-2xl mx-auto text-neutral-700 leading-relaxed mb-10">
            I&apos;d love to connect with you! Whether you have a project in
            mind, are interested in collaborating, or simply want to learn more
            about my work, feel free to reach out.
          </p>

          <div className="max-w-md mx-auto text-left space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>+63-951-352-0909</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-emerald-600" />
              <span>www.johnlloydglee.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-600" />
              <span>johnlloydglee26@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>Lambingan St., Floridablanca, Pampanga</span>
            </div>
          </div>
        </section>

        {/* Get In Touch Button */}
        <section className="py-20 border-t border-neutral-200 text-center">
          <a
            href="/contact"
            className="bg-zinc-500 hover:bg-zinc-400 text-white font-semibold py-5 px-10 rounded-xl transition shadow-sm"
          >
            Get In Touch
          </a>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
