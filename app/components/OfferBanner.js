export default function OfferBanner() {
  return (
    <section className="relative w-full h-[40vh] md:h-[55vh] bg-zinc-950 overflow-hidden">
      <img
        src="/Oferta 3.jpg"
        alt="Oferta Specială Cinematic"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
    </section>
  );
}