export default function Hero() {
  return (
    <section className="hero-full">
      <div
        className="
          hero-inner
          flex
          flex-col
          md:flex-row
          items-center
          gap-12
          md:gap-16
        "
      >
        {/* LEFT */}
        <div
          className="
            hero-left
            text-center
            md:text-left
            max-w-xl
          "
        >
          <h1
            className="
              hero-title
              text-3xl
              sm:text-4xl
              md:text-5xl
              leading-tight
            "
          >
            I build data products using analytics, ML, and forecasting.
          </h1>

          <p
            className="
              hero-sub
              mt-4
              text-base
              sm:text-lg
            "
          >
            I’m Arnav Parashar — an Analytics & Data Science professional focused
            on forecasting, machine learning, and building end-to-end data
            products using real-world datasets.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            hero-right
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Image */}
          <img
            src="/IMG_8604-removebg-preview.png"
            alt="Arnav Parashar"
            onError={(e) => {
              e.currentTarget.src = "/me.svg";
            }}
            className="
              w-[220px]
              sm:w-[260px]
              md:w-[320px]
              max-h-[420px]
              object-contain
              rounded-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            "
          />

          {/* Name */}
          <div className="mt-4">
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
