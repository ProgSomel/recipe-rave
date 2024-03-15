import './App.css'
import Banner from './components/Bannner/Banner'
import Navbar from "./components/Navbar/Navbar"
function App() {

 return (
  <div className="max-w-screen-lg mx-auto mt-4 font-lexend px-2 md:px-4 lg:px-4">
    <Navbar></Navbar>
    <Banner></Banner>
  </div>
 )
}

export default App
