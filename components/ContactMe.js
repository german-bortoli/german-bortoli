export const ContactMe = () => {
    return (<section className="mt-8 first:mt-0">


        <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                CONTACT
            </h2>

            <section className="mb-4.5 break-inside-avoid">
                <ul className="list-inside pr-7" style={{listStyle: "none"}}>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                        Location: Santa Fe, Santa Fe, Argentina
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                        Email: german@borto.li
                    </li>
                    <li className="mt-1.5 leading-normal text-gray-700 text-md">
                        <a href="https://www.linkedin.com/in/germanbortoli/" className="group" target="_blank" rel="nofollow">
                            Linkedin
                            <span
                                className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in ml-1">↗</span>
                        </a>
                        {' '}|{' '}
                        <a href="https://github.com/german-bortoli" className="group" target="_blank" rel="nofollow">
                            Github
                            <span
                                className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in ml-1">↗</span>
                        </a>
                    </li>
                </ul>
            </section>

        </div>

    </section>)
}
