import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

import Layout from "./components/layout";
import Protected from "./components/protected";

import Home from "./pages/Home";
import SearchCars from "./pages/SearchCars";
import Cars from "./pages/Cars";
import Login from "./pages/dashboard/Login";
import HomeDashboard from "./pages/dashboard/Index";

import "./style.css";
import LayoutDashboard from "./components/dashboard/layout";
import AddCar from "./pages/dashboard/AddCar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cari-mobil" element={<SearchCars />} />
            <Route path="cars" element={<Cars />} />
          </Route>

          <Route path="/dashboard">
            <Route element={<LayoutDashboard />}>
              <Route
                index
                element={
                  <Protected>
                    <HomeDashboard />
                  </Protected>
                }
              ></Route>
              <Route
                path="add-car"
                element={
                  <Protected>
                    <AddCar />
                  </Protected>
                }
              ></Route>
            </Route>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
