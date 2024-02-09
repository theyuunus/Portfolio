import { Fragment } from "react";
import Navigation from "./components/Navigation/Navigation"
import { PageMap } from "./page-map";
import Footer from "./components/Footer/Footer";

function App() {
  console.clear()
  return (
    <Fragment>
      <main className='main'>
        <Navigation />
        <PageMap />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
