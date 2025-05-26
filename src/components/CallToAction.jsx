import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import usePageTransition from '../scripts/usePageTransition';
import { useNavigate } from 'react-router-dom';
function CallToAction() {
    const navigate = useNavigate()
    const { initiateTransition } = usePageTransition();



    const handleClick = (e) => {
        initiateTransition(() => {
        navigate('/rituals')    
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
        }, e);
    };

    return (
        <div className="cta" onClick={handleClick}>
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