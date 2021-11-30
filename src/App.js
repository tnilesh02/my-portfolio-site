import logo from './logo.svg';
import './components/sass/main.scss';
import Homepage from './components/pages/homepage.jsx';
import Contactme from './components/pages/contactme.jsx';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-me" element={<Contactme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
