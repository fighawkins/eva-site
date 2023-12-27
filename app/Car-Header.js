import Link from 'next/link';


const CarHeader = () => {
  return (
    <header className="bg-white text-red-500 p-4  " >
      <nav className="flex justify-around items-center space-x-4">
        <Link href="/">
        <img src="/car.png" alt="Car" className="mx-auto h-12 md:h-16 lg:h-20 object-contain" />        
        </Link>
        
      </nav>
    </header>
  );
};

export default CarHeader;