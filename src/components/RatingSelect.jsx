import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {

    const { feedbackEdit } = useContext(FeedbackContext);
    const [selected, setSelected] = useState(10);

    useEffect(() => {
        setSelected(feedbackEdit.item.rating);
    }, [feedbackEdit])

    const handleChange = ({ currentTarget: { value } }) => {
        select(+value);
        setSelected(+value);
    }

    return (
        <div className="rating-select">
            <ul className='rating'>
                {Array.from({ length: 10 }, (_, i) => (
                    <li key={`rating-${i + 1}`}>
                        <input
                            type='radio'
                            id={`num${i + 1}`}
                            name='rating'
                            value={i + 1}
                            onChange={handleChange}
                            checked={selected === i + 1}
                        />
                        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RatingSelect;