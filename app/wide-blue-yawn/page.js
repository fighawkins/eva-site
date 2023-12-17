import React from 'react';

const WideBlueYawn = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-3/5 lg:w-1/2">
        {/* Responsive container for the iframe */}
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/6IDUa_6IHI4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-3/5 mx-auto text-center mt-8">
        <h2 className="text-lg lg:text-2xl text-blue-300 font-bold">Wide Blue Yawn</h2>
        <p className="mt-4 ">
        The idea for Wide Blue Yawn occurred to Eva after observing a UFO on a beach in WA state in October 2020. After her mysterious encounter she decided to embark on deep research of that location, which she had been visiting since childhood. Wide Blue Yawn attempts to capture layers of history at the mouth of the Columbia River and to honor specific feelings invoked by rugged pacific northwest landscapes, the spiritual presence of the first human inhabitants (The Chinookan people), and all that has unfolded since Lewis and Clark hit the scene in 1805– from a famous “alligator man” to the yogurt aisle in Fred Myer. Wide Blue Yawn spans the centuries and wonders how we ended up here, in our strange present reality. 
        </p>
        <h3 className="text-lg font-bold mt-6 text-blue-300">Shown</h3>
        <ul className="list-disc list-inside mt-2">
          <li> Mississippi Records Portland, OR, July 2023</li>
          <li>Astoria Film Festival Astoria, OR  October 2023</li>
          <li>Sou’wester Lodge Long Beach, WA Winter 2023-24</li>
          {/* Add more festivals here */}
        </ul>
      </div>
    </div>
  );
};

export default WideBlueYawn;
