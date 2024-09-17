import { useState, useEffect } from 'react'
import './Sb.css'

const Sb = () => {
    const [s, setS] = useState(false)

    const check_scroll = () => {
        (window.scrollY >= 200) ? setS(true) : setS(false)
    }

    const handle_click = () => {
        window.scroll(0, 0)
    }

    useEffect(() => {
        const handleScroll = () => {
            check_scroll()
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('DOMContentLoaded', check_scroll)

        // Cleanup function to remove the event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('DOMContentLoaded', check_scroll)
        }
    }, [])

    return (
        <button className={`btn custom-btn rounded-circle btn-sm position-fixed ${s ? 'd-block' : 'd-none'}`} id='btn-up' onClick={handle_click}>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
}

export default Sb
