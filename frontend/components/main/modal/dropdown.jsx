import React from 'react';

const Dropdown = ({ visible, className, items }) => {
  return (
    <div className={visible ? `${className} dropdown` : "no-display"}>
      <ul>
        {Object.entries(items).map((pair, i) => {
          <li key={`item-${i}`} onClick={pair[1]}>
            {pair[0]}
          </li>
        })}
      </ul>
    </div>
  );
};

export default Dropdown;