import Router from "./components/Router";
import { GlobalProvider } from "./GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}

export default App;
