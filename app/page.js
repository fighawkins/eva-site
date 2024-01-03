import Link from 'next/link';




 

const Home = () => (   
  
  <div className="w-full h-screen relative">
  <video autoPlay playsInline loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/website.mp4" type="video/mp4" />
        {/* Fallback content or GIF as needed */}
      </video>
    


      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-4xl lg:text-6xl mb-4"></h1>
        <Link href="/newpage">
        <button className="px-6 py-4 bg-hidden text-red-500 bg-white font-bold rounded text-4xl">
          Enter
        </button>
        </Link>
      </div>
    </div>
  );


export default Home;