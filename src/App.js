import "./App.css";
import Header from "./components/organisms/header/Header";
import ProtectedRoutes from "./routes";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container p-6 mt-2">
        <ProtectedRoutes />
      </div>
      ;
    </div>
  );
}

export default App;
