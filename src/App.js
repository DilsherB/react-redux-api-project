import "./App.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container } from "@mui/material";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import { fetchCountries } from "./redux/countriesSlice";
import Countries from "./components/Countries";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Container sx={{ bgcolor: "rgb(236, 76, 138)" }}>
        <Navigation />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="countries/:countryId" element={<Countries />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
