import "./App.css";
import Chats from "./components/Chats";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chats */}
        <Chats />
      </div>
    </div>
  );
}

export default App;
