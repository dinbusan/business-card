import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="card">
        <img src="./src/assets/deann.jpg" alt="" />

        <div className="container">
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
