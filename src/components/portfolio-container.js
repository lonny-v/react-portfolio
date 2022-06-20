import React, { useState } from 'react';
import NavTabs from './navTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Projects';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Projects') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header>
                <h1 id='name'>Lonny Vandenberg</h1>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {renderPage()}
            <footer>
                <h5 id='footer'>Created by: Lonny Vandenberg</h5>
            </footer>
        </div>
    );
}