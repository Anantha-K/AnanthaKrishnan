import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const Work = () => {
  return (
    <>
      <div
        id="Skills"
        className="flex flex-col justify-center items-center align-middle w-full bg-gradient-to-b from-white via-gray-100 to-gray-800"
      >
        <h1 className="font-bold text-4xl p-3">What I'm Good at</h1>

        <div className=" py-7 h-[50%]  flex flex-col sm:flex-row sm:m-0  justify-center align-middle items-center w-full ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <div className="w-full  mb-4 hover:shadow-2xl cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ml-3 mr-4">
                <Image
                  width={300}
                  height={300}
                  className="object-cover w-full h-56 "
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000&t=st=1676206482~exp=1676207082~hmac=e820b48488ff2121df4ef031f37d5f5345d7f18ea856422b6f842e0558f690e8"
                  alt="avatar"
                ></Image>

                <div className="py-5 text-center">
                  <a
                    href="#"
                    className="block text-2xl font-bold text-gray-800 dark:text-white"
                    tabIndex="0"
                    role="link"
                  >
                    Web Development
                  </a>
                </div>
              </div>
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <div className="w-full  mb-4  hover:shadow-2xl cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ml-3 mr-4">
                <Image
                  width={400}
                  height={400}
                  className="object-cover w-full h-56"
                  src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=2000&t=st=1676207197~exp=1676207797~hmac=54bdd8e9280cf2c65cffffef9914eddcc3ef084b7081cce36bcee43cd4bd4797"
                  alt="avatar"
                ></Image>

                <div className="py-5 text-center">
                  <a
                    href="#"
                    className="block text-2xl font-bold text-gray-800 dark:text-white"
                    tabIndex="0"
                    role="link"
                  >
                    App Development
                  </a>
                </div>
              </div>
            </motion.button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <div className="w-full max-w-xs mb-4  hover:shadow-2xl cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ml-3 mr-4">
                <Image
                  width={100}
                  height={100}
                  className="object-cover w-full h-56"
                  src="https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg?w=2000&t=st=1676207299~exp=1676207899~hmac=1c1b9e9f2cea1ffe69df8ffc66340aea3e1a9a9badf1575871009a7fca1eb86a"
                  alt="avatar"
                ></Image>

                <div className="py-5 text-center">
                  <a
                    href="#"
                    className="block text-2xl font-bold text-gray-800 dark:text-white"
                    tabIndex="0"
                    role="link"
                  >
                    Digital Marketing
                  </a>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Work;
