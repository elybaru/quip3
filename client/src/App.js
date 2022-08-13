import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import Login from "./components/Login"
import Header from "./components/Header"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Conversations from './components/Conversations'
import ConversationRoom from './components/ConversationRoom'

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
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
        }
    });
}

if (!user) return (

  <div className="wrapper">
      <div className="header">
         
      <Header />
          <div className="item">
              <h1 className="logo">Quip3</h1>
          </div>
          <div className="item">
              {/* {location.pathname === '/signup' ? <div className='navlinks'><button><Link to='/login'>Login</Link></button></div> : <div className='navlinks'><button><Link to='/signup'>Signup</Link></button></div>} */}
              <div className='navlinks'><button><Link to='/login'>Login</Link></button></div>
              <div className='navlinks'><button><Link to='/signup'>Signup</Link></button></div>
          </div>
      </div>

      <Routes>
          <Route path='/login' element={<Login setUser={setUser} />}>
          </Route>
          <Route path='/signup' element={<Signup setUser={setUser} />}>
          </Route>
          <Route path='/' element={<Home setUser={setUser} />}>
          </Route>
          {/* {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
  </div>);

return (
  <div className="wrapper">
      <h1>Welcome to Quip 3</h1>
      <h2>You are logged in</h2>
      <div>
          <button onClick={handleLogoutClick}>Logout</button>
      </div>
      <Navbar user={user} />

      <Routes>
          <Route exact path='/home' element={<Home setUser={setUser} />}>
          </Route>
          <Route exact path='/conversations' element={<Conversations />}>
          </Route>
          <Route path='/conversations/:id' element={<ConversationRoom 
              // users={allUsers}
              // cableApp={cableApp}
              // // updateApp={updateAppStateRoom}
              // getConversation={getConversation}
              // currentConvo={currentConvo}
              // user={user}
              // messages={messages}
              // handleMessageUpdate={setMessages}
          />}>
          </Route>
          {/* <Route path='/login' element={<Login setUser={setUser} />}>
          </Route> */}
          {/* <Route path='/signup' element={<Signup setUser={setUser} />}>
          </Route> */}
          {/* <Route path='/chatroom' element={<MainChatRoom user={user} />}> */}
          {/* </Route> */}
      </Routes>
  </div>
)
 
}

export default App;
