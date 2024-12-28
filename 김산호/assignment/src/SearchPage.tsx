import {useEffect} from 'react';
import style from './less/searchPage.module.less'
import { useBookStore } from './useBookStore';
import BookCard from './BookCard';
import { useInView } from 'react-intersection-observer';

export default function SearchPage() {
  const { searchedBooks, setSelectedBook, setPage, getSearchBooks, searchQuery, page } = useBookStore();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
      getSearchBooks(searchQuery, page);
    }
  }, [inView]);

  return (
    <>
      <h2 className={style.content}>검색결과</h2>
      <div className={style.booksWrapper}>
        {searchedBooks.map((book, index) => (
          <BookCard key={index} index={index} book={book} handleBookClick={setSelectedBook} />
        ))}
        <div ref={ref} style={{ height: 50 }} />
      </div>
    </>
  );
};
