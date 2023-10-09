import hero from "../assets/herolifestory.jpg";
import alone from "../assets/alonelifestory.jpg";
import hug from "../assets/huggycatlifestory.jpg";
import hurt from "../assets/hurtlovestory.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function LifeStory() {
  const el = useRef(null);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Biarpun kamu sedih dan banyak masalah dalam hidupmu, kamu adalah superhero untuk hero lain",
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
          Kamu adalah superhero
        </h1>
        <blockquote class="text-xl italic font-semibold text-dark text-center">
          <p ref={el}></p>
        </blockquote>
      </section>
      <div
        class="mx-auto w-full mt-12 md:flex-row "
        data-aos="zoom-out-down"
        data-aos-duration="3000"
      >
        <div class="flex flex-col-reverse w-full bg-primary md:w-[80%] items-center md:flex-row-reverse mx-auto rounded-2xl">
          <div class="order-2 md:order-2">
            <img
              class=" w-full  md:h-auto md:w-full  md:rounded-lg md:ml-6"
              src={alone}
              alt=""
            />
          </div>
          <div class="order-1 md:order-1 ">
            <div class="flex flex-col md:pr-32 leading-normal mt-9  md:w-[80%] md:p-3 mx-auto">
              <h2 class="md:mb-2 text-2xl text-black font-bold md:px-2 px-3 font-roboto">
                Sendiri
              </h2>
              <p class="text-md text-black font-bold md:px-3 px-3 pb-8 mt-4 font-roboto ">
                Aku merasa tak berarti, tak dihargai, seolah terlupakan.
                Pikiran-pikiran negatif berkecamuk dalam benak, membayangkan
                masa depan yang suram tanpa cahaya harapan. Sendirian dalam
                kegelapan malam ini, aku tak mampu melihat jalan keluar dari
                dosa-dosa dan kesalahan masa lalu yang terus menghantuiku.
                Kegelapan dalam hati ini terasa begitu pekat dan suram.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-auto w-full mt-12 md:flex-row "
        data-aos="zoom-in-left"
        data-aos-duration="3000"
      >
        <div class="flex flex-col-reverse w-full bg-primary md:w-[80%] items-center md:flex-row mx-auto rounded-2xl">
          <div class="order-2 md:order-2">
            <img
              class=" w-full  md:h-auto md:w-full  md:rounded-lg md:-ml-12"
              src={hurt}
              alt=""
            />
          </div>
          <div class="order-1 md:order-1 ">
            <div class="flex flex-col md:pr-32 leading-normal mt-9  md:w-[80%] md:p-3 mx-auto">
              <h2 class="md:mb-2 text-2xl text-black font-bold md:px-2 px-3 font-roboto">
                Sakit
              </h2>
              <p class="text-md text-black font-bold md:px-3 px-3 mt-4 py-2  pb-8 font-roboto ">
                Kutatap langit kelam malam ini, berharap bintang-bintang mau
                menjadi saksi kelamnya derita hidupku. Atau mungkin setelah
                semua penderitaan ini usai, Sang Pencipta akan mengambil nyawaku
                dan mengakhiri semua penderita ini selamanya. Aku tak tahu lagi,
                yang kurasakan hanya sakit yang teramat dalam
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-auto w-full mt-12 md:flex-row "
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div class="flex flex-col-reverse w-full bg-primary md:w-[80%] items-center md:flex-row-reverse mx-auto rounded-2xl">
          <div class="order-2 md:order-2">
            <img
              class=" w-full  md:h-auto md:w-full  md:rounded-lg md:ml-6"
              src={hug}
              alt=""
            />
          </div>
          <div class="order-1 md:order-1 ">
            <div class="flex flex-col md:pr-32 leading-normal mt-9  md:w-[80%] md:p-3 mx-auto">
              <h2 class="md:mb-2 text-2xl text-black font-bold md:px-2 px-3 font-roboto">
                Malaikat kecil
              </h2>
              <p class="text-md text-black font-bold md:px-3 px-3 py-2 pb-8 mt-4 font-roboto ">
                Malaikat itu mau duduk di sisiku saat aku terisak, menenangkanku
                dengan kehadirannya yang hangat. Dia juga mau menemani
                malam-malam kesedihanku, mendampingiku bernyanyi merdu di bawah
                taburan bintang. Nyanyian itu kuharap bisa mengobati lukaku
                walau hanya sesaat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-auto w-full mt-12 md:flex-row "
        data-aos="zoom-out-down"
        data-aos-duration="3000"
      >
        <div class="flex flex-col-reverse w-full bg-primary md:w-[80%] items-center md:flex-row mx-auto rounded-2xl">
          <div class="order-2 md:order-2">
            <img
              class=" w-full  md:h-auto md:w-full  md:rounded-lg md:-ml-12"
              src={hero}
              alt=""
            />
          </div>
          <div class="order-1 md:order-1 ">
            <div class="flex flex-col md:pr-32 leading-normal mt-9  md:w-[80%] md:p-3 mx-auto">
              <h2 class="md:mb-2 text-2xl text-black font-bold md:px-2 px-3 font-roboto">
                "Menjadi superhero"
              </h2>
              <p class="text-md text-black font-bold md:px-3 px-3 pb-8 mt-4 font-roboto ">
                Luka dan derita yang kumiliki kini menjadi beban berat yang tak
                kunjung usai. Namun entah mengapa, di tengah pedih yang
                kurasakan aku terus berusaha untuk orang lain. Dengan kekuatan
                rapuh ini aku berharap mampu menjadi sandaran bagi mereka yang
                terluka sama sepertiku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
