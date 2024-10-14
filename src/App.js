
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Blogs from './Blogs';
import NoPage from './NoPage';
import Layout from './Layout';
import Parent from "./Parent";
import Unconcomp from "./Unconcomp";
import UnrelatedComp from "./UnrelatedComp";
import UseStateDemo from "./hooks/UseStateDemo";
import UseEffectDemo from "./hooks/UseEffectDemo";
import UseContextDemo from "./hooks/UseContextDemo";
import UseRefDemo from "./hooks/UseRefDemo";
import UseReducerDemo from "./hooks/UseReducerDemo";
import FetchDemo from "./fetchDemo";
import UseMemow3 from "./hooks/UseMemow3";
import UseCallbackDemo from "./hooks/UseCallbackDemo";
import CssDemo from "./styledemo/CssDemo";
import UselocationDemo from "./hooks/UselocationDemo";
import ClassCompDemo from "./ClassCompDemo";
import SassDemo from "./styledemo/SassDemo";
import MapDemo from "./MapDemo";
import HigherOrderDemo from "./higherOrderDemo";
import ChildHigh from "./ChildHigh";
import ChildHigh2 from "./ChildHigh2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compint"element={<Parent />} />
          <Route path="uncontrolledcomp"element={<Unconcomp />} />
          <Route path="unrelcomp" element={<UnrelatedComp />} />
          <Route path="hooksdemo/:id" element={<UselocationDemo />} />
          <Route path="fetchdemo" element={<FetchDemo />} />
          <Route path="cssdemo" element={<MapDemo  />} />
          <Route path="classdemo" element={<ClassCompDemo  />} />
          <Route path="highorderdemochild1" element = {< ChildHigh />} />
          <Route path="highorderdemochild2" element = {< ChildHigh2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
