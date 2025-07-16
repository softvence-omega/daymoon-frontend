import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { Bounce, ToastContainer } from "react-toastify";
import "./index.css";
import routes from "./routes/Routes.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        theme="light"
        transition={Bounce}
      />
    </Provider>
  </StrictMode>
);
