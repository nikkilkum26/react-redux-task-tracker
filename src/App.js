import logo from "./logo.svg";
import Header from "./components/Header";
import List from "./components/List";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <List />
    </div>
  );
}

export default App;
