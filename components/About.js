import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Looking for a software engineer?
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            Hello! My name is Thanatorn Boonnak. I am a Thailand-based software engineer.
                            I have a diverse set of skills, ranging from people to technical. Web development. 
                            Experienced in elearning, healthcare, insurance, hospitality fields.
                        </p>

                        <p class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            NodeJS, PHP, ExpressJS, Laravel, HTML, CSS, JavaScript, Tailwind, AWS, GCP
                        </p>

                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={200}
                        height={250}
                    />
                </div>
            </div>
        </div>
    )
}

export default About;