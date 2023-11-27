import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lusungu - Portfolio</title>
        <style>{`body { background-color: rgb(36, 36, 36); }`}</style>
      </Head>
      <Header />
      <section>
        <Hero />
      </section>
    </div>
  );
}
