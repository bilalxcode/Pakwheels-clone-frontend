import NavHeader from "./NavHeader";
import "./Navbar.css";
import NavbarDropdown from "./NavbarDropdown";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const dropdownOptions = [
    {
      heading: "Option 1",
      description: "Description for Option 1",
      icon: "icon-url-1",
    },
    {
      heading: "Option 2",
      description: "Description for Option 2",
      icon: "icon-url-2",
    },
    // Add more options as needed
  ];
  const navigate = useNavigate();
  const sellCarOpener = (e) => {
    e.preventDefault();
    navigate("/sell-vehicle/post-ad");
  };
  return (
    <>
      <NavHeader />
      <hr
        style={{
          backgroundColor: "gray",
          height: "1px",
          border: "none",
          margin: "0px",
          marginBottom: "10px",
        }}
      />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-background">
        <a href="/">
          <div className="navLogo">
            <img
              src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg"
              alt="logo"
              width="150"
              height="40"
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarDropdown
            name="Used Cars"
            options={dropdownOptions}
            hasDropdown={true}
          />
          <NavbarDropdown
            name="New Cars"
            options={dropdownOptions}
            hasDropdown={true}
          />
          <NavbarDropdown
            name="Bikes"
            options={dropdownOptions}
            hasDropdown={true}
          />
          <NavbarDropdown
            name="Auto Store"
            options={dropdownOptions}
            hasDropdown={true}
          />

          <NavbarDropdown name="Videos" hasDropdown={false} />
          <NavbarDropdown name="Forums" hasDropdown={false} />
          <NavbarDropdown name="Blogs" hasDropdown={false} />
          <NavbarDropdown
            name="More"
            options={dropdownOptions}
            hasDropdown={true}
          />
          <div>
            <a
              href=""
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              style={{
                backgroundColor: "#B73439",
                borderRadius: "10px",
                height: "40px",
                listStyle: "none",
                color: "white",
                listStyle: "none", // Remove marker
                fontWeight: "bold", // Set font-weight to bold
                textAlign: "center", // Center the text
              }}
              onClick={sellCarOpener}
            >
              Post An Ad
            </a>
            {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item">
                  <div className="option-content">
                    <div className="option-icon"></div>
                    <div className="option-details">
                      <a
                        href="#"
                        style={{
                          color: "black",
                          listStyle: "none", // Remove marker
                          fontWeight: "bold", // Set font-weight to bold
                          textAlign: "center", // Center the text
                        }}
                      >
                        <h4
                          style={{ fontSize: "15px", fontWeight: "bold" }}
                          onClick={sellCarOpener}
                        >
                          Sell Vehicle
                        </h4>
                      </a>
                    </div>
                  </div>
                </li>
              </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
