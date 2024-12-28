import { create } from 'zustand';
import { Book } from './types';
import axios from 'axios';

interface BookStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchedBooks: Book[];
  setSearchedBooks: (books: Book[]) => void;
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
  page: number;
  setPage: (page: number) => void;
  getSearchBooks: (searchQuery: string, page: number) => void;
}

const KAKAO_API_KEY = import.meta.env.VITE_SERVICE_KEY;

export const useBookStore = create<BookStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  searchedBooks: [],
  setSearchedBooks: (books) => set({ searchedBooks: books }),
  novels: [],
  essays: [],
  economies: [],
  developments: [],
  healths: [],
  selectedBook: null,
  setSelectedBook: (book) => set({ selectedBook: book }),
  page: 1,
  setPage: (page) => set({ page }),
  getSearchBooks: async (searchQuery, page) => {
    try {
      const response = await axios.get('https://dapi.kakao.com/v3/search/book', {
        headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
        params: { query: searchQuery, page: page, size: 10 },
      });
      set((state) => ({
        searchedBooks: [...state.searchedBooks, ...response.data.documents]
      }))
    } catch (error) {
      console.error(`${searchQuery} 책 가져오기 오류:`, error);
    }
  },

}));
