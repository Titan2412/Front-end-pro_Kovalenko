import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ErrorPage, About, Homepage, Hotels } from './pages';

export function App() {
  return (
    <CssBaseline>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </CssBaseline>
  );
}
