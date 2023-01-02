import React from "react";

//Assigning variables names
function NavTabs({ currentPage, handlePageChange }) { 
    return (
        <div class="navbarDiv">
        <ul class="navbar nav justify-content-center" id="welcomePageNavbar">
            {/* Creating an navigation for AboutMe  */}
            <li className="nav-item listTag">
                <a
                    href="#aboutme"
                    onClick={() => handlePageChange("AboutMe")}
                    className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                    class="navbarText"
                >
                    AboutMe
                </a>
            </li>
            {/* Creating an navigation for Portfolio  */}
            <li class="nav-item">
                <a
                    href="#Profile"
                    //on click revoke the function to handle the page change
                    onClick={() => handlePageChange("Profile")}
                    //Adding conditional operator (ternary) that checks to see if the current page is Portfolio and if it is then set the current page to active and if not then let that be as a link
                    className={currentPage === "Profile" ? "nav-link active" : "nav-link"}
                    class="navbarText"
                >
                    Profile
                </a>
            </li>
            {/* Creating an navigation for ContactMe  */}
            <li className="nav-item">
                <a
                    href="#contactme"
                    onClick={() => handlePageChange("ContactMe")}
                    className={currentPage === "ContactMe" ? "nav-link active" : "nav-link"}
                    class="navbarText"
                >
                    ContactMe
                </a>

            </li>
            {/* Creating an navigation for Resume  */}
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                    class="navbarText"
                >
                    Resume
                </a>
            </li>
        </ul>
        </div>
    );
}
export default NavTabs;