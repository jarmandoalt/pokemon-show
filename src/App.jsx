import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import CrudApi from "./pages/CrudApi";

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
        <CrudApi/>

    </Provider>
  );
}

export default App;
