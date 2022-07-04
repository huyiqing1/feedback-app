import spinner from "../assets/spinner.gif";

const Spinner = () => {
    return (
        <img className="spinner" src={spinner} alt="Loading..." style={{ width: '100px', margin: 'auto', display: 'block' }} />
    );
}

export default Spinner;