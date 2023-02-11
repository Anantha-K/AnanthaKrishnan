import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaGithub,FaLinkedinIn} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='w-full'>  
        <footer className='bg-black text-white bottom-0 flex-col text-center pb-2'>
            <h1 className='pt-5 text-3xl mb-5'>Find me on...</h1>
            <ul className='flex min-w-full justify-center my-4 mb-0 pb-2'>
                <li className='cursor-pointer transition duration-300 mx-5 my-3 text-4xl hover:text-blue-900 hover:translate-y-1.5'>
                    <a href='https://www.facebook.com/jananthak/' target='_blank' >
                    <FaFacebook/>
                    </a>
                </li>
                <li className='cursor-pointer mx-5 my-3 transition duration-300 text-4xl hover:text-pink-500 hover:translate-y-1.5'>
                    <a href="https://www.instagram.com/_anandu_0/" target="_blank">
                    <FaInstagram/>
                    </a>

                </li>
                <li className='cursor-pointer mx-5 my-3 transition duration-300 text-4xl hover:text-cyan-500 hover:translate-y-1.5'>
                    <a href='#'>
                    <FaTwitter/>
                    </a>
                </li>
                <li className='cursor-pointer transition duration-300 mx-5 my-3 text-4xl hover:translate-y-1.5 '>
                    <a href='https://github.com/Anantha-K'>
                    <FaGithub/>
                    </a>
                </li>
                <li className='cursor-pointer transition duration-300 mx-5 my-3 text-4xl hover:translate-y-1.5 hover:text-[#0A66C2] '>
                    <a href='https://www.linkedin.com/in/anantha-krishnan-b9b608254' target='_blank'>
                    <FaLinkedinIn/>
                    </a>
                </li>
        
        
                
            
            </ul>
        </footer>
        </div>
    )
}

