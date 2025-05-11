import {useState} from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);


    function countUp() {
        setCounter()

        return (
            <div className="counter">
                Der aktuelle Wert ist: {counter}
                <button onClick={countUp}>Count up</button>
                </div>
        );
    }
}

