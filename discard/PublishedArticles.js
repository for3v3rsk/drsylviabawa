import React from "react";
import Article from "./Article";

const PublishedArticles = ({ articles }) => {
  return (
    <section className="mb-8 mx-3.5">
      <div className="font-semibold text-md uppercase text-white bg-indigo-400 border-pink-600 border-solid border-l-8 py-4 px-4">
        <h2>Articles</h2>
      </div>
      <section>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </section>
    </section>
  );
};

export default PublishedArticles;
