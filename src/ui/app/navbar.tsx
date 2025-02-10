import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-stone-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
          {/* <Link href="/">
                <Image
                  src="@/" // Path to your logo image in the public directory
                  alt="My Logo"
                  width={150} // Set the width of the image
                  height={50} // Set the height of the image
                  className="cursor-pointer" // Optional: Add cursor pointer for better UX
                />
              </Link> */}
          </div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/Skills" className="text-gray-700 hover:text-blue-500">Skills</Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;