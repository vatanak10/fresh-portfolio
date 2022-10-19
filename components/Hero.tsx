export function Hero() {
  return (
    <header
      class="min-h-screen w-full"
      id="hero"
    >
      <div class="grid grid-cols-2 min-h-screen mb:(grid-cols-1 pb-24)">
        <div class="flex items-center relative">
          <div
            class="h-full w-4/6 absolute left-0 top-0 bg-primary mb:hidden"
            style={{
              clipPath: "polygon(0 0, 46% 0, 79% 100%, 0 100%)",
              zIndex: -1,
            }}
          />
          <div
            class="rounded-2xl ml-16 bg-gray-800 transition-all duration-300 ease-in-out w-3/4 mb:(my-0 mx-auto w-4/5)"
            style={{ height: "90%" }}
          >
            <img
              src="/profile.webp"
              alt="A guy in a suit"
              className="w-full h-full object-cover transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div class="flex flex-col justify-center pr-56 mb:(pt-24 px-4 row-span-full w-4/5 my-0 mx-auto)">
          <h1 class="text-5xl font-semibold mb:(text-3xl)">
            Hello, I'm <span class="text-primary">Vatanak</span> A Web Developer
          </h1>
          <p class="my-6 leading-8 mb:(text-justify my-4)">
            I'm a web developer based in the city of Phnom Penh, Cambodia. I'm a
            passionate about creating beautiful and functional websites.
          </p>
          <div class="flex self-start">
            <a
              href="/doc/Serey_Vatanak_KOEURN_CV.pdf"
              class="rounded-3xl font-semibold relative border-1 border-solid flex self-start items-center overflow-hidden border-primary"
              style={{ color: "inherit" }}
              download
            >
              <span class="px-8">Download CV</span>
              <span class="flex items-center justify-center rounded-1/2 p-4 bg-primary">
                <i class="fas fa-download text-white"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
