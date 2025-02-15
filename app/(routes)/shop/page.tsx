import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "../../components/shop/Hero";
import Products from "../../components/shop/Products";

export default async function Shop() {
    return <div className="mx-auto w-[95%]"><Hero /><Products /></div>
}
