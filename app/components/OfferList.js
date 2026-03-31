const oferte = [
  {
    id: 1,
    titlu: "CINEMARTI",
    descriere: "Cea mai bună zi pentru iubitorii de cinema din Comănești! În fiecare zi de marți, bariera prețului dispare. Te bucuri de cele mai noi producții de la Hollywood, animații pentru copii sau filme de acțiune explozive la un tarif unic redus. Este ocazia perfectă să vii cu toată gașca de prieteni sau cu familia fără să îți faci griji de buget.",
    preturi: [
      { tip: "Bilet 2D", val: "11.99 lei", tip2: "Bilet 2D Elev", val2:"7.99 lei" },
      { tip: "Bilet 3D", val: "14.99 lei", tip2: "Bilet 3D Elev", val2:"11.99 lei" }
    ],
    imagine: "/Oferta1.jpg",
    tag: "MARȚI"
  },
  {
    id: 2,
    titlu: "VOUCHER CADOU",
    descriere: "Transformă o zi obișnuită într-o amintire memorabilă! Voucherele noastre cadou sunt soluția ideală atunci când vrei să oferi o experiență, nu doar un obiect. Pot fi utilizate atât pentru achiziția biletelor la orice film din program, cât și pentru produsele delicioase de la bar. Tu alegi valoarea, ei aleg filmul și momentul preferat.",
    preturi: [
      { tip: "", val: "", tip2: "", val2: ""}
    ],
    imagine: "/Oferta2.jpg",
    tag: "Voucher"
  }
];

export default function OfferList() {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tighter uppercase">
            Ofertele <span className="text-brand-gold italic">Noastre</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {oferte.map((oferta) => (
            <div key={oferta.id} className="bg-black rounded-3xl overflow-hidden shadow-2xl">
              
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={oferta.imagine} 
                  alt={oferta.titlu} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-brand-gold text-black font-[900] px-4 py-1 text-[11px] tracking-[0.2em] uppercase rounded-full">
                  {oferta.tag}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-[900] text-white mb-6 tracking-tight uppercase">
                  {oferta.titlu}
                </h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 font-medium">
                  {oferta.descriere}
                </p>
                <div className="flex flex-wrap gap-6 pt-6">
                  {oferta.preturi.map((p, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">{p.tip}</span>
                      <span className="text-brand-gold font-[900] text-3xl tracking-tighter mb-5">{p.val}</span>
                      <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">{p.tip2}</span>
                      <span className="text-brand-gold font-[900] text-3xl tracking-tighter">{p.val2}</span>
                    </div>
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