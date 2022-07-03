import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <div className="feedback-item">
            <div className="num-display">{item.rating}</div>
            <button onClick={() => editFeedback(item)} className="edit" ><FaEdit color='purple' /></button>
            <button onClick={() => deleteFeedback(item.id)} className="close"><FaTimes color='purple' /></button>
            <div className="text-display">{item.text}</div>
        </div>
    );
}

export default FeedbackItem;