import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
// import Homepage1 from '../components/Homepage1';
import myCountries from "../components/Countries";
import Homepage from "../components/Homepage";

const reducer = (
  state = {
    countries: { countries: myCountries },
  }
) => state;

const store = configureStore({ reducer });

describe("Homepage test", () => {
  it("will test if Homepage is rendering correctly", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </MemoryRouter>
    );
    const title = screen.getByAltText("World Map");
    expect(title).toBeInTheDocument();
    const mainTitle = screen.getByText("World Map Statistics");
    expect(mainTitle).toBeInTheDocument();
  });
});
