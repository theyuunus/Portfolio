import { Fragment } from "react";
import Navigation from "./components/Navigation/Navigation"
import { PageMap } from "./page-map";
import Footer from "./components/Footer/Footer";

function App() {
  console.clear()
  return (
    <Fragment>
      <Navigation />
      <PageMap />
      <Footer />
    </Fragment>
  );
}

export default App;
