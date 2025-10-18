import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
    const updateTheme = (isDark) => {
        if (isDark) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#f8f9fa';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#212529';
            localStorage.setItem('theme', 'light');
        }
    };

    const [darkMode, setDarkMode] = useState(() => {
        // Check for saved theme preference or use the system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme ? savedTheme === 'dark' : prefersDark;
        return initialTheme;
    });

    // Apply theme on mount and when darkMode changes
    useEffect(() => {
        updateTheme(darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        updateTheme(newMode);
    };
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to='/sign-kit/home' className="navbar-brand mb-0 h1">
                    ISL Genie
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link to='/sign-kit/home' className="nav-link active">Home</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/convert' className="nav-link">Convert</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/learn-sign' className="nav-link">Learn Sign</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/all-videos' className="nav-link">Videos</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/feedback' className="nav-link">Feedback</Link></li>
                        <li className="nav-item">
                            <button 
                                className="btn btn-link nav-link"
                                onClick={toggleDarkMode}
                                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                style={{
                                    fontSize: '1.2rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar