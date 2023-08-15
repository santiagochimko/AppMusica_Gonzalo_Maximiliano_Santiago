import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import Registration from "./views/Registration.jsx"
import RegistrationStep2 from "./views/RegistrationStep2.jsx"
import Login from "./views/Login.jsx";
import Home2 from "./views/Home2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration_step_1",
    element: <Registration />,
  },
  {
    path: "/registration_step_2",
    element: <RegistrationStep2 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home2 />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

