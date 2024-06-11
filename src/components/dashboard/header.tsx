import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  InputGroupText,
  Navbar,
  Container,
} from "reactstrap";
import { useAuth } from "../../hooks/useAuth";

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, sidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const { logout } = useAuth();

  const userDataString = localStorage.getItem('user');
  const user = userDataString ? JSON.parse(userDataString) : null;

  return (
    <div>
      <Navbar expand="md" className={`py-3 col-12 bg-white ${sidebarOpen ? '' : 'w-100'}`}>
        <Container className="mt-lg-2">
          <div className="d-flex justify-content-between">
            <div>
              <button
                className="btn"
                onClick={toggleSidebar}
              >
                <i className="fa-solid fa-bars fa-2xl"></i>
              </button>
            </div>
            <div className="d-inline-flex">
              <InputGroup className="mb-3 me-5">
                <InputGroupText className="bg-white border-end-0">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </InputGroupText>
                <Input
                  type="text"
                  placeholder="Search..."
                  className="border-start-0"
                />
                <InputGroupText className="border-start-0 bg-white text-primary fw-bold">
                  Search
                </InputGroupText>
              </InputGroup>

              <div className="mt-2 me-2">
                <i className="fa-regular fa-user fa-lg"></i>
              </div>
              <div
                className="mt-2"
                onClick={toggleDropdown}
                style={{
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  marginRight: "10px",
                }}
              >
                {user ? user.name : 'User'}
              </div>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                className="mt-1"
              >
                <DropdownToggle className="bg-transparent border-0">
                  <div className="text-black">
                    <i className="fa fa-angle-down"></i>
                  </div>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action 1</DropdownItem>
                  <DropdownItem>Action 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
