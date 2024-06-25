import React, { Component } from 'react'
import Hero from './hero/Hero'
import Teachers from './teachers/Teachers'

class About extends Component {
	render() {
		return (
			<>
				<Hero />
				<Teachers />
			</>
		)
	}
}

export default About