import Router from "./Router"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter} from 'react-router-dom'

function App() {
  return <BrowserRouter>
    <Header /> 
    <Router />
    <Footer />
  </BrowserRouter>
}

export default App
