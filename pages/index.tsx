import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { riseWithFade } from "../utils/animations";

const Home: NextPage = () => {
  return (
    <motion.div
      className="min-h-screen px-12 bg-cream"
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Home | Robot Co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="grid grid-cols-[3fr_1fr] py-12">
        <motion.h1
          className="text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]"
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.7,
          }}
        >
          Helper robots for a better everyday
        </motion.h1>
        <motion.div
          variants={riseWithFade}
          className="text-base leading-[150%] self-end"
        >
          Born from the moonshot factory, we're building a new type of robot.
          One that can learn by itself, to help anyone with (almost) anything.
        </motion.div>
      </main>
      <video loop autoPlay muted playsInline>
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      <footer className="flex justify-center text-sm text-zinc-400 py-12">
        <p>Copyright 2022 Robot Co. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Home;
