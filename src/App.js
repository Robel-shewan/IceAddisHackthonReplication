import Header from "./components/Header";
import Routes from "./routes";
import "./app.css";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#0d0e0e" }}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
