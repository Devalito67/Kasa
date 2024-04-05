import { Routes, Route } from 'react-router-dom'
import Home from '/src/pages/Home.jsx'
import Infos from '/src/pages/Infos.jsx'
import Error from '/src/pages/Error.jsx'

function Router() {
      return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/infos' element={<Infos />} />
        <Route path='*' element={<Error />} />
      </Routes>
}

export default Router