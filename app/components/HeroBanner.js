export default function HeroBanner() {
  return (
    <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
        <source src="/RECLAMA.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-brand-gold font-[900] tracking-[0.4em] text-sm md:text-base mb-4 uppercase">
          Acum în Comănești
        </span>
        <h1 className="text-white text-5xl md:text-8xl font-[900] italic tracking-tighter leading-none mb-6">
          EXPERIENȚĂ <span className="text-brand-gold">4DX</span>
        </h1>
        <p className="text-zinc-300 font-bold text-lg md:text-xl max-w-2xl uppercase tracking-wide">
          Cel mai smecher cinema de peste tot
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold" />
    </section>
  );
}
