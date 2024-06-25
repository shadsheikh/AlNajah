import React, { Component } from 'react'
import Section1 from './sections/Section1'
import './Courses.css'

class Courses extends Component {
	render() {
		return (
			<>
				<div className='container'>
					<div className='title py-3 text-center'>
						<h4 className='sub-title text-capitalize'>browse our <span>courses</span></h4>
					</div>
				</div>
				<Section1 />
			</>
		)
	}
}

export default Courses