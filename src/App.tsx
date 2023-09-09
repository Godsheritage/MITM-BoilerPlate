import { theme } from "antd";
import Home from "./views/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Education from "./views/Education.tsx";
import FormView from "./views/FormView.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const { Header, Content, Footer } = Layout;
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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
