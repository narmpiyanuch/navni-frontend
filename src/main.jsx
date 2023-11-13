import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MapContextProvider from "./context/MapContext.jsx";
import WalletContextProvider from "./context/walletContext.jsx";
import BookingContextProvider from "./context/BookingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="1057347670375-8he167c3ublu3j6k4h9knm8qdn4f5r96.apps.googleusercontent.com">
    <AuthContextProvider>
      <MapContextProvider>
        <WalletContextProvider>
          <BookingContextProvider>
            <App />
          </BookingContextProvider>
        </WalletContextProvider>
      </MapContextProvider>
    </AuthContextProvider>
  </GoogleOAuthProvider>
  // </React.StrictMode>,
);
