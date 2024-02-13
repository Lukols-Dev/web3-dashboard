import { FC } from "react";
import { About, Landing, Login } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../components/layouts/root";

const BaseRoute: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* private routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRoute;
