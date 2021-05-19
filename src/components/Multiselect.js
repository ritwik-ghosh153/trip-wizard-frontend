import React, { useState, useEffect } from 'react'

const MultiselectCheckbox = ({ options, onChange }) => {
  const [data, setData] = useState(options);

  const toggle = index => {
    const newData = [...data];
    newData.splice(index, 1, {
      label: data[index].label,
      checked: !data[index].checked
    });
    setData(newData);
    // console.log(newData)
    // console.log(data)
    onChange(newData.filter(x => x.checked));
  };

  return (
    <>
      {data.map((item, index) => (
        <label className='form-check-label' key={item.label}>
          <input
            className='form-check-input'
            readOnly
            type="checkbox"
            checked={item.checked || false}
            onClick={() => toggle(index)}
          />
          {item.label}
        </label>
      ))}
    </>
  );
};
export default MultiselectCheckbox
