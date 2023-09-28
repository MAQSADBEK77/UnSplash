import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <div className="flex">
      <Header />
      <div>
        <main className="ml-32">
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
