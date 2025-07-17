import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewsListPage } from './ui/pages/news-list-page.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
