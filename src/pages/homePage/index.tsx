import { useState, useEffect } from 'react';
import Button from "../../button";
import { developerIntro, developerShortInfo } from "../../config/homeConfig";
import './home.scss';
import SvgImage from '../../components/svgComp';

const HomePage = () => {
  const [showFirst, setShowFirst] = useState(true);

  // Toggle between showing the first and second div automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev); // Toggle the state every interval
    }, 5000); // Change every 5 seconds (adjust the time as necessary)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="container bg-black relative flex justify-center items-center h-screen">
      <div className="relative w-full h-full">
        <div
          className={`absolute inset-0 flex items-center justify-between transition-opacity duration-500 ease-in-out ${
            showFirst ? 'opacity-100 scale-100 animate-bounce-in' : 'opacity-0 scale-90 animate-bounce-out'
          }`}
        >
          <div className="ml-20">
            <span className="bg-transparent tracking-widest text-light-orange mb-4 uppercase text-sm">Hello!</span>
            <div className="mb-4 mt-3 bg-transparent text-white text-6xl font-extrabold">
              I'm <span className="bg-transparent text-light-orange">{developerIntro.firstName}</span>
            </div>
            <div className="bg-transparent text-light-orange text-6xl font-extrabold">
              {developerIntro.middleName} {developerIntro.lastName}
            </div>
            <div className="mt-8 mt-3 bg-transparent text-white text-3xl font-normal">{developerIntro.title}</div>
            <div className="mt-8 flex gap-10">
              <Button label={"Hire me"} onClick={() => console.log("clicked")} />
              <Button label={"My work"} variant="outline" onClick={() => console.log("clicked")} />
            </div>
          </div>

          <div className="mr-20">
          <img className='h-screen w-96' src="/icons/primaryImage.svg" alt="loading..." />
          </div>
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-between transition-opacity duration-500 ease-in-out ${
            showFirst ? 'opacity-0 scale-90 animate-bounce-out' : 'opacity-100 scale-100 animate-bounce-in'
          }`}
        >
          {/* Text Section */}
          <div className="ml-20">
            <span className="bg-transparent tracking-widest text-light-orange uppercase text-sm">Hello!</span>
            <div className="mb-4 mt-3 bg-transparent text-white text-6xl font-extrabold">
              I'm a <span className="bg-transparent text-light-orange">{developerShortInfo.jobTitleFirstName}</span>
            </div>
            <div className="bg-transparent text-6xl font-extrabold text-white">
              <span className="text-light-orange">{developerShortInfo.jobTitleLastName}</span> based
            </div>
            <div className="bg-transparent text-6xl font-extrabold text-white">
              in <span>{developerShortInfo.loaction}</span>
            </div>
            <div className="mt-8 flex gap-10">
              <Button label={"Hire me"} onClick={() => console.log("clicked")} />
              <Button label={"My work"} variant="outline" onClick={() => console.log("clicked")} />
            </div>
          </div>

          {/* Image Section (aligned horizontally) */}
          <div className="mr-20">
            <img className='h-screen w-96' src="/icons/primaryImage.svg" alt="loading..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
