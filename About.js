import React from "react";
import Image from 'next/image';


export default function About() {
  return (
    <>
      <div
        className="flex flex-col-reverse sm:flex-row  justify-around   py-5 mt-3 mb-5 h-[50%] anima"
        id="About"
      >
        <div className="sm:w-1/2 sm:h-96 item-center align-middle justify-center flex h-[50%] w-full">
          <div className="w-1/2 sm:w-1/2 px-4 flex">
            <Image
            width={400}
            height={400}
              src="/Anandu.jpeg"
              alt="..."
              className="picRound rounded-full max-w-full h-full align-middle border-none mt-5 md:w-46 md:m-0  object-cover"
            />
          </div>
        </div>
        <div className="sm:w-1/2 w-full flex-col text-center  h-[50%] sm:h-96 ">
          <h1 className="text-3xl font-bold mt-10">About Me</h1>
          <p className="mt-8 mx-5">
            {/* Hey! I am Anantha Krishnan,a Front-end Web and App Developer from Kerala, India.
                 I'm currently pursuing Btech Computer Science. I've always been passionate about new technologies and love Up-Skilling myself. I'm always up for new challenges and look forward too bring value to people's life.  */}
            Hello, I'm Anantha Krishnan, a self-taught web and app developer who
            is currently studying BTech. I have a strong foundation in both
            front-end and back-end development, honed through my own dedication
            and self-study. My passion for web and app development has allowed
            me to create dynamic, user-friendly websites and apps that provide
            an excellent user experience. I'm always striving to improve and
            stay up to date with the latest development technologies.I look
            forward to the opportunity to bring your project to life.;
          </p>
        </div>
      </div>
    </>
  );
}
