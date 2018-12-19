import React from 'react';

const Dropdown = ({ visible, classname, items }) => {
  return (
    <div className={visible ? `dropdown ${classname}` : "no-display"}>
      <ul>
        {Object.entries(items).map((pair, i) => (
          <li key={`item-${i}`} onMouseDown={pair[1]}>
            {pair[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
