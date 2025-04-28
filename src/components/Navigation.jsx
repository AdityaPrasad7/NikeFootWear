import img from "../../public/images/brand_logo.png"
const Navigation = () =>{
    return(
        <div>
        <nav className="container">
            <div className="logo">
                <img src={img} alt="brand"/>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">contact</li>
            </ul>
            <button>login</button>
        </nav>
    </div>
    );
};
export default Navigation;