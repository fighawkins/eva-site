import Link from 'next/link';


const Header = () => {
  return (
    <header className="bg-white text-red-500 p-4 mb-10 fixed top-0 left-0 right-0 z-50" >
      <nav className=" lg:text-lg flex justify-between items-center lg:px-6 ">
        <Link href="/newpage">
          <span className=" cursor-pointer  hover-link">Home</span>
        </Link>
        <Link href="/about">
          <span className=" cursor-pointer hover-link text-[#4DBC17]">About</span>
        </Link>
        <Link href="/contact">
          <span className="  cursor-pointer hover-link">Contact</span>
        </Link>
        <Link href="/wide-blue-yawn">
          <span className=" text-blue-300 cursor-pointer hover-link">Wide Blue Yawn</span>
        </Link>
        <Link href="/">
          <img src="/car.png" alt="Car" className="h-12 md:h-14 lg:h-16 object-contain hover-link" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;