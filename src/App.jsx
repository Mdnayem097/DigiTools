import { Suspense, useState } from "react";
import "./App.css";
import Products from "./Products";
import Card from "./card";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Banner from "../assets/banner.png";
import Play from "../assets/Play.png"
import User from "../assets/user.png"
import Rocket from "../assets/rocket.png"
import Cart from "../assets/products/shopping-cart.png"
import Package from "../assets/package.png"

const getProducts = async () => {
  const rec = await fetch("../public/data.json");
  const data = await rec.json();
  return data;
};

function App() {
  const [activePage, setActivePage] = useState("products");
  const [cart, setCart] = useState([]);
  const ProductPromis = getProducts();

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const ProductsBtnClicked = () => {
    setActivePage("products");
  };

  const CardBtnClicked = () => {
    setActivePage("card");
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm w-10/12 m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-color-rgb font-bold">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="relative">
            <img src={Cart}/>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </div>
          <a href="#">Login</a>
          <a className="btn bg-color-rgb text-white rounded-full">
            Get Started
          </a>
        </div>
      </div>

      <div className="w-10/12 m-auto grid md:grid-cols-2 mt-10">
        <div className="grid content-center h-screen gap-5 mr-4 order-2 md:order-1">
          <p className="text-color-rgb my-auto">
            New: AI-Powered Tools Available
          </p>
          <h1 className="text-6xl font-semibold">
            Supercharge Your<span className="text-color-rgb"> Digital Workflow</span>
          </h1>
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div>
            <button className="btn btn-primary mr-3 bg-color-rgb">
              Explore Products
            </button>
            <button className="btn btn-soft btn-primary border-1 border-blue-900">
              <img src={Play} />
              Watch Demo
            </button>
            <button></button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img className="size-10/12 m-auto" src={Banner} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-3 md:flex bg-color-rgb justify-center gap-48 p-10 text-white">
        <div>
          <p className="text-4xl font-semibold mb-2">50K+</p>
          <p>Active Users</p>
        </div>
        <div>
          <p className="text-4xl font-semibold mb-2">200+</p>
          <p>Premium Tools</p>
        </div>
        <div>
          <p className="text-4xl font-semibold mb-2">4.9</p>
          <p>Rating</p>
        </div>
      </div>

      <div className="text-center mb-20 mt-20">
        <h1 className="text-3xl font-bold mb-5">Premium Digital Tools</h1>
        <p className="text-[#627382] mb-5">
          Choose from our curated collection of premium digital products
          designedto <br /> boost your productivity and creativity.
        </p>
        <div>
          <button
            onClick={() => setActivePage("products")}
            className="btn mr-3 btn-primary"
          >
            Products
          </button>
          <button onClick={() => setActivePage("card")} className="btn">
            Cart {cart.length}
          </button>
          {activePage === "products" && (
            <Suspense fallback={<p>Your Plain Is Loading....</p>}>
              <Products
                ProductPromis={ProductPromis}
                handleAddToCart={handleAddToCart}
              />
            </Suspense>
          )}
          {activePage === "card" && <Card cart={cart} setCart={setCart}></Card>}
        </div>
      </div>
      <ToastContainer />

      <div className="pt-20 w-10/12 m-auto text-center mb-32">
        <div className="mb-5">
          <h1 className="text-5xl font-semiboldbold mb-2">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382] mb-5">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
          <div className="p-10">
            <img className="m-auto" src={User} />
            <p className="text-xl font-bold my-3">Create Account</p>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="p-10">
            <img className="m-auto" src={Package}/>
            <p className="text-xl font-bold my-3">Create Account</p>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="p-10">
            <img className="m-auto" src={Rocket}/>
            <p className="text-xl font-bold my-3">Create Account</p>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>

      <div className="w-10/12 m-auto mb-20">
        <h1 className="text-5xl font-semiboldbold text-center mb-2">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382] text-center mb-15">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-10">
            <p className="text-xl font-bold">Starter</p>
            <p className="text-[#627382] mb-4">Perfect for getting started</p>
            <p className="text-2xl font-bold mb-3">
              $0<span className=" text-[#627382] text-sm">/month</span>
            </p>
            <p className=" text-[#627382]">{"✅"} Access to 10 free tools</p>
            <p className=" text-[#627382]">{"✅"} Basic templates</p>
            <p className=" text-[#627382]">{"✅"} Community support</p>
            <p className=" text-[#627382] mb-13">{"✅"} 1 project per month</p>
            <button className="w-70 bg-color-rgb rounded-full p-2 text-white">
              Get Started Free
            </button>
          </div>
          <div className="bg-color-rgb text-white p-10 rounded-2xl">
            <p className="text-xl font-bold">Pro</p>
            <p className=" text-white mb-4">Best for professionals</p>
            <p className="text-2xl font-bold mb-3">
              $29<span className=" text-white text-sm">/month</span>
            </p>
            <p className="  text-white">{"✅"} Everything in Pro</p>
            <p className="  text-white">{"✅"} Team collaboration</p>
            <p className="  text-white">{"✅"} Custom integrations</p>
            <p className="  text-white">{"✅"} Basic templates</p>
            <p className="  text-white">{"✅"} Community support</p>
            <p className="  text-white mb-13">{"✅"} 1 project per month</p>
            <button className=" bg-white w-70 rounded-full p-2 text-blue-800 font-semibold">
              Get Started Free
            </button>
          </div>
          <div className="p-10">
            <p className="text-xl font-bold">Enterprise</p>
            <p className="text-[#627382] mb-4">For teams and businesses</p>
            <p className="text-2xl font-bold mb-3">
              $99<span className=" text-[#627382] text-sm">/month</span>
            </p>
            <p className=" text-[#627382]">{"✅"} Priority support</p>
            <p className=" text-[#627382]">{"✅"} Advanced analytics</p>
            <p className=" text-[#627382]">{"✅"} Access to 10 free tools</p>
            <p className=" text-[#627382]">{"✅"} Basic templates</p>
            <p className=" text-[#627382]">{"✅"} Community support</p>
            <p className=" text-[#627382] mb-13">{"✅"} 1 project per month</p>
            <button className="w-70 bg-color-rgb rounded-full p-2 text-white">
              Get Started Free
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="bg-[#101727] px-10 md:px-30 pt-15">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pb-15">
          <div className="col-span-2 p-4">
            <p className="text-3xl text-white">DigiTools</p>
            <p className="text-[#627382] mt-2">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>
          <div>
            <p className="text-[#ffffff]">Product</p>
            <p className="text-[#627382]">Features</p>
            <p className="text-[#627382]">Pricing</p>
            <p className="text-[#627382]">Templates</p>
            <p className="text-[#627382]">Integrations</p>
          </div>
          <div>
            <p className="text-[#ffffff]">Company</p>
            <p className="text-[#627382]">About</p>
            <p className="text-[#627382]">Blog</p>
            <p className="text-[#627382]">Careers</p>
            <p className="text-[#627382]">Press</p>
          </div>
          <div>
            <p className="text-[#ffffff]">Resources</p>
            <p className="text-[#627382]">Documentation</p>
            <p className="text-[#627382]">Help Center</p>
            <p className="text-[#627382]">Community</p>
            <p className="text-[#627382]">Contact</p>
          </div>
          <div>
            <p className="text-[#ffffff]">Resources</p>
            <div className="flex gap-1">
              <a className="bg-white rounded-full p-1" href="#">{'📘'}</a>
              <a className="bg-white rounded-full p-1" href="#">{'📸'}</a>
              <a className="bg-white rounded-full p-1" href="#">{'💼'}</a>
            </div>
          </div>
        </div>
        <div className="text-[#627382] md:flex justify-between pb-2 pt-5 border-t-1 border-[#627382]">
            <div><p>© 2026 Digitools. All rights reserved.</p></div>
            <div className="flex pt-3 md:flex justify-between gap-8">
              <p>Privacy Policy</p>
              <p>Cookies</p>
              <p>Terms of Service</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
