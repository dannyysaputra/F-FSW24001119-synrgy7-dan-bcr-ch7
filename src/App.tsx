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

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cari-mobil" element={<SearchCars />} />
            <Route path="cars" element={<Cars />} />
          </Route>

          <Route path="/dashboard">
            <Route index element={
              <Protected>
                <HomeDashboard />
              </Protected>
            }></Route>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
