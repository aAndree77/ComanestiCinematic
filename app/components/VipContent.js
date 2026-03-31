export default function VipContent() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="w-full py-6 md:py-10 text-center bg-black">
        <p className="text-[9px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.6em] text-zinc-600 uppercase px-4">
          VIP – Exclusivitate și Confort Absolut
        </p>
      </div>

      <section className="py-8 md:py-16 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="max-w-sm md:max-w-md w-full">
              <img 
                src="/vip.jpg" 
                alt="Cinema VIP" 
                className="w-full h-auto block shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-10 md:space-y-12 text-center lg:text-left order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter uppercase mb-4 leading-none">
                Experiența <span className="text-brand-gold italic">VIP</span>
              </h1>
            </div>

            <div className="space-y-8 md:space-y-10">
              <div className="max-w-md mx-auto lg:mx-0">
                <h3 className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-3">Ultra-Confort</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                  Relaxează-te în fotolii de piele complet reglabile electric, concepute pentru o susținere ergonomică perfectă pe toată durata filmului.
                </p>
              </div>

              <div className="max-w-md mx-auto lg:mx-0">
                <h3 className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-3">Lounge Privat</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                  Acces exclusiv în zona de Lounge VIP, un spațiu intim unde te poți pregăti pentru vizionare într-un ambient rafinat.
                </p>
              </div>

              <div className="max-w-md mx-auto lg:mx-0">
                <h3 className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-3">Servicii Dedicate</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                  Meniul nostru selecționat include gustări gourmet și băuturi premium, servite cu discreție maximă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg md:text-3xl font-[900] tracking-[0.2em] md:tracking-[0.25em] uppercase text-brand-gold text-center mb-12 md:mb-20">
            VIP - Filme în program acum
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-16">
            <div className="max-w-[280px] md:max-w-md w-full group">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 aspect-[2/3]">
                <img 
                  src="/BaietiDeOras.jpg" 
                  alt="Băieți de Oraș" 
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="mt-6 md:mt-8 text-center">
                <h3 className="text-xl md:text-3xl font-[900] tracking-tighter uppercase italic text-white leading-tight">
                  Băieți de Oraș
                </h3>
                <p className="mt-2 text-zinc-600 font-bold tracking-[0.3em] uppercase text-[8px] md:text-[9px]">Disponibil VIP</p>
              </div>
            </div>

            <div className="max-w-[280px] md:max-w-md w-full group">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 aspect-[2/3]">
                <img 
                  src="/MoarteaInVacanta.jpg" 
                  alt="MoarteaInVacanta" 
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="mt-6 md:mt-8 text-center">
                <h3 className="text-xl md:text-3xl font-[900] tracking-tighter uppercase italic text-white leading-tight">
                  Moartea În Vacanță
                </h3>
                <p className="mt-2 text-zinc-600 font-bold tracking-[0.3em] uppercase text-[8px] md:text-[9px]">Disponibil VIP</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}