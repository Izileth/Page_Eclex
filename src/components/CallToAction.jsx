import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function CallToAction() {
    return (
        <div className="cta">
            <div className="cta-label">
                <p>View All Products</p>
            </div>
            <div className="cta-icon">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    );
}

export default CallToAction;