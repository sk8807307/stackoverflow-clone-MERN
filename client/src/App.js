import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { fetchAllQuestions } from './actions/question';
import AllRoutes from './AllRoutes';
import { fetchAllUsers } from './actions/users';
import ChatBotWidget from './components/ChatBot/ChatBotWidget';
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      <ChatBotWidget />
      </Router>
    </div>
  );
}

export default App;
