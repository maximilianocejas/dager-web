export default function Contact(){
    return(
        <>
        <section className="bg-primary h-[500px] w-full relative flex justify-end items-start text-white pr-20">
            <div className="h-[450px] w-[450px] absolute left-0 top-4 overflow-hidden">
                <div className="relative h-full w-full">
                <img className="absolute left-0 top-4 h-full object-cover" src="./logo-nobg.png" alt="" />
                <div className="absolute top-0 left-0 bg-gradient-to-b from-primary to-transparent h-[400px] w-full"></div>
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-primary to-transparent h-[400px] w-full"></div>
                </div>

            </div>
            <div className="flex flex-col gap-y-6 pt-20">
            <p className="text-6xl font-medium">Explore all my networks and<br/> learn more about me</p>

              
                    <ul className="flex gap-x-4">
                        <li><a target="_BLANK" className="flex  gap-x-2 opacity-50 hover:opacity-85 text-sm font-light" href="https://www.instagram.com/dager.32/">
                            Instagram
                            </a>
                        </li>
                        <li><a target="_BLANK" className="flex gap-x-2 items-center opacity-50 hover:opacity-85 text-sm font-light" href="https://www.linkedin.com/in/mariano-luis-villa/">
                            Linkedin
                            </a>
                        </li>
                        <li><a target="_BLANK" className="flex gap-x-2 items-center opacity-50 hover:opacity-85 text-sm font-light" href="https://www.youtube.com/@DotDager">
                            Youtube
                            </a>
                        </li>
                    </ul>
                </div>
         
        </section>
        <footer className="w-full h-fit bg-primary text-8xl overflow-hidden py-4 text-white font-semibold">
        <div className="slider-contact">
          <div className="slide-track-contact text-9xl font-semibold uppercase">
            <p className="slide-contact">dotdager@contact.com</p>
            <p className="slide-contact">dotdager@contact.com</p>
            <p className="slide-contact">dotdager@contact.com</p>
            <p className="slide-contact">dotdager@contact.com</p>
          </div>
        </div>
        </footer>
        </>
    )
}