import Router from "./Router"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter} from 'react-router-dom'

function App() {
  return <BrowserRouter>
    <Header logo={<img src="/assets/logo.png" alt="Logo Kasa" />}/> 
    <Router />
    <Footer logo={<img src="/assets/logo_footer.png" alt="Logo Kasa" />} footerInfos="&copy; 2024 Kasa. All rights reserved"/>
  </BrowserRouter>
}

export default App
