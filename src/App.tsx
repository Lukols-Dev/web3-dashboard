import BaseRoute from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BaseRoute />
    </Provider>
  );
};

export default App;
