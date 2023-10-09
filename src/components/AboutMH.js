export default function AboutMH() {
  const About = [
    {
      title: "Depresi",
      desc: "Perasaan sedih, kehilangan semangat, dan kehilangan minat yang berlangsung lama.",
    },
    {
      title: "Gangguan Kecemasan",
      desc: "Perasaan gelisah, cemas, atau was-was berlebihan yang sulit dikontrol. Contohnya adalah gangguan kecemasan umum, fobi, phobia sosial.",
    },
    {
      title: "Gangguan Makan",
      desc: "Perilaku makan yang tidak sehat seperti anoreksia atau bulimia. Diikuti rasa cemas yang berlebihan terhadap berat badan dan penampilan tubuh.",
    },
    {
      title: "Gangguan Bipolar",
      desc: "Fluktuasi suasana hati yang ekstrem antara depresi dan kegembiraan berlebihan.",
    },
    {
      title: "Gangguan Stres Pasca-Trauma",
      desc: "Munculnya gejala stres berkepanjangan setelah mengalami peristiwa traumatik.",
    },
    {
      title: "Galau Remaja",
      desc: "Pergolakan emosi akibat perubahan fisik dan psikologis saat memasuki masa remaja.",
    },
    {
      title: "Gangguan Peran Sosial",
      desc: "Kurang mampu beradaptasi dengan peran sosial baru sebagai remaja.",
    },
    {
      title: "Penyalahgunaan Zat",
      desc: "Terlibat dalam penggunaan alkohol, narkoba, dan zat-zat lain secara berlebihan.",
    },
    {
      title: "Gangguan Sikap Makan",
      desc: "Kelainan pola pikir dan perilaku makan yang tidak sehat.",
    },
  ];

  return (
    <>
      <section class="bg-[#fff] py-10" id="TypesHealth">
        <h1 class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text ">
          Tipe-tipe Kesehatan Mental
        </h1>
      </section>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4  bg-[#fff]">
        {About.map((about) => {
          return (
            <div class="block max-w-sm p-6 bg-[#fff] mx-auto">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-500 ">
                {about.title}
              </h5>
              <p class="font-normal text-gray-700">{about.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
