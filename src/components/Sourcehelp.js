import sayur from "../assets/sourcehelpvegtable.jpg";
import bacabuku from "../assets/sourcehelpbacabuku.jpg";
import fruit from "../assets/sourcehelpfruit.jpg";
import sport from "../assets/sourcehelpolahraga.jpg";
export default function SourceHelp() {
  const blogs = [
    {
      title: "Konsumsi sayur mencegah mental health",
      image: sayur,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      link: "https://unsplash.com/photos/bundle-of-assorted-vegetable-lot-xMh_ww8HN_Q?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    },
    {
      title: "Konsumsi buah mencegah mental health",
      image: fruit,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      link: "https://unsplash.com/photos/SHJMuYQSRn8?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    },
    {
      title: "Baca buku kurangi kesehatan mental",
      image: bacabuku,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      link: "https://unsplash.com/photos/OyCl7Y4y0Bk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    },
    {
      title: "olahraga dapat mengurai mental health",
      image: sport,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      link: "https://unsplash.com/photos/Io2Zgb3_kdk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    },
  ];

  return (
    <>
      <section class="bg-[#fff] py-10" id="TypesHealth">
        <h1 class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text ">
          Edukasi
        </h1>
      </section>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4  bg-[#fff]">
        {blogs.map((blog) => {
          return (
            <article class="overflow-hidden mb-6 rounded-lg border border-gray-100 bg-white shadow-sm">
              <img
                alt={blog.image}
                src={blog.image}
                class="h-56 w-full object-cover"
              />

              <div class="p-4 sm:p-6">
                <a href={blog.link}>
                  <h3 class="text-lg font-medium text-gray-900">
                    {blog.title}
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {blog.desc}
                </p>

                <a
                  href={blog.link}
                  class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Lebih Lengkap
                  <span
                    aria-hidden="true"
                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
