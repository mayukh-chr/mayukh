import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Archive from './pages/Archive';
import ArchivePost from './pages/ArchivePost';
import Writing from './pages/Writing';
import WritingPost from './pages/WritingPost';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/:slug" element={<ArchivePost />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<WritingPost />} />
      </Routes>
    </BrowserRouter>
  );
}
