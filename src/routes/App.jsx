import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "@containers/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

import Home from "@pages/Home";
import NotFound from "@pages/NotFound";

import "@styles/global.css";

const App = () => {
    const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
{/* 
import Login from "@pages/Login";
import NewPass from "@pages/NewPassword";
import RecoveryPass from "@pages/SendEmail";
<Route exact path="/Login" element={<Login />} />
<Route exact path="/newpass" element={<NewPass />} />
<Route exact path="/recoverypass" element={<RecoveryPass />} /> 
*/}