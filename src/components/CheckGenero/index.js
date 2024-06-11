import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CheckGenero() {
  const [checked, setChecked] = React.useState({
    homem: false,
    mulher: false
  });

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
      [event.target.name === 'homem' ? 'mulher' : 'homem']: !event.target.checked
    });
  };

  return (
    <div>
      
      <Checkbox
        checked={checked.homem}
        onChange={handleChange}
        name="homem"
      />
      <Checkbox
        checked={checked.mulher}
        onChange={handleChange}
        name="mulher"
      />
    </div>
  );
}