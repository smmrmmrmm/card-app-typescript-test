import React from "react";
import NavBar from './components/NavBar'
import AllEntries from './routes/AllEntries'
import NewEntry from './routes/NewEntry'
import EditEntry from './routes/EditEntry'
import { EntryProvider } from './utilities/globalContext'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";




export default function App() {
  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const [on, seton] = React.useState(true);

  const toggleMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mode', 'light');
      seton(true);
      
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mode', 'dark');
      seton(false);
    }
  }
  return (
    <section className=" h-max bg-white dark:bg-slate-600 pb-4" >
  <Router>
    <EntryProvider>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<AllEntries/>}>
        </Route>
        <Route path="create" element={<NewEntry/>}>
        </Route>
        <Route path="edit/:id" element={<EditEntry/>}>
        </Route>
      </Routes>
      <button onClick={toggleMode} className="m-auto flex p-4 text-xl bg-blue-400 dark:bg-slate-800 dark:hover:bg-slate-900 hover:bg-blue-500 rounded-md font-medium text-white"> Toggle Theme</button>
    </EntryProvider>
    </Router>
    </section>
    
  );
}
