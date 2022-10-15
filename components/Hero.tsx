export function Hero() {
  return (
    <header
      class="section sec1 header active min-h-screen w-full py-12 px-72"
      id="hero"
    >
      <div class="header-content grid grid-cols-2 min-h-screen">
        <div class="left-header flex items-center relative">
          <div class="h-shape h-full w-4/6" />
          <div class="image">
            <img src="img/profile.webp" alt="" />
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
