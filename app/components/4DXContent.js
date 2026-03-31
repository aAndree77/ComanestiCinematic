export default function FourDXContent() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="w-full py-10 text-center bg-black">
        <p className="text-[10px] md:text-xs font-black tracking-[0.6em] text-zinc-500 uppercase">
          4DX – Simte filmul pe pielea ta
        </p>
      </div>

      <section className="w-full bg-black">
        <img 
          src="/4dx.jpg" 
          alt="4DX Cinema" 
          className="w-full h-auto block" 
        />
      </section>

      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-[900] tracking-tighter uppercase text-white">
              Mai multe despre <span className="text-brand-gold italic">4DX</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-12">
              <div className="pl-8">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4">Senzații Reale</h3>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-medium">
                  Deveniți parte din poveste! Simțiți vântul, ceața, fulgerele și o varietate de mirosuri, toate sincronizate perfect cu acțiunea de pe ecran.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4">Scaune Mobile</h3>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-medium">
                  Echipate cu stimulatoare motorizate, scaunele se mișcă în trei moduri: ridicare, vălurire și ruliu. De la vibrații subtile la mișcări dinamice, totul este adaptat ideal fiecărei secvențe.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4">Efecte Ambientale</h3>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-medium">
                  Tehnologia de ultimă generație oferă efecte speciale elaborate: lumini (fulgere, explozii), mirosuri diverse, sistem de aer și duze de apă pentru ploi torențiale sau ceață.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4">Imagine 2D & 3D</h3>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-medium">
                  Compatibilă cu formate 2D și 3D, tehnologia Master Image 3D pe ecran argintiu oferă o claritate de cristal și peste 24 de variante de efecte speciale.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end items-center">
              <img 
                src="/4dxlogo.png" 
                alt="Logo 4DX" 
                className="w-full max-w-[400px] md:max-w-[550px] h-auto block object-contain opacity-100" 
              />
            </div>

          </div>
        </div>
      </section>


      <section className="py-20 text-center bg-black">
        <h2 className="text-xl md:text-3xl font-[900] tracking-[0.25em] uppercase text-brand-gold">
          4DX - Filme în program acum
        </h2>
      </section>

      <section className="pb-32 px-6 bg-black flex flex-col items-center">
        <div className="max-w-md w-full">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/Scream7.jpg" 
              alt="Scream 7" 
              className="w-full h-auto block"
            />
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-3xl md:text-4xl font-[900] tracking-tighter uppercase italic text-white">
              Scream <span className="text-brand-gold not-italic">7</span>
            </h3>
            <p className="mt-3 text-zinc-600 font-bold tracking-[0.3em] uppercase text-[9px]">
              Disponibil Acum
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}