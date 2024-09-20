import "./styles/tasks.style.css";
import TaskCard from "./TaskCard";
import { GlobalStateContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
interface TaskProps {
  sflag: boolean;
  search: string ; 
}
const TasksComponent = ({ sflag  , search}: TaskProps) => {
  const itemContext = useContext(GlobalStateContext);
  if (!itemContext) {
    return <>Context Not Initalized</>;
  }
  const { state } = itemContext;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [arr, setArr] = useState(state.items);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (sflag) {
      const sortedList = state.items.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setArr(sortedList);
    } if(sflag == false) {
      const sorteddesc = state.items.sort((a, b) => {
        return a.description.localeCompare(b.description);
      });
      setArr(sorteddesc);
    }
    if (search.length > 0) {
      console.log(search) ; 
      const filteredList = state.items.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setArr(filteredList);
    }
  }, [state, sflag , search]);
  
  return (
    <div className="tasks">
      {state.items.length == 0 && <p>Add Tasks To View</p>}
      {arr?.map((task, idx) => (
        <TaskCard idx={idx} title={task.name} description={task.description} />
      ))}
    </div>
  );
};

export default TasksComponent;
