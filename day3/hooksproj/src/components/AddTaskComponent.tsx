import './styles/addtask.style.css'
import { useRef , useContext} from 'react'; 
import { GlobalStateContext } from '../context/context';

const AddTaskComponent = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const itemContext = useContext(GlobalStateContext);
  if(!itemContext){ 
    return <>Context Not Initalized</> ; 
  }
  const {dispatch } = itemContext;
  const handleAddItem = () => {
    const name = nameRef.current?.value;
    const description = descRef.current?.value;
    if (name && description) {
      dispatch({ type: 'ADD_ITEM', payload: { name, description } });
      nameRef.current.value = '' ; 
      descRef.current.value = '' ;
    }
    else { 
      alert("Please enter both name and description");
    }
  };
  return (
    <div className="add-task">
        <input type="text" placeholder="Name" ref = {nameRef} />
        <input type="text" placeholder="Description" ref={descRef} />
        <button onClick={handleAddItem}>Add Task</button>
    </div>
  )
}

export default AddTaskComponent