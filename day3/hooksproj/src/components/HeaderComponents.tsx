import { useEffect, useState } from "react";
import "./styles/header.style.css";
import { useDebounce } from "../hooks/useDebounce";
interface headerProps {
  onSort: (value: string) => void;
  onSearch: (value: string) => void;
}
const HeaderComponents = (props: headerProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      props.onSearch(debouncedSearchTerm);
    }
    else{ 
      props.onSearch("");
    }
  }, [debouncedSearchTerm, props]);
  
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSort(event.target.value);
  };

  return (
    <div className="header">
      <input type="text" placeholder="Search" onChange={(e)=>{ 
        setSearchTerm(e.target.value); 
      }} />
      <span>
        <p>Sort By:</p>
        <select onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="desc">Description</option>
        </select>
      </span>
    </div>
  );
};

export default HeaderComponents;
