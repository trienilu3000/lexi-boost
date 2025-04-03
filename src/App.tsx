import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import "../src/assets/styles/App.css";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header></Header>
      <div className="h-full bg-white flex">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
