import React, { useState } from "react";
import nazwa from "../assets/nazwashihab.jpeg";
import chairil from "../assets/chairilanwar.jpeg";
import raditya from "../assets/radityadika.jpeg";
import sapardi from "../assets/paksapardi.jpeg";
import neuron from "../assets/neuron.jpg";
import kokbisa from "../assets/kokbisa.jpg";
import satupersen from "../assets/satupersen.jpg";

const InfluencerTabs = () => {
  const [activeTab, setActiveTab] = useState("najwaShihab"); // Set tab awal sesuai dengan id pertama (Tom)

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const influencers = [
    {
      id: "najwaShihab",
      name: "Najwa Shihab",
      role: "Jurnalis",
      Qoute:
        "Tiap orang bisa punya mimpi, tapi tak semua bisa bangkitkan semangat tinggi",
      image: nazwa,
    },
    {
      id: "chairil",
      name: "Chairil Anwar",
      role: "Penyair",
      Qoute:
        "Kami coba simpan nestapa, kami coba kuburkan duka lara, tapi perih, tak bisa sembunyi. Ia menyebar kemana-mana.",
      image: chairil,
    },
    {
      id: "sapardi",
      name: "Sapardi Djoko Damono",
      role: "pujangga",
      Qoute:
        "Aku dan matahari tidak bertengkar tentang siapa di antara kami yang telah menciptakan bayang-bayang",
      image: sapardi,
    },
    {
      id: "raditya",
      name: "Raditya Dika",
      role: "Penulis",
      Qoute:
        "Kamu ngerasa gak sih kalo kita tu kaya dua orang yang udah tau gak cocok tapi tetep di cocok-cocokin karna takut sendiri lagi",
      image: raditya,
    },
  ];
  const comunity = [
    {
      id: "kokbisa",
      name: "kok bisa",
      role: "Education content creator",
      Qoute:
        "Segala ilmu pengetahuan dimulai dari pertanyaan. Itu sebabnya, Kok Bisa ingin terus menciptakan pengalaman belajar sains yang inovatif dengan menjawab pertanyaan sehari-hari melalui video-video animasi edukatif. Melalui animasi, Kok Bisa percaya bahwa konsep yang rumit bisa digambarkan dengan kontekstual dan lebih mudah dipahami.",
      image: kokbisa,
    },
    {
      id: "satupersen",
      name: "satu persen",
      role: "Education content creator",
      Qoute:
        " Kemampuan Satu Persen membawakan topik-topik berkualitas dengan ringan dan mudah dimengerti membuat Satu Persen disenangi oleh berbagai macam kalangan.",
      image: satupersen,
    },
    {
      id: "neuron",
      name: "neuron",
      role: "Education content creator",
      Qoute:
        "Neuron adalah media edukasi seputar fakta, berita, dan apapun yang berkaitan dengan dunia kesehatan.",
      image: neuron,
    },
  ];

  return (
    <>
      <section class="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-cyan-400 via-zinc-300 to-stone-400 py-10">
        <h1 class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">
          Ini kata mereka
        </h1>
      </section>

      <section className="flex w-full md:flex-row flex-col ">
        <div>
          <div className="w-full bg-primary rounded-b-lg shadow p-6 md:mx-auto">
            <ul
              className="flex text-sm bg-[#FFCD4B] px-4 py-2 w-full  font-medium text-center text-gray-500 rounded-t-lg"
              id="defaultTab"
              data-tabs-toggle="#defaultTabContent"
              role="tablist"
            >
              {influencers.map((influencer) => (
                <li key={influencer.id} className="">
                  <div className="flex flex-col items-center">
                    {" "}
                    {/* Tambahkan kelas items-center di sini */}
                    <button
                      onClick={() => handleTabClick(influencer.id)}
                      id={`${influencer.id}-tab`}
                      data-tabs-target={`#${influencer.id}`}
                      type="button"
                      role="tab"
                      aria-controls="about"
                      aria-selected={
                        activeTab === influencer.id ? "true" : "false"
                      }
                      className={`text-sm font-semibold p-0 border-0 mr-4 mt-4 bg-transparent hover:text-gray-600 ${
                        activeTab === influencer.id ? "text-gray-600" : ""
                      }`}
                    >
                      {influencer.name}
                    </button>
                    <span className="text-xs w-full">{influencer.role}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div id="defaultTabContent">
              {influencers.map((influencer) => (
                <div
                  key={influencer.id}
                  className={`p-4 bg-[#FF7676] rounded-b-lg w-full    md:p-8 ${
                    activeTab === influencer.id ? "block" : "hidden"
                  }`}
                  id={influencer.id}
                  role="tabpanel"
                  aria-labelledby={`${influencer.id}-tab`}
                >
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <img
                      src={influencer.image}
                      alt=""
                      className="rounded-full w-20 h-20 md:w-25 md:h-25"
                    />
                    <div className="ml-4 mt-4 md:mt-0">
                      <blockquote className="text-white italic relative text-center md:text-left">
                        <p className="text-lg">{influencer.Qoute}</p>
                        <p className="absolute top-0 left-0 text-blue-500 text-6xl font-bold opacity-30 -mt-4 -ml-2">
                          &ldquo;
                        </p>
                      </blockquote>
                      <cite className="text-white block mt-2 text-center md:text-left">
                        <span className="text-white font-bold text-base">
                          {influencer.name}
                        </span>
                        <br />
                        {influencer.role}
                        <br />
                      </cite>
                    </div>
                  </div>
                  <hr className="my-16 border-t-2 border-gray-400 opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="w-full bg-primary rounded-b-lg shadow p-6 md:mx-auto">
            <ul
              className="flex text-sm bg-[#FFCD4B] px-4 py-2 w-full  font-medium text-center text-gray-500 rounded-t-lg"
              id="comuntiyTab"
              data-tabs-toggle="#comuntiyTabContent"
              role="tablist"
            >
              {comunity.map((community) => (
                <li key={community.id} className="">
                  <div className="flex flex-col items-center">
                    {" "}
                    {/* Tambahkan kelas items-center di sini */}
                    <button
                      onClick={() => handleTabClick(community.id)}
                      id={`${community.id}-tab`}
                      data-tabs-target={`#${community.id}`}
                      type="button"
                      role="tab"
                      aria-controls="about"
                      aria-selected={
                        activeTab === community.id ? "true" : "false"
                      }
                      className={`text-sm font-semibold  border-0 mr-4 mt-4 bg-transparent hover:text-gray-600 ${
                        activeTab === community.id ? "text-gray-600" : ""
                      }`}
                    >
                      {community.name}
                    </button>
                    <span className="text-xs text-center w-full px-4">
                      {community.role}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div id="comuntiyTabContent">
              {comunity.map((community) => (
                <div
                  key={community.id}
                  className={`p-4 bg-[#5100c3] rounded-b-lg w-full    md:p-8 ${
                    activeTab === community.id ? "block" : "hidden"
                  }`}
                  id={community.id}
                  role="tabpanel"
                  aria-labelledby={`${community.id}-tab`}
                >
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <img
                      src={community.image}
                      alt=""
                      className="rounded-full w-20 h-20 md:w-25 md:h-25"
                    />
                    <div className="ml-4 mt-4 md:mt-0">
                      <blockquote className="text-white italic relative text-center md:text-left">
                        <p className="text-lg">{community.Qoute}</p>
                        <p className="absolute top-0 left-0 text-blue-500 text-6xl font-bold opacity-30 -mt-4 -ml-2">
                          &ldquo;
                        </p>
                      </blockquote>
                      <cite className="text-white block mt-2 text-center md:text-left">
                        <span className="text-white font-bold text-base">
                          {community.name}
                        </span>
                        <br />
                        {community.role}
                        <br />
                      </cite>
                    </div>
                  </div>
                  <hr className="my-16 border-t-2 border-gray-400 opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfluencerTabs;
