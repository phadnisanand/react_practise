
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
          <Route path="hooksdemo" element={<UseCallbackDemo />} />
          <Route path="fetchdemo" element={<FetchDemo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
