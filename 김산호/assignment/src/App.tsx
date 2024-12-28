import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import BookModal from './BookModal';
import { useBookStore } from './useBookStore';

export default function App() {
  const { selectedBook, setSelectedBook } = useBookStore();

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Layout>
      {selectedBook && <BookModal selectedBook={selectedBook} closeBookModal={() => setSelectedBook(null)} />}
    </>
  );
}
