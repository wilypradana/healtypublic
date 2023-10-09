import { Link } from "react-router-dom";
import baymax from "../assets/profilechatbot.png";
import telegram from "../assets/telegram.png";
export default function CardProfesioal() {
  return (
    <>
      <section class="bg-[#fff] py-10">
        <h1
          class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text "
          id="SumberBantuan"
        >
          Talk with Our profesional assistance
        </h1>
      </section>
      <div className="w-full p-10 bg-[#fff]" id="talkprofesional">
        <div class="md:w-1/2 w-full mx-auto my-4 p-4 text-center bg-primary   rounded-lg shadow sm:p-8 ">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 ">
            Ngobrol dengan profesional
          </h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg">
            Ngobrol dengan psycology profesional kami privasi kalian aman 100%
          </p>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              to="/chat-menu"
              class="w-full sm:w-auto bg-[#7741b6] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-[#816262] dark:focus:ring-gray-700"
            >
              <img src={baymax} alt="a" width={50} height={50} />
              <div class="text-left">
                <div class="mt-1 font-sans text-sm font-semibold">
                  Talk with Baymax (chatbot)
                </div>
              </div>
            </Link>
            <Link
              href="#"
              class="w-full sm:w-auto bg-[#9099ff] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-[#816262] dark:focus:ring-gray-700"
            >
              <img src={telegram} alt="a" width={35} height={35} />
              <div class="text-left">
                <div class="mt-1 font-sans text-sm font-semibold ml-2">
                  Talk with psycology (telegram)
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
