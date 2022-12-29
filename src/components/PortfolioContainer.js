import React, { useState } from 'react';
import Title from './Title';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Profile';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('Portfolio');

    const name = () => {
        if(currentPage === 'AboutMe', 'Profile', 'ContactMe', 'Resume'){
            return <Title/>
        }
    };

    const renderPage = () => {
        
        if(currentPage === 'AboutMe'){
            return <AboutMe/>
        }
        if(currentPage === 'Profile'){
            return <Portfolio />;
        }
        if(currentPage === 'ContactMe'){
            return <ContactMe />
        }
        if(currentPage === 'Resume'){
            return <Resume />
        }
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            {/* Calling the name method  */}
            {name()}

            {/* Passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

            {/* Calling the renderPage method  */}
            {renderPage()}
        </div>
    );
}

