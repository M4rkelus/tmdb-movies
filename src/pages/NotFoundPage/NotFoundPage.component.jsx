import { useNavigate } from 'react-router-dom';
import './NotFoundPage.styles.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className='not-found-container'>
      <h1>404 Not Found</h1>
      <button className='back-button' onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
