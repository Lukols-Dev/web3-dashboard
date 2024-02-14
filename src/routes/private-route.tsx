import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks";

const PrivateRoutes = () => {
  const { isConnected, address } = useAppSelector((state) => state.wallet);
  const location = useLocation();

  const token = !!isConnected && !!address;
  let auth = { token: token };

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
