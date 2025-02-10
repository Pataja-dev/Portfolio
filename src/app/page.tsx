import Image from "next/image";
import Navbar from "@/ui/app/navbar";
export default function Home() {
  return (
    
    <div>
    {/* Sticky Navbar */}
    {/* <div className="bg-stone-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            My Portfolio
          </div>
          <div className="space-x-4">
            <a href="#about" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
      

<Navbar/>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">This is a brief introduction about myself.</p>
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
