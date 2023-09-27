import "./Navbar.css";
const NavbarDropdown = (props) => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {props.hasDropdown ? (
            <li className="dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                style={{ color: "#fff", margin: "5px 10px" }}
              >
                {props.name}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {props.options.map((option, index) => (
                  <li className="dropdown-item" key={index}>
                    <div className="option-content">
                      <div className="option-icon">
                        <img src={option.icon} alt="Option Icon" />
                      </div>
                      <div className="option-details">
                        <a href="#">
                          <h4>{option.heading} </h4>
                        </a>
                        <p>{option.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            // Render a simple navbar item when hasDropdown is false
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#fff" }}>
                {props.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavbarDropdown;
