import Article from "./Article";
import Book from "./Book";

const Publications = ({ articles, books }) => {
  // *published articles
  // const publishedArticles = (
  //   <li className="max-w-xs md:max-w-sm">
  //     {articles.map((article) => (
  //       <Article key={article.id} article={article} />
  //     ))}
  //   </li>
  // );

  //* published book chapter
  // const publishedBook = (
  //   <li className="max-w-xs md:max-w-sm">
  //     {books.map((book) => (
  //       <Book key={book.id} book={book} />
  //     ))}
  //   </li>
  // );

  return (
    <section
      id="Publications"
      className="py-24 md:py-28 w-full flex flex-col items-center bg-white-lilac publicationsBg min-h-screen overflow-x-hidden"
    >
      {/* publications heading */}
      <h1 className="muli-bold mb-8 font-semibold text-2xl text-center text-gray-700">
        Publications
      </h1>

      {/* published articles section */}
      {/* <section className=" mb-20"> */}
      {/* <section className="flex items-center justify-between text-gray-700 text-xl mb-1 mx-auto">
          <section
            id="publishedArticles"
            className="w-full border-l-8 border-cornflower-blue bg-picton-blue-500"
          >
            <p className="muli-bold text-lg md:text-xl py-5 w-full h-full pl-5">
              Published Articles
            </p>
          </section>
        </section> */}
      <section className="flex justify-center mb-20 ">
        {/* <ul className="w-full list-none">{publishedArticles}</ul> */}
        <ul className="w-full lg:w-4/5 mx-auto flex flex-wrap justify-center list-none">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      </section>

      {/* <section className="flex justify-center mb-20 "> */}
      {/* <ul className="w-full list-none">{publishedArticles}</ul> */}
      {/* <ul className="w-full lg:w-4/5 mx-auto flex flex-wrap justify-center list-none"> */}
      {/* {books.map((book) => (
            <Book key={book.id} book={book} />
          ))} */}
      {/* </ul> */}
      {/* </section> */}
      {/* </section> */}

      {/* published book chapter section */}
      {/* <section className="lg:w-3/5 mx-5">
        <section className="flex items-center justify-between text-gray-700 text-xl mb-1  mx-auto">
          <section
            id="publishedArticles"
            className={`w-full border-l-8 transition-border ease-in-out duration-300 border-cornflower-blue bg-picton-blue-500`}
          >
            <p
              className={`muli-bold text-lg md:text-xl py-5 w-full h-full pl-5 `}
            >
              Published Book Chapter
            </p>
          </section>
        </section>
        <section className="flex justify-center  ">
          <ul className="w-full list-none transition-opacity ease-in opacity-100 duration-300">
            {publishedBook}
          </ul>
        </section>
      </section> */}
    </section>
  );
};

export default Publications;
