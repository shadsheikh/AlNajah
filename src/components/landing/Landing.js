
import React, { Component } from 'react'
import Hero from './hero/Hero'
import Materials from './materials/Materials'
import Stats from './stats/Stats'
import Tes from './testimonials/Tes'

class Landing extends Component {
	render() {
		return (
			<>
				<Hero />
				<Materials />
				<Stats />
				<Tes />
			</>
		)
	}
}

export default Landing