import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Mo Sebbagh</title>
      </Head>
      <Component />
    </>
  )
}
