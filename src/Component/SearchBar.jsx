// import React, { useState } from "react";
// import styles from "../styles/SearchBar.module.css";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <input
//       className={styles.search}
//       type="text"
//       placeholder="Search restaurants..."
//       value={query}
//       onChange={handleChange}
//     />
//   );
// };

// export default SearchBar;

import React,{ useState} from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar=({onSearch})=>{
  const[Query,setQuery]= useState("");

  const handleChange=(e)=>{
    setQuery(e.target.value);
    onSearch(e.target.value);
  };
  return(
    <>
    <input type="text"
      className={styles.search}
      placeholder="Search restaurant...."
      value={Query}
      onChange={handleChange}
    />
    </>
  )
}

export default SearchBar;

