import React from "react";

const Tabs = ({ tabs, activeId, onChange }) => {
  return (
    <div>
      {tabs.map(({ id, name }) => (
        <span
          key={id}
          onClick={() => onChange(id)}
          data-active={activeId === id}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
