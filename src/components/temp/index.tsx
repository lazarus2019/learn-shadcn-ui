import { useState } from 'react';

export const TempComponent = () => {
  const books = [
    {
      id: 1,
      name: 'In Search of Lost Time ',
      author: { name: 'Marcel Proust', id: 1 },
    },
    { id: 2, name: 'Ulysses', author: { name: 'James Joyce', id: 2 } },
    {
      id: 3,
      name: 'Don Quixote',
      author: { name: 'Miguel de Cervantes', id: 3 },
    },
    {
      id: 4,
      name: 'Hamlet',
      author: { name: 'William Shakespeare', id: 4 },
    },
    {
      id: 5,
      name: 'Romeo and Juliet',
      author: { name: 'William Shakespeare', id: 4 },
    },
    { id: 6, name: 'Dubliners', author: { name: 'James Joyce', id: 2 } },
  ];
  const [selectedAuthorId, setSelectedAuthorId] = useState(null);

  const filteredBooks = () => {
    if (!selectedAuthorId) {
      return books;
    }
    return books.filter((book) => String(book.author.id) === selectedAuthorId);
  };

  const authorOptionsTemp = books
    .filter((book, index, array) => {
      const bookIndex = array.findIndex((b) => book.author.id === b.author.id);
      return index === bookIndex;
    })
    .map((book) => ({ id: book.author.id, author: book.author.name }));

  const authorOptions = new Map([
    ...books.map((book) => [book.author.id, book.author.name]),
  ]);

  console.log({ authorOptionsTemp, authorOptions });

  return (
    <div className="books">
      <select
        className="books__select"
        onChange={({ target }) => setSelectedAuthorId(target.value)}
      >
        {[...authorOptions].map(([id, name]) => (
          <option value={id}>{name}</option>
        ))}
      </select>
      <ul className="books__list">
        {filteredBooks().map((book, idx) => (
          <li className="books__item">
            {idx + 1}.{book.name} by {book.author.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
