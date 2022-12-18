import React from "react";

//Assigning variables names
function NavTabs({ currentPage, handlePageChange }) { 
    return (
        
        <ul class="navbar nav justify-content-center">
            {/* Creating an navigation for AboutMe  */}
            <li className="nav-item listTag">
                <a
                    href="#aboutme"
                    onClick={() => handlePageChange("AboutMe")}
                    className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                >
                    AboutMe
                </a>
            </li>
            {/* Creating an navigation for Portfolio  */}
            <li class="nav-item">
                <a
                    href="#Work"
                    //on click revoke the function to handle the page change
                    onClick={() => handlePageChange("Work")}
                    //Adding conditional operator (ternary) that checks to see if the current page is Portfolio and if it is then set the current page to active and if not then let that be as a link
                    className={currentPage === "Work" ? "nav-link active" : "nav-link"}
                >
                    Work
                </a>
            </li>
            {/* Creating an navigation for ContactMe  */}
            <li className="nav-item">
                <a
                    href="#contactme"
                    onClick={() => handlePageChange("ContactMe")}
                    className={currentPage === "ContactMe" ? "nav-link active" : "nav-link"}
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
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}
export default NavTabs;