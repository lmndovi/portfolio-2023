import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lusungu - Portfolio</title>
      </Head>
      <Header />
      <section>
        <Hero />
      </section>
    </div>
  );
}
