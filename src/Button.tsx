import {useState} from 'react';
import Clicker from "./Clicker.tsx";
import Popup from "./Popup.tsx";

const Button = ({text}) => {
    const [state, setState] = useState(false);
    const popupHandler = () => {
        setState(!state)
    }
    return (
        <>
            <button onClick={popupHandler}>{text}</button>
            <div>
                {state && <Popup />}

            </div>
        </>
    );
};

export default Button;