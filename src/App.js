import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Chats from "./components/Chats";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chats />} />
              <Route path="/" element={<Chats />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
