import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import doctor from "../assets/doctor.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.jpg";
import SubscriptionCard from "./SubscriptionCard";
import { useState } from "react";

export default function ProfileCard() {
  const [showSubscription, setShowSubscription] = useState(false);
  const doctors = [
    {
      name: "Dr. Agus Purnomo, Sp.Kj",
      region: "Bogor, Jawa Barat",
      decs: "Dokter spesialis kejiwaan dengan fokus pada gangguan kecemasan dan depresi. Memiliki pengalaman lebih dari 10 tahun bekerja di rumah sakit jiwa terkemuka di Indonesia.",
      image: doctor,
      linkImage: "https://pngimg.com/image/15983",
    },

    {
      name: "Dr. Budi Handoyo, Sp.Kj",
      region: "Jakarta Pusat",
      decs: "Ahli kejiwaan yang memiliki spesialisasi dalam pengobatan gangguan bipolar serta gangguan makan. Sering memberikan konsultasi online melalui media sosial.",
      image: doctor2,
      linkImage: "https://pngimg.com/image/16030",
    },

    {
      name: "Dr. Dedi Hidayat, M.Psi",
      region: "Bandung, Jawa Barat",
      decs: "Psikolog klinis yang fokus pada layanan konseling untuk anak dan remaja. Memiliki klinik praktek sendiri serta aktif memberikan pelatihan kepada tenaga kesehatan lainnya.",
      image: doctor3,
      linkImage: "https://www.pngwing.com/en/free-png-bzhnr/download",
    },
  ];

  const handleButtonClick = () => {
    setShowSubscription(true);
  };
  const handleCloseButtonClick = () => {
    setShowSubscription(false);
  };

  return (
    <>
      <section class="bg-[#fff] py-10" id="TypesHealth">
        <h1 class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text ">
          Team psikologi kami
        </h1>
      </section>
      {showSubscription && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-100 z-50 ">
          <div className="bg-[#2d40b8] rounded-lg p-4 md:w-1/2 w-full relative">
            <div className="absolute  top-0 right-0 mt-4 mr-4">
              <button
                className="text-[#55ff00] text-2xl focus:outline-none"
                onClick={handleCloseButtonClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <SubscriptionCard />
          </div>
        </div>
      )}

      <div
        class="grid  md:grid-cols-3 gap-4 md:pl-5  bg-[#fff]"
        id="profile-ahli"
      >
        {doctors.map((doctor) => {
          return (
            <div class="relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl  bg-[#fff6f6]  mt-16 md:mt-10">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full flex justify-center">
                    <div class="relative">
                      <img
                        src={doctor.image}
                        class=" rounded-full align-middle border-none  absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="w-full text-center mt-20"></div>
                </div>
                <div class="text-center mt-2">
                  <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                    {doctor.name}
                  </h3>
                  <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    {doctor.region}
                  </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4">
                      <p class="font-light leading-relaxed text-slate-600 mb-4">
                        {doctor.decs}
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-2 px-2">
                    <a
                      href={doctor.linkImage}
                      class="flex-1 rounded-full bg-[#b0f] text-white antialiased font-bold hover:bg-blue-800 px-4 py-2"
                    >
                      Follow
                    </a>
                    <button
                      className="bg-[#f70000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleButtonClick}
                    >
                      Subscribe
                    </button>
                  </div>
                  <div class="flex mt-4 justify-evenly">
                    <img
                      class="h-10 w-10 rounded-full border-4 bg-[#ffd9d9] mx-auto my-4"
                      src={instagram}
                      alt=""
                    />
                    <img
                      class="h-10 w-10 rounded-full border-4 bg-[#ffd9d9] mx-auto my-4"
                      src={twitter}
                      alt=""
                    />
                    <img
                      class="h-10 w-10 rounded-full border-4 bg-[#ffd9d9] mx-auto my-4"
                      src={facebook}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
