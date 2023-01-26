import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';



function App() {

  const isLoggedIn = true;
  return (
    <div>
{
  isLoggedIn ? <SignUp /> : <SignIn />
}
    </div>
  );
}

export default App;
