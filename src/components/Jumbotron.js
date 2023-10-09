import imageHero from "../assets/jumbotron.png";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Typed from "typed.js";
export default function Jumbotron() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Tak Apa Jika Kita Tidak Baik-Baik Saja",
        "Pikiranmu Penting",
        "Kesehatan Mentalmu Berharga",
        "Rawat Dirimu Secara Keseluruhan",
        "Utamakan Kesejahteraan Dirimu",
        "Wajar Jika Terkadang Merasa Sedih",
        "Kamu Tidak Sendirian",
        "Kesehatan Mental Adalah Kesehatan",
        "Berbicara, Cari Bantuan",
        "Pikiran Kuat, Badan Sehat",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section class="bg-white  mx-auto  jumbotron lg:grid lg:grid-cols-2 ">
      <div class="px-4 container  bg-secondary  mx-auto   w-full py-24 lg:py-56 lg:grid lg:grid-cols-2 lg:gap-8">
        {/* <!-- Kolom teks di sebelah kiri --> */}
        <div class="col-span-2 xl:ps-12 ">
          <p
            class="text-black font-primary text-xl text-center font-bold mb-4 capitalize"
            ref={el}
          ></p>
          <p class="text-4xl text-center font-extrabold mb-2 mt-5 leading-10 bg-gradient-to-br from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">
            Rawat Dirimu Secara Keseluruhan
          </p>
          <p class="text-black font-primary text-xl text-center font-normal mb-4 capitalize">
            Kekuatan Dalam. Emosi Keberanian. Belas Kasihan Diri Sendiri. Seolah
            Komponen Untuk Kekuatan Mental Bersatu Keras Untuk Meningatkan Kita
            Bahwa Kekuatan Untuk Menghadapi Segala Sesuatu Sudah Ada Dalam Diri
            Kita.
          </p>
          <div class="mx-auto flex justify-center">
            <Link
              to="/chat-menu"
              class="css-button-fully-rounded--rose font-primary hover:font-extrabold "
            >
              Talk with professional
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Kolom gambar di sebelah kanan --> */}
      <div class="col-span-1 bg-[#FFC0CB] ">
        <img
          src={imageHero}
          alt="Gambar Jumbotron"
          className="hidden  md:block mx-auto w-3/4 xl:object-contain md:object-contain h-3/4 object-contain rounded-md"
        />
      </div>
    </section>
  );
}
