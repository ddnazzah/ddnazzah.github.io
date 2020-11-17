import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { ToastProvider } from "react-toast-notifications";
import store from "../configureStore";
import { Home } from "../Home";
import { rrfProps } from "../_shared/constants";

const App = () => {
    AOS.init();

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <ToastProvider>
                    <Home />
                </ToastProvider>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
};

export default App;
