
import Header from "./header/header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/footer"
import MoviesProvider from "./Context.jsx";
function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <Header />
        <Home />
        <Footer/>
      </div>
    </MoviesProvider>
  );
}

export default App;
