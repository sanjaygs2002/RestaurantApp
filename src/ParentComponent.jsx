import React from 'react'


    const ParentComponent = () => {
      const handleClick = () => {
        console.log("Button clicked in child component!");
      };

      return (
        <ChildComponent onChildClick={handleClick} />
      );
    };
  

export default ParentComponent;