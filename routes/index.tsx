import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hi, I'm Vatanak. I'm a web developer based in the city of Phnom Penh, Cambodia. I'm a
        passionate about creating beautiful and functional websites."
        />
        <title>Vatanak Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh. Bruh
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
