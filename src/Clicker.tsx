import {useState} from 'react';

const Clicker = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>+</button>
        </div>
    );
};

export default Clicker;