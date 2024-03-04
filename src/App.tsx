import Pages from "./page-map";
import Navbar from "./components/Navbar/Navbar";

function App() {
  console.clear()
  return (
    <main className="main">
      <Navbar />
      <Pages />
    </main>
  );
}

export default App;
