import gsap from "gsap";
import Hero from "./Hero";
import Nav from "./Nav";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
   useEffect(()=>{
    let tl = gsap.timeline()
    tl.to(".video-section",{
        translateY: "-100%"
    })
    ScrollTrigger.create({
        animation: tl,
        trigger: ".header-container",
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true
    })
   },[])
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden header-container">
    <header className="bg-radial relative top-0">
      <Nav />
      <Hero />
      <div className="bg-image"></div>
    </header>
      <section className="h-screen video-section w-full bg-primary text-white flex flex-col gap-y-4 px-10 py-8 uppercase absolute z-[1] top-[100%]">
            <h2 className="text-2xl font-semibold">Watch my last video</h2>
            <div className="w-full h-full">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/DaRes1TR3XQ?si=_CjpT-fKGFVzB5gA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
        </div>
        </>
  );
}
