// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import News from './pages/News';
import Sponsors from './pages/Sponsors';
import Calendar from './pages/Calendar';
import Recommendations from './pages/Recommendations';
import UserProfile from './pages/UserProfile';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Layout from './components/common/Layout'; // <- FIXED PATH

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/news" element={<News />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
