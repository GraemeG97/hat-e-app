import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="bg-green-500 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <Link href="/">
              <Image
                className="rounded-lg"
                src="/Logo.png"
                height={100}
                width={100}
                alt="Logo for Hat brand"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 ml-auto transition-all duration-500 ease-in-out">
            <Link
              href="/about-us"
              className="hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-green-300 text-black hover:bg-gray-300"
            >
              About us
            </Link>

            <Link
              href="/shop"
              className="hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-green-300 text-black hover:bg-gray-300"
            >
              All hats
            </Link>

            <Link
              href="/shop/caps"
              className="hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-green-300 text-black hover:bg-gray-300"
            >
              Caps
            </Link>

            <Link
              href="/shop/other-hats"
              className="hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-green-300 text-black hover:bg-gray-300"
            >
              Beanies
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
