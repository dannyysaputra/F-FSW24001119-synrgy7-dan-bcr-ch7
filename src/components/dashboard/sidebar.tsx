import { Nav, NavItem, NavLink } from "reactstrap";

interface SidebarProps {
    isOpen: boolean;
  }

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`row ${isOpen ? '' : 'collapse'}`}>
      <div className="p-0 col-4">
        <Nav
          vertical
          className="sidebar"
          style={{ backgroundColor: "#0D28A6", height: "100vw" }}
        >
          {" "}
          {/* Custom class for sidebar styling */}
          <NavItem
            className="d-flex ms-3 justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            {/* Active class for highlighting */}
            <div
              className="d-block"
              style={{
                backgroundColor: "#CFD4ED",
                width: "50px",
                height: "50px",
              }}
            ></div>
          </NavItem>
          <NavItem className="d-flex align-items-center justify-content-center">
            <NavLink
              href="#"
              className="text-white ms-3 d-flex flex-column align-items-center"
            >
              <div>
                <i className="fa-solid fa-house fa-xl"></i>
              </div>
              <p className="fw-light mt-2" style={{ fontSize: "12px" }}>
                Dashboard
              </p>
            </NavLink>
          </NavItem>
          <NavItem
            className="d-flex ms-3 pt-2 align-items-center justify-content-center"
            style={{ backgroundColor: "rgba(207, 212, 238, 0.5)" }}
          >
            <NavLink
              href="#"
              className="text-white d-flex flex-column align-items-center"
            >
              <div>
                <i className="fa-solid fa-car-side fa-xl"></i>
              </div>
              <p className="fw-light mt-2" style={{ fontSize: "12px" }}>
                Cars
              </p>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="col-8 ps-0">
        <Nav
          vertical
          className="sidebar"
          style={{ backgroundColor: "white", height: "100vw" }}
        >
          {" "}
          <NavItem className="me-3 my-4">
            {" "}
            <div
              className="py-4 mx-4 d-block"
              style={{ backgroundColor: "#CFD4ED" }}
            ></div>
          </NavItem>
          <NavItem className="d-flex align-items-center justify-content-center mt-2">
            <NavLink href="#" className="d-flex flex-column align-items-center">
              <div className="fw-bold fs-5 text-secondary">CARS</div>
            </NavLink>
          </NavItem>
          <NavItem
            className="d-flex align-items-center justify-content-center my-5"
            style={{ backgroundColor: "#CFD4ED" }}
          >
            <NavLink href="#" className="d-flex flex-column align-items-center">
              <div className="fw-bold fs-5 text-secondary">List Car</div>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;