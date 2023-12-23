import Link from 'next/link';




 

const Home = () => (   
   <div className="w-full h-screen relative">
      <video autoPlay loop muted className="w-auto mx-auto h-full object-cover">
        <source src="/this.webm" type="video/mp4" />
        {/* Fallback content or GIF as needed */}
      </video>
    


      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-4xl lg:text-6xl mb-4"></h1>
        <Link href="/newpage">
        <button className="px-6 py-3 bg-white text-black font-bold rounded">
          Enter
        </button>
        </Link>
      </div>
    </div>
  );


export default Home;