import Image from "next/image";
import profilePic from "../../public/german.jpeg";
import Link from "next/link";

function Header() {
  return (
    <header className="">
      <div className="border text-gray-50 p-5 flex sm:flex-row flex-col gap-5 h-full">
        <div className="w-full sm:w-[40%]">
          <Image src={profilePic} alt="profile-pic" className="rounded-full" />
        </div>
        <div className="w-full text-center sm:text-left">
          <h2 className="mb-2 text-2xl sm:text-3xl font-bold">Germán Goméz</h2>
          <h4 className="text-xl mb-1 sm:text-2xl font-medium">
            FullStack Developer
          </h4>
          <p className="text-lg text-gray-200 sm:text-xl">
            FrontEnd Developer, looking for my first IT job in a dependency
            relationship, I am a creative and curious person, I love challenges
            and I am passionate about constantly learning.
          </p>
          <Link
            href="https://www.linkedin.com/in/jos%C3%A9-g%C3%B3mez-8a6067246/"
            target="_blank"
            className="mt-5 inline-block px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors text-gray-50 rounded ease-in text-lg sm:text-xl"
          >
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
