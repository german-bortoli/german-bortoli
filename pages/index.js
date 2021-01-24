import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {AboutMe} from "../components/AboutMe";
import {Experience} from "../components/Experience";
import {Education} from "../components/Education";
import {Skills} from "../components/Skills";
import {ContactMe} from "../components/ContactMe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resume | German Bortoli > Technical Leader > Full Stack Developer</title>
        <meta name="description" content="Meet Bortoli German CV, curriculum vitae of a software developer, full stack dev and technical leader." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="font-firago hyphens-manual">


        <div
            className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">


          <header className="flex items-center mb-8 md:mb-11">
            <div
                className="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3"
                >
              <div className="initial text-center pt-1">G</div>
              <div className="text-center initial pb-1">B</div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-750 pb-px">
              German Bortoli
            </h1>
          </header>



          <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">

            <AboutMe />

            <Experience />

            <Education />

            <Skills />

            <ContactMe />

          </div>


        </div>


      </main>


    </div>
  )
}
