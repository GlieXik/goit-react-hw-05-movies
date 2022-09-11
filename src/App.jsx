import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import CardInfo from "./components/Home/CardInfo/CardInfo";
import CardCast from "./components/Home/CardInfo/CardCast";
import CardReviews from "./components/Home/CardInfo/CardReviews";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};
