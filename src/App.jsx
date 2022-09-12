import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import CardInfo from "./components/Home/CardInfo/CardInfo";
import CardCast from "./components/Home/CardInfo/CardCast";
import CardReviews from "./components/Home/CardInfo/CardReviews";
//import { lazy, Suspense } from "react";
//import { Loader } from "./components/Loader/Loader";
// const Layout = lazy(() => import("./components/Home/Home"));
// const Home = lazy(() => import("./components/Layout/Layout"));
// const Movies = lazy(() => import("./components/Movies/Movies"));
// const CardInfo = lazy(() => import("./components/Home/CardInfo/CardInfo"));
// const CardCast = lazy(() => import("./components/Home/CardInfo/CardCast"));
// const CardReviews = lazy(() =>
//   import("./components/Home/CardInfo/CardReviews")
// );
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <Suspense fallback={<Loader></Loader>}> */}
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>} />
            <Route path="movies" element={<Movies></Movies>} />
            <Route path="movies/:movieId" element={<CardInfo></CardInfo>}>
              <Route path="cast" element={<CardCast></CardCast>} />
              <Route path="reviews" element={<CardReviews></CardReviews>} />
            </Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Route>
        </Routes>
        {/* </Suspense> */}
      </ThemeProvider>
    </>
  );
};
