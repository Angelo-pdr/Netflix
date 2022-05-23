import {MainRoutes} from './routes/mainRoutes'
import * as C from './App.styles'
import {AreaHeader} from './components/header'

const App = () => {

  return (
    <C.Container>
      <AreaHeader/>
       <MainRoutes/>
    </C.Container>
   
  )
}

export default App
