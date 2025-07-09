import { Route, Routes } from "react-router-dom";
import Page from "../components/Page";
import About from "../components/About";
import Ideas from "../components/Ideas";

function Mainroute() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="about" element={<About />} />
      <Route path="ideas" element={<Ideas />} />
    </Routes>
  );
}

export default Mainroute;
