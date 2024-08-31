import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content text-white mb-8">
                <p>© 2022 Your Name</p>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;