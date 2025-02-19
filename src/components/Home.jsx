
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to my Application!</h1>
            <p className="home-description">
                Explore the features of my app and enjoy a seamless experience.</p>
                <p><strong>Fetches Data from an External API</strong></p>
                <p><strong>Routing Implementation</strong></p>
                <p><strong>Navigation</strong></p>
                <p><strong>Styling & Responsive</strong></p>
                <p><strong>404 NotFound Page</strong></p>
                <p><strong>Loading Message/Spinner</strong></p>
            <button className="btn btn-primary home-button">Get Started</button>
        </div>
    );
};

export default Home;
