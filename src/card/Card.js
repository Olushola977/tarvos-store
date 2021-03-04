
import './Card.css';

/**
 * Card Component
 */

function Card({children, bgColor}) {
    return (
            <div style={{backgroundColor:bgColor}}>
                {children}
            </div>
    )
}

export default Card;