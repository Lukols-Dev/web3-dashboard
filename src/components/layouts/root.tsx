import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { setupAccountChangeListener } from "../../store/thunks/accountChangeListener";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setupAccountChangeListener());
  }, [dispatch]);
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
