import React from "react";

//Assigning variables names
function NavTabs({ currentPage, handlePageChange }) {
    return (

        <ul class="nav nav-tabs">
        {/* Creating an navigation for PortfolioHome  */}
            <li class="nav-item">
                <a
                    href="#portfolioHome"
                    //on click revoke the function to handle the page change
                    onClick={() => handlePageChange("PortfolioHome")}
                    //Adding conditional operator (ternary) that checks to see if the current page is PortfolioHome and if it is then set the current page to active and if not then let that be as a link
                    className={currentPage === "PortfolioHome" ? "nav-link active" : "nav-link"}
                >
                    PortfolioHome
                </a>
            </li>
            {/* Creating an navigation for AboutMe  */}
            <li className="nav-item">
                <a
                    href="#aboutme"
                    onClick={() => handlePageChange("AboutMe")}
                    className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                >
                    AboutMe
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
                    href="resume"
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