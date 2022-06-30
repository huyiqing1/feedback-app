import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";

const FeedbackForm = ({ handleAdd }) => {

    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);

    const handleTextChange = ({ target: { value } }) => {
        if (value === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (value !== "" && value.trim().length < 10) {
            setMessage("Text must be at least 10 characters.")
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback);
            setText("");
        }
    }

    return (
        <div className="feedback-form">
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rate) => setRating(rate)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <Button type="submit" isDisabled={btnDisabled} >Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
}

export default FeedbackForm;