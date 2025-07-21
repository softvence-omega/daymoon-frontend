import { Footer } from "./Layout/Footer";
import Layout from "./Layout/Layout";
import MobileFooterMenu from "./Layout/MobileFooterMenu";
import Navbar from "./Layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Layout />
      <MobileFooterMenu />
      <Footer />
    </>
  );
}

export default App;
