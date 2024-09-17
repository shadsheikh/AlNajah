import './Materials.css'
import { categories } from './Data'

const Materials = () => {

	const display_categories = () => {
		return categories.map((item, index) => (
			<div className='c col-12 col-lg-2 col-md-3 text-center' key={Math.random()}>
				<div className={`i item${index} rounded mb-lg-0 mb-5`}>
					<img className='img mb-4' src={item.img} alt={item.name} />
					<h5 className='sub-title text-capitalize'>{item.name}</h5>
				</div>
			</div>
		))
	}

	return (
		<div className='materials py-5 my-5' id='materials'>
			<div className='container'>
				<div className='title py-5 text-center'>
					<h4 className='sub-title text-capitalize'>our <span>materials</span></h4>
				</div>
				<div className='row justify-content-lg-between justify-content-center'>
					{display_categories()}
				</div>
			</div>
		</div>
	)
}

export default Materials
