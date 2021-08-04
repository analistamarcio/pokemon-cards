import { Route, Switch } from 'react-router-dom';

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

import { Home } from './Views/Home';
import { About } from './Views/About';
import { Error } from './Views/Error';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
