import React from 'react'
import axios from 'axios'
export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {cities: []}
  }
  componentDidMount () {
    axios.get('https://www.copart.com/public/data/locations/retrieveLocationsList?continentCode=NORTH_AMERICA').then((response) => response.data.data.countries)
		.then((countries) => { console.log(JSON.stringify(countries)) })
  }
  render () {
  	let cities = this.state.cities.map((city) => {
  		return (<li />)
  	})
    return (<ul />)
  }
}
