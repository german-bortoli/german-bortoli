import Head from 'next/head'
import {AboutMe} from "../components/AboutMe";
import {Experience} from "../components/Experience";
import {Education} from "../components/Education";
import {Skills} from "../components/Skills";
import {ContactMe} from "../components/ContactMe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resume | German Bortoli</title>
        <meta name="description" content="Meet German Bortoli CV, curriculum vitae of a software developer, full stack dev and technical leader." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:title" content="Resume | Bortoli German" />
        <meta name="og:description" content="Meet German Bortoli CV, curriculum vitae of a software developer, full stack dev and technical leader." />
        <meta name="og:ur" content="https://german.borto.li" />
        <meta name="og:image" content="https://german.borto.li/german-bortoli.png" />

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context":"http://schema.org/",
                    "name":"Bortoli German",
                    "@type":"Person",
                    "email":"german@borto.li",
                    "jobTitle": "Software Developer",
                    "telephone": "+54 (342) 5285905",
                    "url": "https://german.borto.li",
                    "image": "https://german.borto.li/german-bortoli.png",
                    "gender": "male",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Santa Fe",
                        "addressRegion": "Santa Fe",
                        "postalCode": "3000"
                    },
                    "sameAs":[
                        "https://github.com/german-bortoli",
                        "https://www.linkedin.com/in/germanbortoli",
                    ]
                })
            }}
        />
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
