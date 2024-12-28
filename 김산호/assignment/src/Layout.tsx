import { ReactNode} from 'react';
import style from './less/layout.module.less';
import SearchBar from './SearchBar';
import { useBookStore } from './useBookStore';
import { useNavigate } from 'react-router-dom';

export default function Layout({children}: {children: ReactNode}) {
  const { searchQuery, setSearchQuery, getSearchBooks, page, setPage, setSearchedBooks } = useBookStore();
  const navigate = useNavigate();

  const onSearchBooks = async () => {
    setSearchedBooks([]);
    setPage(1);
    getSearchBooks(searchQuery, page);
    navigate("/search");
  };

  return (
    <div className={style.main}>
      <div className={style.header}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearchBooks={onSearchBooks} />
      </div>
      {children}
    </div>
  );
};
