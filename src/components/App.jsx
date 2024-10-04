import Router from "./Router"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter} from 'react-router-dom'

function App() {
  return <BrowserRouter>
    <Header /> 
    <Router />
    <Footer logo={<img src="/src/assets/logo_footer.png" alt="Logo Kasa" />} footerInfos="&copy; 2024 Kasa. All rights reserved"/>
  </BrowserRouter>
}

export default App
