import neuron from "../assets/neuron.jpg";
import kokbisa from "../assets/kokbisa.jpg";
import satupersen from "../assets/satupersen.jpg";
import React, { useState } from "react";

const Comunity = ({ comunity, openId, setOpenId }) => {
  const isOpen = openId === comunity.id;

  const toggleQuote = () => {
    if (isOpen) {
      setOpenId(null);
    } else {
      setOpenId(comunity.id);
    }
  };

  return (
    <div className="p-4  w-full ">
      <div className="h-full max-h-full bg-[#00ebef] p-8 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="block w-5 h-5 text-gray-400 mb-4"
          viewBox="0 0 975.036 975.036"
        >
          {/* Path SVG */}
        </svg>
        <p className="leading-relaxed mb-6">
          {isOpen ? comunity.Qoute : comunity.Qoute.substring(0, 100) + "..."}
        </p>

        <div className="inline-flex items-start">
          <img
            alt="testimonial"
            src={comunity.image}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">
              {comunity.name}
            </span>
            <span className="text-gray-500 text-sm">{comunity.role}</span>
          </span>
        </div>
        {comunity.Qoute.length > 100 && (
          <button
            className="text-blue-500 hover:underline mb-3"
            onClick={toggleQuote}
          >
            {isOpen ? "Tutup" : "Baca Selengkapnya"}
          </button>
        )}
      </div>
    </div>
  );
};

const ComunityList = () => {
  const comunity = [
    {
      id: "kokbisa",
      name: "kok bisa",
      role: "Education content creator",
      Qoute:
        "Kok Bisa ingin terus menciptakan pengalaman belajar sains yang inovatif dengan menjawab pertanyaan sehari-hari melalui video-video animasi edukatif. Melalui animasi, Kok Bisa percaya bahwa konsep yang rumit bisa digambarkan dengan kontekstual dan lebih mudah dipahami.",
      image: kokbisa,
    },
    {
      id: "satupersen",
      name: "satu persen",
      role: "Education content creator",
      Qoute:
        "Kemampuan Satu Persen membawakan topik-topik berkualitas dengan ringan dan mudah dimengerti membuat Satu Persen disenangi oleh berbagai macam kalangan.",
      image: satupersen,
    },
    {
      id: "neuron",
      name: "neuron",
      role: "Education content creator",
      Qoute:
        "Neuron adalah media edukasi online yang berfokus pada konten-konten berkualitas mengenai berbagai topik terkini seputar dunia kesehatan. Situs ini hadir untuk meningkatkan literasi kesehatan masyarakat luas dengan menyajikan informasi yang mudah dipahami secara ilmiah namun santai.",
      image: neuron,
    },
  ];

  const [openId, setOpenId] = useState(null);

  return (
    <>
      <div
        class="md:flex md:items-end md:justify-between bg-[#fff] pt-4"
        id="mediaPartner"
      >
        <div class="mx-auto py-5   ">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">
            Program relawan dan partisipasi
          </h2>

          <p class="mt-6 max-w-lg leading-relaxed text-gray-700">
            Kami bersama relawan dan partisipasi membuat banyak program yang
            bisa di ikuti secara gratis oleh semua kalangan
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 bg-[#fff]">
        {comunity.map((comunityItem) => (
          <Comunity
            comunity={comunityItem}
            key={comunityItem.id}
            openId={openId}
            setOpenId={setOpenId}
          />
        ))}
      </div>
    </>
  );
};

export default ComunityList;
