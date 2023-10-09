import hero from "../assets/herolifestory.jpg";
import alonelifestory from "../assets/alonelifestory.jpg";
import hug from "../assets/huggycatlifestory.jpg";
import hurt from "../assets/hurtlovestory.png";
import alone from "../assets/alone.jpg";
import normal from "../assets/normal.png";
import finnalyOkay from "../assets/fine.png";
import imageHero from "../assets/jumbotron.png";

export default function AboutMH() {
  const Resources = [
    {
      img: hero,
      link: "https://dribbble.com/shots/15345614-bayMax?utm_source=Clipboard_Shot&utm_campaign=kenziemuhtadi001&utm_content=bayMax&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=kenziemuhtadi001&utm_content=bayMax&utm_medium=Social_Share",
    },
    {
      img: alonelifestory,
      link: "https://dribbble.com/shots/15642647-Baymax-illustration?utm_source=Clipboard_Shot&utm_campaign=Aytaj&utm_content=Baymax%20illustration&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Aytaj&utm_content=Baymax%20illustration&utm_medium=Social_Share",
    },
    {
      img: hug,
      link: "https://dribbble.com/shots/1893648-Baymax-hug?utm_source=Clipboard_Shot&utm_campaign=thispapership&utm_content=Baymax%20hug&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=thispapership&utm_content=Baymax%20hug&utm_medium=Social_Share",
    },
    {
      img: hurt,
      link: "https://dribbble.com/shots/2809141-Baymax-2187?utm_source=Clipboard_Shot&utm_campaign=jmaruyama&utm_content=Baymax-2187&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=jmaruyama&utm_content=Baymax-2187&utm_medium=Social_Share",
    },
    {
      img: alone,
      link: "https://dribbble.com/shots/5562733-Baymax-Vector-illustration?utm_source=Clipboard_Shot&utm_campaign=danilsonplacid&utm_content=Baymax%20Vector%20illustration&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=danilsonplacid&utm_content=Baymax%20Vector%20illustration&utm_medium=Social_Share",
    },
    {
      img: normal,
      link: "https://dribbble.com/shots/10839776-BayMax-meets-WALL-E?utm_source=Clipboard_Shot&utm_campaign=brodyweardesign&utm_content=BayMax%20meets%20WALL-E&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=brodyweardesign&utm_content=BayMax%20meets%20WALL-E&utm_medium=Social_Share",
    },
    {
      img: finnalyOkay,
      link: "https://dribbble.com/shots/1779261-Big-Hero-6-Detail?utm_source=Clipboard_Shot&utm_campaign=harlanelam&utm_content=Big%20Hero%206%20Detail&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=harlanelam&utm_content=Big%20Hero%206%20Detail&utm_medium=Social_Share",
    },
    {
      img: imageHero,
      link: "https://dribbble.com/shots/1872963-Baymax?utm_source=Clipboard_Shot&utm_campaign=tiagooutico&utm_content=Baymax&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=tiagooutico&utm_content=Baymax&utm_medium=Social_Share",
    },
  ];

  return (
    <>
      <section class="bg-primary py-10">
        <h1 class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">
          Gambar yang kami pakai
        </h1>
      </section>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
        {Resources.map((source) => {
          return (
            <div class="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" src={source.img} alt="" />

              <div class="p-5">
                <a
                  href={source.link}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6a00ff] rounded-lg hover:bg-blue-800 "
                >
                  Visit Link Image
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
