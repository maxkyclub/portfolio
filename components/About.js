import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="animate-pulse text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Looking for a software engineer?
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            Hello! My name is Thanatorn Boonnak. I am a Earth-based software engineer.
                            I have a diverse set of skills, ranging from people to product. Communicative, mentoring, problem-sovlving skill. Web development, backend, system integration, chatbot, and social features. 
                            Experienced in Finance, e-learning, healthcare, insurance, hospitality fields.
                        </p>  
                    </div>
                        <div className="mt-6 text-gray-800 dark:text-white">
                            <p class="px-4 py-1 text-sm text-white bg-red-600 border-transparent  hover:text-red-600 hover:bg-white font-semibold rounded-full border hover:border-red-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                JavaScript, TypeScript, NodeJS, PHP, ExpressJS, Laravel, HTML, CSS, ReactJS, NextJS, Tailwind
                            </p>
                        </div>
                        <div className="mt-1 text-gray-800 dark:text-white">
                            <p class="px-4 py-1 text-sm text-white bg-yellow-400 border-transparent  hover:text-yellow-400 hover:bg-white font-semibold rounded-full border hover:border-yellow-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                AWS, Azure, GCP, Docker, MySQL, PostgreSQL, Elasticsearch, Kibana, REST, JSON 
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
