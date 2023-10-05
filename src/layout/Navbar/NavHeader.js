import "./Navbar.css";
import NavbarModal from "./NavbarModal";
import { useState } from "react";
import HomeWidgetModal from "../Homewidget/HomeWidgetModal";
import { useDispatch, useSelector } from "react-redux";
import NavbarDropdown from "./NavbarDropdown";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authenticationSlice";
import { Deactivate } from "../../store/navbarSlice";
function NavHeader() {
  const [downloadModalIsOpen, setDownloadModalIsOpen] = useState(false);
  const [signupSigninModalIsOpen, setSignupSigninModalIsOpen] = useState(false);
  const user = useSelector((state) => state.authentication.user);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openDownloadModal = (e) => {
    e.preventDefault();
    setDownloadModalIsOpen(true);
  };

  const closeDownloadModal = () => {
    setDownloadModalIsOpen(false);
  };

  const openSignupSigninModal = (e) => {
    e.preventDefault();
    setSignupSigninModalIsOpen(true);
  };

  const closeSignupSigninModal = () => {
    setSignupSigninModalIsOpen(false);
  };

  const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
        <style>
          svg {
            fill: #d10000;
          }
        </style>
        <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
      </svg>
    `;
  const logoutHandler = async (e) => {
    e.preventDefault();
    console.log(user, token);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/sign-out",

        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token from Redux in the headers
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        document.cookie =
          "jwtToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        dispatch(logout());
        dispatch(Deactivate());

        const msg = response.data.message;

        navigate("/");
        console.log(msg);
        console.log(user);
        // Additional actions or redirection after successful logout
      } else {
        console.error("Logout error: ");
        // Handle error messages from the server
      }
    } catch (error) {
      console.error("Logout error: " + error);
      // Handle network or other errors here
    }
  };
  const profileOpener = (e) => {
    e.preventDefault();
    console.log(user._id);

    navigate(`/profile/${user._id}`);
  };

  const navigateToMyAds = (e) => {
    e.preventDefault();
    navigate("/my-ads");
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark transparent-background">
        <div>
          <a href="#" onClick={openDownloadModal}>
            <div
              style={{
                display: "inline-block",
              }}
              dangerouslySetInnerHTML={{ __html: svgIcon }}
            />
            <div style={{ display: "inline-block", margin: "0px 5px" }}>
              <p
                style={{
                  display: "inline-block",
                  color: "#fff",
                }}
              >
                Download App Via SMS
              </p>
            </div>
          </a>
        </div>
        <form className="form-inline">
          <div style={{ padding: "5px", color: "slategrey" }}>
            <a
              href="#"
              style={{
                color: "#7B2529",
                fontWeight: "bold",
                textDecoration: "none",
                marginRight: "7px",
              }}
            >
              اردو
            </a>
            |
          </div>
          {user ? (
            <>
              <div
                style={{
                  padding: "5px",
                  color: "slategrey",
                }}
              >
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ background: "transparent", outline: "solid" }}
                  >
                    {user.name}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a onClick={profileOpener} class="dropdown-item" href="#">
                      Profile
                    </a>

                    <a class="dropdown-item" href="#" onClick={navigateToMyAds}>
                      My Ads
                    </a>
                    <a onClick={logoutHandler} class="dropdown-item" href="#">
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div
              style={{
                padding: "5px",
                color: "slategrey",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginRight: "7px",
                }}
                onClick={openSignupSigninModal}
              >
                Join Us
              </a>
            </div>
          )}
          {/* <div
            style={{
              padding: "5px",
              color: "slategrey",
            }}
          >
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginRight: "7px",
              }}
              onClick={openSignupSigninModal}
            >
              Sign In
            </a>
          </div> */}
        </form>
        <HomeWidgetModal
          isOpen={signupSigninModalIsOpen}
          closeModal={closeSignupSigninModal}
        />
        <NavbarModal
          isOpen={downloadModalIsOpen}
          closeModal={closeDownloadModal}
        />
      </nav>
    </>
  );
}

export default NavHeader;
