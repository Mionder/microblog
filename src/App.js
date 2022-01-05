import React from "react";
import Home from "./Pages/Home/Home";
import './Assets/styles/index.css'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import EditPage from "./Pages/Home/EditPage";
import CreatePage from "./Pages/Home/Create";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              {/*<Route path="/" element={<App />} />*/}
                  <Route index element={<Home />} />
                  <Route path={`edit/:id`} element={<EditPage />}>
                      {/*<Route path=":teamId" element={<Team />} />*/}
                      {/*<Route path="new" element={<NewTeamForm />} />*/}
                      {/*<Route index element={<LeagueStandings />} />*/}
                  </Route>
              <Route path={'create'} element={<CreatePage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
