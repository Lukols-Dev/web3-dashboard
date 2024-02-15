import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Header from "../../components/Header";
import { shortenAddress } from "../../lib/utlis";

const mockStore = configureStore();
const initialState = {
  wallet: {
    address: "0x123",
    isConnected: false,
  },
};

describe("Header", () => {
  it("displays login when user is not connected", () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("displays shortened address and disconnect button when user is connected", () => {
    const connectedState = {
      ...initialState,
      wallet: {
        ...initialState.wallet,
        isConnected: true,
      },
    };
    const store = mockStore(connectedState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const disconnectButton = screen.getByText("Disconnect");
    expect(disconnectButton).toBeInTheDocument();
    expect(
      screen.getByText(shortenAddress(connectedState.wallet.address))
    ).toBeInTheDocument();

    fireEvent.click(disconnectButton);
    const actions = store.getActions();
    expect(actions).toEqual([{ type: "wallet/logout" }]);
  });
});
