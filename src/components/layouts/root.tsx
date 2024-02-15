import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { setupAccountChangeListener } from "../../store/thunks/accountChangeListener";
import FloatingElements from "../floatingElements";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setupAccountChangeListener());
  }, [dispatch]);
  return (
    <div className="flex flex-col relative">
      <Header />
      <Outlet />
      <div className="absolute top-0 left-0 h-screen w-screen">
        <FloatingElements />
      </div>
    </div>
  );
};

export default RootLayout;
