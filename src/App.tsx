import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewsListPage } from './ui/pages/NewsListPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
