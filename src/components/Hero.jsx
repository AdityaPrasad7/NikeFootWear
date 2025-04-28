
const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button>shop now</button>
                    <button className="secondary-btn">category</button>
                </div>

                <div className="shopping">
                   <p>Also Available On</p>

                   <div className="brand-icons">
                        <img src="./images/amazon.png" alt="amazon-logo" />
                        <img src="./images/flipkart.png" alt="flipkart-logo" />
                    </div> 
                </div>
            </div>
            <div className="hero-images">
                <img src="./images/shoe_image.png" alt="hero-image"/>
            </div>
        </main>
    );
};
export default HeroSection;