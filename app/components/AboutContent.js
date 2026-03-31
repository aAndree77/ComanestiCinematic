export default function AboutContent() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-8 md:py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="max-w-md md:max-w-xl w-full">
              <img 
                src="/Liceu2.jpg" 
                alt="Colegiul Tehnic Dimitrie Ghika" 
                className="w-full h-auto block shadow-2xl grayscale-[15%] hover:grayscale-0 transition-all duration-700 rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-3xl md:text-5xl font-[900] tracking-tighter uppercase leading-[0.9] md:leading-none">
                Viziunea <br/>
                <span className="text-brand-gold italic">Generației Noastre.</span>
              </h1>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-zinc-500 text-sm md:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              <p>
                Acest proiect este rezultatul pasiunii și muncii în echipă, fiind fondat de către elevii clasei a 10-a B din cadrul Colegiului Tehnic „Dimitrie Ghika” Comănești.
              </p>
              <p>
                Sub îndrumarea doamnei profesoare Felegean Simona, cei 28 de elevi ai clasei au unit forțele pentru a crea un concept modern, dedicat întregii comunități.
              </p>
              <p className="hidden md:block">
                Comănești Cinematic reprezintă mai mult decât un cinematograf; este dovada creativității noastre și a dorinței de a aduce tehnologia de top în orașul nostru.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center lg:text-left">
                <span className="block text-xl md:text-2xl font-black text-white">28</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Elevi</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-xl md:text-2xl font-black text-white">10-B</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Clasa</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-xl md:text-2xl font-black text-white">CTDG</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Liceu</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}