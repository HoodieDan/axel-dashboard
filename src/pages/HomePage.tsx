import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/slices/counter';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const counter = useSelector((state: any ) => state?.counter?.value);
    console.log(counter)

    const handleIncrement = () => {
        dispatch(increment())
    }

    return (
        <div>
            <h1>Welcome to Engage-X</h1>
            <p>This is the home page of the Engage-X project.</p>
            <p>{ counter }</p>
            <button onClick={handleIncrement}>increase</button>
        </div>
    );
};

export default HomePage;