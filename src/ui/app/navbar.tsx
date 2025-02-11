import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-stone-400  sticky top-0 start-0 z-50">
    <div className=" mx-auto px-4 py-4">
      <div className="flex justify-between items-center ">
        <div className="text-xl font-bold">
        <Link href="/">
              <Image
                src="/logo.png" 
                alt="Logo"
                width={150} 
                height={50} 
                className="cursor-pointer justify-self-start" 
              />
            </Link>
        </div>
        <div className="space-x-10 pr-20">
          <Link href="/" className=" text-stone-900 hover:text-stone-500">Home</Link>
          <Link href="#skills" className=" text-stone-900 hover:text-stone-500">Skills</Link>
          <Link href="#projects" className=" text-stone-900 hover:text-stone-500">Projects</Link>
          <Link href="#contact" className=" text-stone-900 hover:text-stone-500">Contact</Link>
        </div>
      </div>
    </div>
  </nav>

  );
};

export default Navbar;