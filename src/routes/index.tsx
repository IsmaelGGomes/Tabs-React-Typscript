import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import HomePage from '../pages/homePage/HomePage';
import  TestPage  from "../pages/testPage/TestPage";

function Routes() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes