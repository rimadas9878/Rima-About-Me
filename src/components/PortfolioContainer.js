import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import PortfolioHome from './pages/PortfolioHome';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';

export default function PortfolioContainer(){

    const [currentPage, setCurrentPage] = useState('PortfolioHome');

    const renderPage = () => {
        if(currentPage === 'AboutMe'){
            return <AboutMe/>
        }
        if(currentPage === 'PortfolioHome'){
            return <PortfolioHome />;
        }
        if(currentPage === 'ContactMe'){
            return <ContactMe />
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            {/* Passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

            {/* Calling the renderPage method  */}
            {renderPage()}
        </div>
    )
}

