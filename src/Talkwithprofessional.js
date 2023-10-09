// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import imgChatbot from "../src/assets/profilechatbot.png";
import telegram from "../src/assets/telegram.png";
import Chatbotbaymax from "./Baymax";
export default function ChatMenu() {
  return (
    <>
      <div class="w-full min-h-screen  rounded-md  flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div class="w-full sm:max-w-md p-5 mx-auto bg-[#fff] rounded-md">
          <div class="w-full max-w-sm p-4 bg-white 0 rounded-lg shadow sm:p-6 dark:bg-gray-800 ">
            <h5 class="mb-3 text-2xl font-semibold text-gray-800">
              Chat with profesional psychology
            </h5>
            <p class="text-sm font-normal text-gray-800">
              Communicate discreetly with a licensed mental health expert
              through secure messaging
            </p>
            <ul class="my-4 space-y-3">
              <li>
                <Link
                  to="/baymax"
                  element={<Chatbotbaymax />}
                  class="flex items-center p-3 text-base font-bold border  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 "
                >
                  {/* img */}
                  <img
                    src={imgChatbot}
                    alt="profile-chatbot"
                    width="50"
                    height="50"
                  />
                  <span class="flex-1 ml-3 whitespace-nowrap text-gray-800">
                    Baymax (chatbot profesional)
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="asdas"
                  class="flex items-center p-3 text-base font-bold border  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 "
                >
                  {/* img */}
                  <img
                    src={telegram}
                    alt="profile-chatbot"
                    width="40"
                    height="40"
                  />
                  <span class="flex-1 ml-3 whitespace-nowrap text-gray-800">
                    Admin (psychology profesional)
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
