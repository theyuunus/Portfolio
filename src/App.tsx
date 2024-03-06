import Pages from "./page-map";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  console.clear()
  return (
    <main className="main">
      <Navbar />
      <Pages />
      <Footer />
    </main>
  );
}

export default App;
