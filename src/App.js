import { Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Frontend } from './Pages/Frontend';
import { Backend } from './Pages/Backend';
import { Fundamentos } from './Pages/Fundamentos';
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/front-end'} component={Frontend} />
      <Route exact path={'/back-end'} component={Backend} />
      <Route exact path={'/fundamentos'} component={Fundamentos} />
    </Switch>
  );
}

export default App;
