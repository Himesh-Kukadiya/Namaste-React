// import React from "react";
import ReactDOM from "react-dom/client";
// import foodImg from "./assets/food-app.png";

/*
Header
    - Logo
    - Nav Items 
Body
    - Search
    - RestaurantContainer
        - RestaurantCard
            - image
            - name of res, star rating, cuisine, delevery time
Footer
    - Copyright
    - Links
    - Address
    - Contact 
*/

const restro_data = [
    {
        name: "Meghna Foods",
        imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/9/9/efcfa416-46db-4371-9594-bcac3d165059_2bde9f05-c6e6-4650-883c-631f2baf4ffa.jpg_compressed",
        tags: ["Veg", "Burger", "South Indian"],
        rating: 4.3,
        time: 25,
    },
    {
        name: "KFC",
        imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rlcjzwkysumyh28nxuaq",
        tags: ["Chicken", "Fast Food", "Fried Chicken"],
        rating: 4.1,
        time: 30,
    },
    {
        name: "McDonald's",
        imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/d431d289-4911-4c63-aba8-94b2ea495e5a_449276.JPG",
        tags: ["Burger", "Fries", "Fast Food"],
        rating: 4.0,
        time: 20,
    },
    {
        name: "Domino's Pizza",
        imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/j3nizh9dasobzd5m0kz5",
        tags: ["Pizza", "Italian", "Fast Food"],
        rating: 4.2,
        time: 35,
    },
    {
        name: "Biryani House",
        imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/3/e72afd20-8e6b-430e-98a4-4c367a180866_1c6f393b-937a-4e59-a48e-add91f64b7f9.jpg",
        tags: ["Biryani", "Mughlai", "Rice"],
        rating: 4.5,
        time: 40,
    },
    {
        name: "A2B (Adyar Ananda Bhavan)",
        imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/e03610fb60dc1f1c6773b96ea72baaf2",
        tags: ["South Indian", "Veg", "Sweets"],
        rating: 4.4,
        time: 20,
    },
    {
        name: "Pizza Hut",
        imageURL: "",
        tags: ["Pizza", "Cheese", "Italian"],
        rating: 4.2,
        time: 30,
    },
    {
        name: "Haldiram's",
        imageURL: "",
        tags: ["Snacks", "Sweets", "North Indian"],
        rating: 4.6,
        time: 15,
    },
];


const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => <>
    <div id="header" className="header">
        <div className="logo-container">
            <img className="logo" src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!bw700" alt="logo" />
        </div>
        <div className="navbar">
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact Us </li>
                <li className="nav-item">Cart </li>
            </ul>
        </div>
    </div>
</>

const RestroCard = ({ data }) => {
    return <>
        <div className="restro-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/9/9/efcfa416-46db-4371-9594-bcac3d165059_2bde9f05-c6e6-4650-883c-631f2baf4ffa.jpg_compressed" alt="food1" />
            <h3>{data.name}</h3>
            <h4>{data.tags.join(", ")}</h4>
            <div>
                <h4>{data.rating}</h4>
                <h4>{data.time} minute</h4>
            </div>
        </div>
    </>
}
const Body = () => <div id="body" className="body">
    <div className="search">
        <input type="text" className="search-input" />
        <button className="search-button"> 🔎 </button>
    </div>
    <div className="restro-container">
        {restro_data.map((item, index) => {
            return <RestroCard key={item.name + index} data={item} />;
        })}
    </div>
</div>

const Footer = () => <div id="footer" className="footer">

</div>

const AppLayout = () => <div id="app">
    {/* header */}
    <Header />

    {/* Body */}
    <Body />

    {/* Footer */}
    <Footer />
</div>

root.render(<AppLayout />);