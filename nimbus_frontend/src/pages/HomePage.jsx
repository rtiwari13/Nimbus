import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TabSwitcher from "../components/TabSwitcher";
import Features from "../components/Features";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
        <Hero />
        <TabSwitcher />
      <Features/>
      <Footer/>
    </>
  );
};

export default HomePage;
