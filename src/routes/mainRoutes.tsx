import {useRoutes} from 'react-router-dom';
import {Home} from "../pages/home"
import {Login} from '../pages/login'
import {MemberArea} from "../pages/memberArea"

export const MainRoutes =() => {
    
    return useRoutes ([
        {path: '/', element: <Home/>},
        {path: '/login', element: <Login/>},
        {path: '/memberArea', element: <MemberArea/>}
    ])
}