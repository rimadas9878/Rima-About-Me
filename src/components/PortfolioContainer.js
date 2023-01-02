import React, { useState } from 'react';
import Title from './Title';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Profile';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import githubIcon from '../assets/github.jpeg';
import linkedInIcon from '../assets/linkedIn.png';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const name = () => {
        if (currentPage === 'AboutMe', 'Profile', 'ContactMe', 'Resume') {
            return <Title />
        }
    };

    const renderPage = () => {

        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'Profile') {
            return <Portfolio />;
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div class="welcomePage">
            {/* Calling the name method  */}
            {name()}

            {/* Passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {/* Calling the renderPage method  */}
            {renderPage()}

            <div class="footer">
                <img
                    class='githubImage'
                    src={githubIcon} alt='githubIcon'
                />
                <img
                    class='linkedInImage'
                    src={linkedInIcon} alt='linkedInIcon'
                />
            </div>
        </div>
    );
}

