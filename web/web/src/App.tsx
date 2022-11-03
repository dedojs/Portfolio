import './styles/main.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Curriculo } from './pages/Curriculum'
import { Stacks } from './pages/Stacks';
import { Videos } from './components/Videos';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={'/curriculo'} component={ Curriculo }/>
        <Route path={'/stacks'} component={ Stacks}/>
        <Route path={'/about'} component={ About }/>
        <Route path={'/videos'} component={ Videos }/>
        <Route path={'/' } component={ Home }/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
