import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Containers/Home'
import Link from './Containers/Link'
import Error  from './Containers/Err'


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/links' element={<Link/>} />
                <Route path='/*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;