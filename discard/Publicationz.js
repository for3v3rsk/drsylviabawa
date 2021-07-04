import React from "react";
import PublicationCard from "./PublicationCard";

const Publicationz = ({ articles, books }) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* {articles.map(
        (article) => article
        // <PublicationCard key={article.id} article={article} />
      )} */}
    </div>
  );
};

export default Publicationz;
