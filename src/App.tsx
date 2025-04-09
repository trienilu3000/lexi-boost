import "../src/assets/styles/App.css";
import Router from "./routes";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Router></Router>
    </AppProvider>
  );
}

export default App;
