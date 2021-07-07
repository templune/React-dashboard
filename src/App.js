import { BrowserRouter as Router, Route} from 'react-router-dom' 
import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import Home from '../src/pages/Home'
import Sales from '../src/pages/Sales'
import Clients from '../src/pages/Clients'
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Route path="/" exact={true} component={Home} />
          <Route path="/sales" exact={true} component={Sales} />
          <Route path="/clients" exact={true} component={Clients} />
        </div>
      </div>
    </Router>
  );
}

export default App;
