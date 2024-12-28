import { useEffect, useState } from 'react';
import CategoryBooks from './CategoryBooks';
import { useBookStore } from './useBookStore';
import axios from 'axios';
import { Book } from './types';

export default function MainPage() {
  const { setSelectedBook } = useBookStore();
  const [novels, setNovels] = useState<Book[]>([]);
  const [essays, setEssays] = useState<Book[]>([]);
  const [economies, setEconomies] = useState<Book[]>([]);
  const [developments, setDevelopments] = useState<Book[]>([]);
  const [healths, setHealths] = useState<Book[]>([]);
  const KAKAO_API_KEY = import.meta.env.VITE_SERVICE_KEY;
  
  useEffect(() => {
    const getBooks = async () => {
      try {
        const [novels, essays, economies, developments, healths] =
          await Promise.all([
            axios.get(`https://dapi.kakao.com/v3/search/book`, {
              headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
              params: { query: "소설", size: 5 },
            }),
            axios.get(`https://dapi.kakao.com/v3/search/book`, {
              headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
              params: { query: "에세이", size: 5 },
            }),
            axios.get(`https://dapi.kakao.com/v3/search/book`, {
              headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
              params: { query: "경제", size: 5 },
            }),
            axios.get(`https://dapi.kakao.com/v3/search/book`, {
              headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
              params: { query: "프론트엔드", size: 5 },
            }),
            axios.get(`https://dapi.kakao.com/v3/search/book`, {
              headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
              params: { query: "건강", size: 5 },
            }),
          ]);

        setNovels(novels.data.documents);
        setEssays(essays.data.documents);
        setEconomies(economies.data.documents);
        setDevelopments(developments.data.documents);
        setHealths(healths.data.documents);
      } catch (error) {
        console.error("책 로딩 중 오류:", error);
      }
    };
    
    getBooks();
  }, []);

  return (
    <>
      <CategoryBooks category={"📖소설"} books={novels} handleBookClick={setSelectedBook} />
      <CategoryBooks category={"🖊️에세이"} books={essays} handleBookClick={setSelectedBook} />
      <CategoryBooks category={"📈경제"} books={economies} handleBookClick={setSelectedBook} />
      <CategoryBooks category={"💻개발"} books={developments} handleBookClick={setSelectedBook} />
      <CategoryBooks category={"❤️건강"} books={healths} handleBookClick={setSelectedBook} />
    </>
  );
};
