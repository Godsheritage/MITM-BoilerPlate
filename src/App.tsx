import { theme } from "antd";
import Home from "./views/Home.tsx";
import Houses from "./views/Houses.tsx";
import FormView from "./views/FormView.tsx";
import Header from "./components/Header.tsx";
import Education from "./views/Education.tsx";
import FooterComponent from "./components/Footer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/form" element={<FormView />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;
