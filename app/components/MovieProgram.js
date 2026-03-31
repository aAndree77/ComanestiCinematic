import Link from 'next/link';

const filme = [
  {
    id: 1,
    titlu: "Căsătoria",
    gen: "Comedie",
    format: "2D",
    rating: "N-15",
    durata: "105 min",
    limba: "Română",
    detalii: "Limba nativă",
    imagine: "/Casatoria.jpg",
    ore: ["16:00", "17:20", "18:40"]
  },
  {
    id: 2,
    titlu: "Băieți de oraș: Golden Boyz",
    gen: "Comedie",
    format: "2D",
    rating: "15+",
    durata: "98 min",
    limba: "Română",
    detalii: "Limba nativă",
    imagine: "/BaietiDeOras.jpg",
    ore: ["16.40", "18.10", "19.30"]
  },
  {
    id: 3,
    titlu: "Dragoste la țară",
    gen: "Comedie Romantică",
    format: "2D",
    rating: "AG",
    durata: "112 min",
    limba: "Română",
    detalii: "Limba nativă",
    imagine: "/DragosteLaTara.jpg",
    ore: ["17.00", "18.30"]
  },
  {
    id: 4,
    titlu: "Moartea în vacanță",
    gen: "Comedie",
    format: "2D",
    rating: "N-15",
    durata: "95 min",
    limba: "Română",
    detalii: "Limba nativă",
    imagine: "/MoarteaInVacanta.jpg",
    ore: ["16.20", "17.50", "19.20"]
  },
  {
    id: 5,
    titlu: "Scream 7",
    gen: "Horror • Mister",
    format: "4DX",
    rating: "IM-18",
    durata: "124 min",
    limba: "Engleză",
    detalii: "Subtitrat în Română",
    imagine: "/Scream7.jpg",
    ore: ["16:00", "18:00"]
  }
];

export default function MovieProgram() {
  return (
    <section className="w-full bg-black py-16 px-6 sm:px-12 md:px-24 min-h-screen flex justify-center">
      <div className="w-full max-w-5xl">

        <div className="mb-12 pb-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tighter italic">
            PROGRAM <span className="text-brand-gold not-italic uppercase">Astăzi</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {filme.map((film) => (
            <div key={film.id} className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
              

              <div className="relative w-48 md:w-52 shrink-0 aspect-[2/3] rounded-md overflow-hidden shadow-2xl">
                <img 
                  src={film.imagine} 
                  alt={film.titlu} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-brand-gold text-black font-[900] px-2 py-0.5 rounded-sm text-[10px] tracking-widest uppercase">
                  {film.format}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center w-full">

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-2 font-bold text-[10px] tracking-widest uppercase text-zinc-500">
                  <span className="bg-zinc-800 text-white px-2 py-0.5 rounded-sm">{film.rating}</span>
                  <span className="text-brand-gold">{film.gen}</span>
                  <span className="text-zinc-800">|</span>
                  <span>{film.durata}</span>
                  <span className="text-zinc-800">|</span>
                  <span className="text-zinc-300">{film.limba}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-[900] text-white mb-6 tracking-tight uppercase leading-tight">
                  {film.titlu}
                </h3>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {film.ore.map((ora) => (
                    <button 
                      key={ora} 
                      className="bg-zinc-900 text-white hover:bg-brand-gold hover:text-black px-4 py-2 rounded-lg font-[900] text-base transition-all duration-200 active:scale-95 border-b-2 border-black/40 shadow-md"
                    >
                      {ora}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}