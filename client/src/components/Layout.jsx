import React from 'react';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation
import Navbar from './Navbar';
import MobileActionBar from './MobileActionBar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    const location = useLocation(); // 2. Get current location

    // 3. Check if the current path is the home page ("/")
    const isHomePage = location.pathname === '/';

    return (
        /* Added 'flex flex-col' to ensure Footer stays at bottom on other pages */
        <div className="flex flex-col min-h-screen w-full bg-light-bg text-[#1a1a1a] font-sans selection:bg-black selection:text-white overflow-x-hidden">
            <Navbar />
            
            {/* 'flex-grow' ensures this takes up space, pushing the footer down */}
            <main className="w-full flex-grow">
                {children}
            </main>

            <MobileActionBar />

            {/* 4. Only render Footer if it's NOT the home page */}
            {!isHomePage && <Footer />}
        </div>
    );
};

export default Layout;