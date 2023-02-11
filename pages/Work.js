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
        <h1 className="font-bold text-4xl p-3">What I'm Good at&apos;</h1>

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
                  width={100}
                  height={100}
                  className="object-cover w-full h-56 "
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                  width={100}
                  height={100}
                  className="object-cover w-full h-56"
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                {/* <Image
                  width={100}
                  height={100}
                  className="object-cover w-full h-56"
                  src="https://img.freepik.com/free-vector/marketing-concept-illustration_114360-3903.jpg?size=626&ext=jpg&ga=GA1.2.267023450.1675486331&semt=ais"
                  alt="avatar"
                ></Image> */}

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
