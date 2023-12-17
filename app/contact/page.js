export default function ContactPage() {
    return (
      <div className="flex flex-col justify-center items-center ">
        <div className="relative w-3/5 lg:w-1/3 h-3/5 lg:h-1/3 bg-center bg-cover">
          <img src="/image5.png" alt="Contact Image" className="w-full h-full object-cover opacity-80" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl lg:text-7xl text-red-500 font-bold">
              Call Me
            </h1>
          </div>
        </div>
      </div>
    );
  }