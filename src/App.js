import React from "react";
import { BrowserRouter} from "react-router-dom";
import { CcsBaseline } from "@mui/material";
import Routes from "./page/routes";

function App() {
  return (
    <CcsBaseline>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CcsBaseline>
  )
}

export default App;