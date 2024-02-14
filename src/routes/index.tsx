import { FC } from "react";
import { Landing, Login, Transfers, WalletInfo } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../components/layouts/root";
import PrivateRoutes from "./private-route";

const BaseRoute: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          {/* PRIVATE routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/wallet" element={<WalletInfo />} />
            <Route path="/transfer" element={<Transfers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRoute;
