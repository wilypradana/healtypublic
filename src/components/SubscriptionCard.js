export default function SubscCard() {
  return (
    <>
      <section class="flex items-center justify-center z-20">
        <div class="bg-gray-900 dark:bg-gray-800 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 md:w-1/2 w-full ">
          <div class="mx-auto max-w-screen-md text-center ">
            <h2 class="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              Dapatkan informasi dari dokter
            </h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 text-xl">
              Selalu update dengan progres kami dan Selalu update informasi
              tentang dokter bersangkutan
            </p>
            <form class="mx-auto mt-4 flex flex-col gap-3 sm:flex-row sm:gap-0">
              <input
                type="email"
                id="email"
                class="rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
                placeholder="Email Address"
              />
              <button
                type="submit"
                class="rounded bg-[#ff9500] px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
              >
                Subscription
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
