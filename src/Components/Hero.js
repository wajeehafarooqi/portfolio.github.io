import React from 'react';
import file from '../pages/MyCV.pdf';


const Hero = () => {
    return (
        <>
            <section className="text-blue-300 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello! I'M <span className="text-blue-700">WAJEEHA</span> 
                            <br className="hidden lg:inline-block"/>
                        </h1>
                        <p className="mb-8 text-left leading-normal">I am an energetic, ambitious person who has developed a mature and responsible approach to any task. I have 4 year experience as lecturer in University of Lahore. Experience of doing research in the field of medical sciences and civil engineering using machine learning techniques.  I am excellent in team work to achieve certain objective in time and with excellence.</p>
                        <div className="flex justify-center">
                            {/* <a herf="" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Hire me</a> */}
                            <a href={file} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" download> Get Resume</a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img className="object-fill  rounded-full h-50 w-60" alt="hero" src="./images/my.JPG"/>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default Hero
