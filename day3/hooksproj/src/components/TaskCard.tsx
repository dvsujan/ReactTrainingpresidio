import "./styles/taskcard.style.css";
import { useContext } from "react";
import { GlobalStateContext } from "../context/context";

interface TaskCardProps {
  idx: number ; 
  title: string;
  description: string;
}

const TaskCard = ({idx, title, description }: TaskCardProps) => {
  const itemContext = useContext(GlobalStateContext);
  const handleRemoveElement = ()=>{ 
    itemContext?.dispatch({type: 'DELETE_ITEM', index: idx})
  }
  return (
    <div className="task-card">
      <h1>Name: {title}</h1>
      <p>Description: {description}</p>
      <button onClick={handleRemoveElement}>Delete</button>
    </div>
  );
};

export default TaskCard;
