
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import "./index.css";
import Homepage from "./Pages/Homepage.tsx";

import LoginPage from "./Pages/LoginPage.tsx";
import PlansPage from "./Pages/PlansPage.tsx";
import BrowsePage from "./Pages/BrowsePag.tsx";
import WatchPage from "./Pages/WatchPage.tsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<App />}>
            <Route path="/"  element={<Homepage />}/>
            <Route path="/Login"  element={<LoginPage />}/>
            <Route path="/Plans"  element={<PlansPage />}/>
            <Route path="/Browse"  element={<BrowsePage />}/>
            <Route path="/Browse/watch"  element={<WatchPage />}/>



        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router}/>);
