export default function Interets() {
  return (
    <>
  
    <main className="flex flex-col w-full h-fit px-10 py-20 text-white bg-primary gap-y-20">
      <section className="w-full h-fit grid grid-cols-3 gap-x-4">
        <article className="w-full h-fit">
          <div className="flex flex-col  gap-y-4 text-lg font-light">
            <img className="w-full object-cover" src="./cucumber.png" alt="" />
            <p>I am a person passionate about cucumbers</p>
          </div>
        </article>
        <article className="w-full h-fit flex flex-row justify-end">
          <div className="flex flex-col  gap-y-4 text-lg font-light">
            <img className="w-full object-cover" src="./book.png" alt="" />
            <p>
              Passionate about philosophy, I enjoy exploring deep ideas and
              questioning the nature of reality.
            </p>
          </div>
        </article>
        <article className="w-full h-fit">
          <div className="flex flex-col  gap-y-4 text-lg font-light">
            <img className="w-full object-cover" src="./cat.png" alt="" />
            <p>Cat lover, I enjoy their company and their unique charm.</p>
          </div>
        </article>
      </section>
    </main>
    <div className="w-full h-fit text-white bg-primary text-4xl font-medium capitalize shadow-2xl">
    <div className="slider">
      <div className="slide-track">
        <div className="slide 1">
          <img src="./university.jpeg" alt="" />
        </div>
        
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        <div className="slide">
          <img src="./university.jpeg" alt="" />
        </div>
        
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        <div className="slide">
          <img src="./university.jpeg" alt="" />
        </div>
        
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        <div className="slide 2">
          <img src="./university.jpeg" alt="" />
        </div>
        
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        <div className="slide">
          <img src="./university.jpeg" alt="" />
        </div>
        
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        <div className="slide">
          <img src="./university.jpeg" alt="" />
        </div>
        
        <div className="slide">
          <img src="./grupo.jpeg" alt="" />
        </div>
        
      </div>
    </div>
  </div>  </>
  );
}
