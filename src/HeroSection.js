import React from 'react';
import './HeroSection.css'; // Import the CSS file for the hero section styles

const HeroSection = () => {
  // 
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-xl capitalize max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-semibold text-lime-600 max-md:max-w-full">
              <span className="">Providing Quality </span>
              <span className="text-cyan-700">Healthcare</span>
              <span className=""> for a </span>
              <span className="text-lime-600">Brighter</span>
              <span className=""> and </span>
              <span className="text-lime-600">Healthy</span>
              <span className=""> Future</span>
            </div>
            <div className="mt-9 tracking-wider text-black text-opacity-70 max-md:max-w-full">
              At our hospital, we are dedicated to providing exceptional medical
              care to our patients and their families. Our experienced team of
              medical professionals, cutting-edge technology, and compassionate
              approach make us a leader in the healthcare industry
            </div>
            <div className="flex gap-5 mt-28 font-medium text-center max-md:flex-wrap max-md:mt-10">
              <div className="px-10 py-3.5 tracking-tighter text-white whitespace-nowrap bg-cyan-700 rounded-lg max-md:px-5">
                appointments
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84a5f3c7cd2d5507555cae6b7fb6a5b079b5b3e652371721d9415d759749cafa?"
                className="shrink-0 aspect-square w-[51px]"
              />
              <div className="flex-auto my-auto text-black">watch video</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="grow w-full aspect-[0.93] max-md:mt-3.5 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
