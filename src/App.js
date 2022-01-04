import './App.css';

import {AuthContextProvider} from './Context/AuthContext';

import {Navbar} from './component/navbar';
function App() {
    return (
   
    <AuthContextProvider>
    <div className="App">
    <Navbar/>
    
    </div>
    </AuthContextProvider>
    
  );
}

export default App;
