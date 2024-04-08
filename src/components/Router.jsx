import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Infos from '../pages/Infos.jsx'
import Error from '../pages/Error.jsx'
import HouseSheet from '../pages/HouseSheet.jsx'

function Router() {
      return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/infos' element={<Infos />} />
        <Route path='/card/:id' element={<HouseSheet />} />
        <Route path='*' element={<Error />} />
      </Routes>
}

export default Router