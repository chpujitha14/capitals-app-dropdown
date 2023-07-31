import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    selectedValue: countryAndCapitalsList[0].id,
  }

  countryName = event => {
    this.setState({selectedValue: event.target.value})
  }

  render() {
    const {selectedValue} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedValue,
    )
    const {country} = activeCountryAndCapital

    return (
      <div className="background-container">
        <div className="white-card">
          <h1>Countries And Capitals</h1>
          <select name="capital" id="capital" onChange={this.countryName}>
            {countryAndCapitalsList.map(capital => (
              <option value={capital.id} key={capital.id}>
                {capital.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capital">is capital of which country?</label>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
