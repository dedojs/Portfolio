import './styles/main.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { StacksFrontEnd } from './components/StacksFrontEnd';
import { StacksBackEnd } from './components/StacksBackEnd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Curriculo } from './pages/Curriculum'
import { Stacks } from './pages/Stacks';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={'/curriculo'} component={ Curriculo }/>
        <Route path={'/stacks'} component={ Stacks}/>
        <Route path={'/' } component={ Home }/>
      </Switch>
    </div>
  )
}

export default App
