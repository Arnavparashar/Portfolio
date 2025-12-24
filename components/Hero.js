export default function Hero() {
  return (
    <section className="hero-full">
      <div className="hero-inner">
        
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-title">
            I build data products using analytics, ML, and forecasting.
          </h1>

          <p className="hero-sub">
            I’m Arnav Parashar — an Analytics & Data Science professional focused
            on forecasting, machine learning, and building end-to-end data
            products using real-world datasets.
          </p>
        </div>

        {/* RIGHT */}
        <div className="hero-right flex flex-col items-center text-center">
          
          {/* Image */}
          <img
            src="/IMG_8604-removebg-preview.png"
            alt="Arnav Parashar"
            onError={(e) => {
              e.currentTarget.src = "/me.svg";
            }}
            className="
              w-[300px]
              max-h-[460px]
              object-contain
              rounded-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            "
          />

          {/* Name BELOW image */}
          <div className="mt-5">
            <div className="font-semibold text-lg">
              Arnav Parashar
            </div>
            <div className="text-sm text-muted">
              Analytics & Data Science
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
