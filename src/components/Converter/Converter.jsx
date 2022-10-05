import React from 'react'

import Dropdown from '../UI/Dropdown/Dropdown'
import Course from '../Cours/Cours'
import Inputs from '../Inputs/Inputs'

import styles from './Converter.module.scss'

import API from '../../data/api'

const axios = require('axios').default

const Converter = () => {
  const [currenciesList, setCurrenciesList] = React.useState([])

  const [isSelected, setIsSelected] = React.useState(false)

  const [rate, setRate] = React.useState('')

  const [currency, setCurrency] = React.useState('')

  console.log(rate)

  React.useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setCurrenciesList(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const findCurrency = (curr) => {
    return currenciesList.find((currency) => currency.cc === curr)
  }

  return (
    <div className={styles.converter}>
      <div className={styles.coursesRow}>
        {currenciesList.length !== 0 ? (
          <>
            <Course
              rate={findCurrency('USD').rate}
              currency={findCurrency('USD').cc}
            />
            <Course
              rate={findCurrency('PLN').rate}
              currency={findCurrency('PLN').cc}
            />
            <Course
              rate={findCurrency('EUR').rate}
              currency={findCurrency('EUR').cc}
            />
          </>
        ) : (
          void 0
        )}
      </div>
      <div className={styles.selectRow}>
        <Dropdown
          setSelected={setIsSelected}
          setRate={setRate}
          label="I take:"
          currenciesList={currenciesList}
          setCurrency={setCurrency}
        />
      </div>
      <div className={styles.inputRow}>
        <Inputs currency={currency} isSelected={isSelected} rate={rate} />
      </div>
    </div>
  )
}

export default Converter
