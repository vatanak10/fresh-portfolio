export function Hero() {
  return (
    <header
      class="section sec1 header active min-h-screen w-full"
      id="hero"
    >
      <div class="header-content grid grid-cols-2 min-h-screen">
        <div class="left-header flex items-center relative">
          <div
            class="h-shape h-full w-4/6 bg-indigo-700 absolute left-0 top-0"
            style={{
              clipPath: "polygon(0 0, 46% 0, 79% 100%, 0 100%)",
              zIndex: -1,
            }}
          />
          <div
            class="image rounded-2xl ml-16 bg-gray-800 transition-all duration-300 ease-in-out"
            style={{ height: "90%", width: "70%" }}
          >
            <img
              src="/profile.webp"
              alt="A guy in a suit"
              className="w-full h-full object-cover transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div class="right-header">
          <h1 class="name">
            Hi, I'm <span>Vatanak</span>
            A Web Developer
          </h1>
          <p>
            I'm a web developer based in the city of Phnom Penh, Cambodia. I'm a
            passionate about creating beautiful and functional websites.
          </p>
          <div class="btn-container">
            <a
              href="/doc/Serey_Vatanak_KOEURN_CV.pdf"
              class="main-btn"
              download
            >
              <span class="btn-text">Download CV</span>
              <span class="btn-icon">
                <i class="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
