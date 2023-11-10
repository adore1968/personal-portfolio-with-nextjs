import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between py-5 px-12 items-center border-b">
      <Link href="/" className="text-2xl sm:text-3xl font-semibold">
        Simple Portfolio
      </Link>
    </nav>
  );
}

export default Navbar;
