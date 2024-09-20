import HeaderComponents from "./components/HeaderComponents";
import AddTaskComponent from "./components/AddTaskComponent";
import TasksComponent from "./components/TasksComponent";
import { GlobalStateProvider } from "./context/context";
import "./App.css";
import { useState } from "react";

function App() {
  const [sflag , setSflag] = useState(true); 
  const [searchtxt , setSearchtxt] = useState(''); 
  const handleSortEvent = () => {
    setSflag(!sflag);
  };
  const handleSearchChange = (searchstr:string)=>{ 
    setSearchtxt(searchstr);
  }
  return (
    <div className="master">
      <GlobalStateProvider>
        <div className="main">
          <HeaderComponents onSearch={handleSearchChange} onSort={handleSortEvent} />
          <TasksComponent sflag={sflag} search={searchtxt}/>
          <AddTaskComponent />
        </div>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
