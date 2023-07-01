import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import myCountries from "./CountriesTest";
import Navigation from "../components/Navigation";

const reducer = (
  state = {
    countries: { countries: myCountries },
  }
) => state;

const store = configureStore({ reducer });
describe("Navigation test", () => {
  it("will test if Navigation is rendering correctly", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </MemoryRouter>
    );
  });
});
