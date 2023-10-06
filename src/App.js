import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AuthPage from './components/auth/AuthPage';
import UserProfilePage from './components/user/UserProfilePage';
import WelcomePage from './components/welcome/WelcomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/user" element={<UserProfilePage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
