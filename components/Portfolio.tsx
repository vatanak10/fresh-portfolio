export function Portfolio() {
  const portfolio = [
    {
      imgUrl: "/portfolio/ibook.webp",
      alt: "ibook preview",
      title: "iBook",
      icons: [
        {
          icon: "fab fa-google-play",
          link:
            "https://play.google.com/store/apps/details?id=com.bookmanagement.ibook",
        },
      ],
    },
  ];

  return (
    <section class="min-h-screen w-full" id="portfolio">
      <div class="text-center">
        <h2
          class="relative text-uppercase font-bold"
          style={{ fontSize: "4rem" }}
        >
          My <span class="text-primary">Portfolio</span>
          <span
            class="bg-text absolute top-1/2 left-1/2 text-grey-5 transition-all duration-300 ease-in-out translate-1/2 font-extrabold text-8xl"
            style={{ zIndex: "-1" }}
          >
            My Work
          </span>
        </h2>
      </div>

      <p class="port-text">
        Here are some of my work that I have done in various programming
        langauages.
      </p>
      <div class="portfolios">
        {/* <!-- Mobile Application Project --> */}
        <div class="portfolio-item">
          <div class="image">
            <img
              src="/portfolio/ibook.webp"
              alt="ibook preview"
            />
          </div>
          <div class="hover-item">
            <h3>iBOOK</h3>
            <div class="icons">
              <a
                class="icon"
                href="https://play.google.com/store/apps/details?id=com.bookmanagement.ibook"
                target="_blank"
                data-tooltip="Play Store"
                data-tooltip-conf="primary bottom"
              >
                <i class="fab fa-google-play"></i>
              </a>
              <a
                class="icon"
                href="https://github.com/incubation-center/Flutter-app---Group8"
                target="_blank"
                data-tooltip="GitHub"
                data-tooltip-conf="primary bottom"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
