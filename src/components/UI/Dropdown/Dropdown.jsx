import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import styles from './Dropdown.module.scss'

const Dropdown = ({ currenciesList, setRate, setSelected, setCurrency }) => {
  const value = React.useRef('Value')

  return (
    <FormControl fullWidth className={styles.dropdown}>
      <InputLabel id="demo-simple-select-label">
        Please select a currency
      </InputLabel>
      <Select
        label="Please select a currency"
        ref={value}
        value={value.current.value}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        {currenciesList.length !== 0
          ? currenciesList.map((currency) => (
              <MenuItem
                onClick={() => {
                  setRate(currency.rate)
                  setSelected(true)
                  setCurrency(currency.cc)
                }}
                key={currency.cc}
                value={currency.rate}
              >
                {currency.txt}
              </MenuItem>
            ))
          : void 0}
      </Select>
    </FormControl>
  )
}

export default Dropdown
