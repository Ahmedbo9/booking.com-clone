import Header from "../components/header";
import Hero from "../components/hero";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default Layout;