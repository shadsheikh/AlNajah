import React, { Component } from 'react'
import { section1 } from './Data'
import './Section1.css'

class Section1 extends Component {
	display_section1 = _ => {
		let items = section1.map((item, index) => {
			return (
				<div className='b mb-5 text-center p-3 shadow rounded mx-2' key={index}>
					<img className='img-fluid mb-3' src={item.img} alt='cource' />
					<p className='title'>{item.name}</p>
				</div>
			)
		})
		return items
	}

	render() {
		return (
			<div className='s1 py-5'>
				<div className='container'>
					<div className='d d-flex flex-wrap justify-content-center'>
						{this.display_section1()}
					</div>
				</div>
			</div>
		)
	}
}

export default Section1