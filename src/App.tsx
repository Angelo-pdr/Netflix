import {MainRoutes} from './routes/mainRoutes'
import {AreaHeader} from './components/header'

import * as C from './App.styles'

const App = () => {

  return (
    <C.Container>
      <AreaHeader/>
       <MainRoutes/>
    </C.Container>
   
  )
}

export default App
