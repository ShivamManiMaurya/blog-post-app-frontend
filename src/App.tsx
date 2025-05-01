import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import CreateBlogs from "./pages/CreateBlogs";

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
              />
              <Routes>
                <Route path="/" element={<Navigate to="/signup" replace />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/create" element={<CreateBlogs />} />
              </Routes>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
