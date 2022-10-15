import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
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

      <Component />
    </>
  );
}
