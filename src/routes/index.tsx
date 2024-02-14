import { FC } from "react";
import { Landing, Login, Transfers, WalletInfo } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../components/layouts/root";

const BaseRoute: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/wallet" element={<WalletInfo />} />
          <Route path="/transfer" element={<Transfers />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* private routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRoute;
