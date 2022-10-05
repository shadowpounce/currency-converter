import React from 'react'

import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'

import styles from './Inputs.module.scss'

const Inputs = ({ rate, isSelected }) => {
  const [giveValue, setGiveValue] = React.useState('')
  const [takeValue, setTakeValue] = React.useState('f')

  React.useEffect(() => {
    setGiveValue('')
    setTakeValue('')
  }, [rate])

  return (
    <>
      <FormControl
        className={
          isSelected
            ? `${styles.inputGive}`
            : `${styles.inputGive} ${styles.disabled}`
        }
        sx={{ m: 1 }}
      >
        <InputLabel htmlFor="outlined-adornment-amount">
          {isSelected ? 'Give:' : ''}
        </InputLabel>
        <OutlinedInput
          type="number"
          disabled={isSelected ? false : true}
          value={giveValue}
          onChange={(e) => {
            setGiveValue(e.target.value)
            e.target.value === ''
              ? setTakeValue('')
              : setTakeValue((e.target.value / rate).toFixed(2))
          }}
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">₴</InputAdornment>}
          label="Give:"
        />
      </FormControl>
      <TextField
        type="number"
        variant={isSelected ? void 0 : 'filled'}
        disabled={isSelected ? false : true}
        onChange={(e) => {
          setTakeValue(e.target.value)
          e.target.value === ''
            ? setGiveValue('')
            : setGiveValue((e.target.value * rate).toFixed(2))
        }}
        value={takeValue}
        id="outlined-required"
        label="Take:"
      />
    </>
  )
}

export default Inputs
