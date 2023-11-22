import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";
import { PageNotfound } from "./pages/PageNotfound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <HashRouter>
      {/* <EffectionEx /> */}
      {/* <UseEffectEx /> */}
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="/*" element={<PageNotfound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
