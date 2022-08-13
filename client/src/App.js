import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    
    // auto-login
    fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((u) => {
                // console.log(u)
                setUser(u)
            });
        }
    })
    
}, []);

const handleLogoutClick =()  => {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
        }
    });
}
  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
