import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div>
            <p>&copy; {new Date().getFullYear()} Project Routing. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
