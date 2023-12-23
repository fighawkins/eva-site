const About = () => {
    return (
      <div className="container mx-auto p-4">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 md:h-2/3 w-48 h-48 opacity-60" style={{ backgroundColor: '#4DBC17' }}>
        </div>
        <div className="flex flex-col md:flex-row items-center relative z-10 ">
          <div className="md:w-1/2 p-8">
            <p className="italic text-left leading-relaxed">
              {/* Replace with actual content */}
              Eva was born in 1990 and grew up in Northwest Washington State.  <br/>  <br/> Her recipe for banana cream pie was dictated to her in a dream; <br/>  <br/>  sometimes intel is received directly and other times there is code to decipher. <br/>  <br/>  Did you know that the songs of cricket nymphs indicate just how warm and pleasant the evening will be? <br/>  <br/>  This sound gets certain people in the mood for love :)  <br/>  <br/> The cricket thermometer method is an old folk trick you can try for yourself—  <br/>  <br/> count the number of cricket chirps in 14 seconds and add 40. 30 chirps+40=70 degrees Fahrenheit.
            </p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center">
            <img src="/image1.png" alt="Artist" className="w-1/2 object-cover" style={{ height: '200% !important' }} />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;