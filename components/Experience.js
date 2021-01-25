export const Experience = () => {
    return (<section className="mt-8 first:mt-0">


        <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                EXPERIENCE
            </h2>

            {/*BairesDev*/}
            <section className="mb-4.5 break-inside-avoid">
                <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        Bairesdev
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                        Jan 2019 – Present | Technical Lead
                    </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    <ul className="ml-1">
                        <li>Worked with a big team to build a microservice platform for healthcare (HIPAA compliance).</li>
                        <li>Worked with a frontend team to build a responsive web built in React and SEO performant.</li>
                    </ul>
                </p>
                <footer className="mt-3 leading-normal text-md text-gray-650 ">
                    <p className="text-tiny"><b>Technologies:</b> <span>NodeJS, GCP, React, NextJS, Graphcms, ElasticSearch, NextJS.</span></p>
                    <p className="mt-1 text-tiny"><b>Databases:</b> <span>Postgres, MongoDB.</span></p>
                </footer>
            </section>

            {/*Freelancer*/}
            <section className="mb-4.5 break-inside-avoid">
                <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        Freelancer
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                        Jan 2018 – 2019
                    </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    <ul className="ml-1">
                        <li>Worked with a team to create a complete NodeJS application to visualize a data dictionary using Graph databases.</li>
                        <li>Created a brand new frontend using Aurelia Framework.</li>
                        <li>Created micro-services that generate RDF databases from different data-sources.</li>
                        <li>Created a react-native (typescript) mobile application like Uber but for taxis.</li>
                        <li>Used Mocha, Istanbul and Jest for unit and functional testing.</li>
                    </ul>
                </p>
                <footer className="mt-3 leading-normal text-md text-gray-650 ">
                    <p className="text-tiny"><b>Technologies:</b> <span>NodeJS, Webpack, Typescript, AWS Lambda, Docker, Aurelia, React-Native, Less, PHP.</span></p>
                    <p className="mt-1 text-tiny"><b>Databases:</b> <span>Allegrograph (RDF, Sparql), MySQL, Postgres, MongoDB.</span></p>
                </footer>
            </section>

            {/*Medikly*/}
            <section className="mb-4.5 break-inside-avoid">
                <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        Medikly
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                        Jan 2017 - Jan 2018 | Former Lead Developer
                    </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    <ul className="ml-1">
                        <li>Made a business intelligence software using PHP and NodeJS.</li>
                        <li>Worked with plaforms such as Kylo and OroCRM</li>
                        <li>Used various databases like Redshift, Postgres, MySQL and Mongodb.</li>
                        <li>Deployed various applications using AWS technologies like Elasticbeanstalkd, Load Balancers, Routers, etc.</li>
                    </ul>
                </p>
                <footer className="mt-3 leading-normal text-md text-gray-650 ">
                    <p className="text-tiny"><b>Technologies:</b> <span>PHP (Symfony), NodeJS, Webpack, Docker, Sass, JQuery, Backbone, Javascript, Material Design patterns.</span></p>
                    <p className="mt-1 text-tiny"><b>Databases:</b> <span>Redshift, Postgres, MySql, MongoDB, Redis.</span></p>
                </footer>
            </section>

            <p>
                For more experience take a look at my <a href="https://www.linkedin.com/in/germanbortoli/" target="_blank" rel="nofollow">Linkedin</a>
            </p>
        </div>

    </section>)
}
