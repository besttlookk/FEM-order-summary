import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overlay"></div>

      <main className="wrapper">
        {/* overlay */}
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
