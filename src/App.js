import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import QuestionsPage from './pages/QuestionsPage';
import FinalScreen from './pages/FinalScreen';
import ProfilePage from './pages/ProfilePage';
import ProtectRoute from './helpers/ProtectRoute';
import EntrancePage from './pages/EntrancePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';

import './styles/index.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="question" element={<QuestionsPage />} />
          <Route path="question-start-page" element={<EntrancePage />} />
          <Route path="final" element={<FinalScreen />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="profile-page"
            element={
              <ProtectRoute>
                <ProfilePage />
              </ProtectRoute>
            }
          />
          <Route path="*" element={<div>404! СТРАНИЦА НЕ НАЙДЕНА!</div>} />
        </Routes>
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
