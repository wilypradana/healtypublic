import alone from "../assets/alone.jpg";
import normal from "../assets/normal.png";
import finnalyOkay from "../assets/fine.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LifeBetter() {
  const el = useRef(null);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Tak apa merasa tidak baik-baik saja sendirian. Berhubungan dengan orang-orang yang mendukungmu sangat penting untuk hidup bahagia.",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: false,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section class="bg-primary py-10">
        <h1 class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">
          Hidup adalah perjalanan
        </h1>
        <blockquote class="text-xl italic font-semibold text-dark text-center">
          <p ref={el}></p>
        </blockquote>
      </section>
      <section class="bg-secondary pt-16  mx-auto jumbotron lg:grid lg:grid-cols-3">
        <div class="col-span-1 " data-aos="fade-right" data-aos-duration="6000">
          <div class=" flex-col flex items-center">
            <img
              src={alone}
              alt="Gambar Jumbotron"
              class=" mx-auto w-3/4 xl:object-contain md:object-contain h-3/4 object-contain rounded-md"
            />
            <span class="text-2xl font-bold font-primary m-4 p-4 text-center">
              On My Own
            </span>
          </div>
        </div>
        <div class="col-span-1" data-aos="fade-down" data-aos-duration="6000">
          <div class=" flex-col flex items-center">
            <img
              src={normal}
              alt="Gambar Jumbotron"
              class=" mx-auto w-3/4 xl:object-contain md:object-contain h-3/4 object-contain rounded-md"
            />
            <span class="text-2xl font-bold font-primary m-4 p-4 text-center">
              Finding Friendship
            </span>
          </div>
        </div>
        <div class="col-span-1" data-aos="fade-left" data-aos-duration="6000">
          <div class=" flex-col flex items-center">
            <img
              src={finnalyOkay}
              alt="Gambar Jumbotron"
              class=" mx-auto w-3/4 xl:object-contain md:object-contain h-3/4 object-contain rounded-md"
            />
            <span class="text-2xl font-bold font-primary m-4 p-4 text-center">
              Living Happily
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
