import PublishedArticles from "./PublishedArticles";
import PublishedBooks from "./PublishedBooks";
import ArticlePhoto from "../assets/imgs/kelly_sikkema_unsplash.jpg";

const Publications = ({ articles, books }) => {
  return (
    <section className="py-28 w-full">
      <div className="md:w-4/5 flex flex-col items-center leading-relaxed mx-auto z-20">
        <div>
          <h1 className="pb-2 text-2xl font-bold uppercase text-gray-500 md:font-bold md:text-4xl">
            Publications
          </h1>
        </div>
        <section className="py-6">
          <section className="pb-5 flex items-center">
            <section className="w-2/4">
              <PublishedArticles articles={articles} />
            </section>
            <section className="w-2/4 py-5">
              <img
                src={ArticlePhoto}
                alt=""
                style={{ width: "600px", height: "700px" }}
              />
            </section>
          </section>
          <section>
            <PublishedBooks books={books} />
          </section>
        </section>
      </div>
    </section>
  );
};

export default Publications;
