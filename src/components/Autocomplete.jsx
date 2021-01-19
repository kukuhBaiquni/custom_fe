import React, { useState } from 'react'
import { AutoComplete } from 'antd'
import InputField from './Input'

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/* eslint-disable arrow-body-style */

const searchResult = (query) => {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      }
    })
}

const Complete = () => {
  const [options, setOptions] = useState([])

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : [])
  }

  const onSelect = (value) => {
    /* eslint-disable-next-line no-console */
    console.log('onSelect', value)
  }

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      {/* <Input.Search size="large" placeholder="input here" /> */}
      <InputField />
    </AutoComplete>
  )
}

export default Complete
