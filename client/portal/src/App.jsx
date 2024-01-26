import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
