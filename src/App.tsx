import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import "../src/assets/styles/App.css";

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar></Sidebar>
      <div className="flex-1 h-full bg-white">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
