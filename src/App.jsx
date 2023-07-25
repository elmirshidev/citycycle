import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Rules from "./pages/Rules"
import Main from "./pages/Main"
import Unlock from "./pages/Unlock"
import BikeMap from "./pages/BikeMap"
import Lock from "./pages/Lock"
import Settings from "./pages/Settings"
import Wallet from "./pages/Wallet"
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}  />
          <Route path="/signup" element={<SignUp />}  />
          <Route path="/rules" element={<Rules />}  />
          <Route path="/main" element={<Main />}  />
          <Route path="/unlock" element={<Unlock />}  />
          <Route path="/map" element={<BikeMap />}  />
          <Route path="/lock" element={<Lock />}  />
          <Route path="/settings" element={<Settings />}  />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
