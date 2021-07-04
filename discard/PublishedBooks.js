import Book from "./Book";

const PublishedBooks = ({ books }) => {
  return (
    <section className="mb-8 mx-3.5">
      <div className="font-semibold text-md uppercase text-white bg-indigo-400 border-pink-600 border-solid border-l-8 py-4 px-4">
        <h2>Book Chapter</h2>
      </div>
      <div>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default PublishedBooks;
