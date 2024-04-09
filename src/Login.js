import React, { useState } from 'react';

// Create a functional component for Checklist
const Checklist = () => {
  // Step 1: Create React state to track checkbox value
  const [checkedItems, setCheckedItems] = useState({});

  // Step 2: Function to update checkbox value based on event.target.checked
  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <div>
      <h2>Checklist</h2>
      {/* Step 3: Add checkbox input element to JSX code with onChange function */}
      <div>
        <input
          type="checkbox"
          id="option1"
          name="option1"
          checked={checkedItems.option1 || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="option2"
          name="option2"
          checked={checkedItems.option2 || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="option3"
          name="option3"
          checked={checkedItems.option3 || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option3">Option 3</label>
      </div>
      {/* Step 4: Implement useContext Hooks for this task */}
      <div>
        <h3>Selected Options:</h3>
        <ul>
          {Object.entries(checkedItems).map(([key, value]) => (
            value && <li key={key}>{key}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checklist;
