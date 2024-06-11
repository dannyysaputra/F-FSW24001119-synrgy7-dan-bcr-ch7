import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import { useState } from "react";

export default function LayoutDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="row">
      <div className={`col-3 p-0 ${sidebarOpen ? "" : "collapse"}`}>
        <Sidebar isOpen={sidebarOpen} />
      </div>
      <div className={`col-9 p-0 ${sidebarOpen ? '' : 'col-12'}`}>
        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <Outlet />
      </div>
    </div>
  );
}
