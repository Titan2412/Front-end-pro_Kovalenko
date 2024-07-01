import React, { useState} from "react";
import "./emoji.css";


const countersValue = [
    { id: 0, count: 0, value: "😃",},
    { id: 1, count: 0, value: "😊",},
    { id: 2, count: 0, value: "😎",},
    { id: 3, count: 0, value: "🤩",},
    { id: 4, count: 0, value: "😍",},
]

const Emoji = () => {
    const [counters, setCounters] = useState(countersValue);
    const [maxVote, setMaxVote] = useState(null);

    const count = (id) => {
        const updatedCounters = counters.map((counter) => {
            if (counter.id === id) {
                return { ...counter, count: counter.count + 1 };
            }
            return counter;
        });
        setCounters(updatedCounters);
        localStorage.setItem("vote", JSON.stringify(updatedCounters));
    };
    
    const clearStorage = () => {
        const reset = counters.map((counter) => ({
            ...counter,
            count: 0,
        }));
        setCounters(reset);
        setMaxVote(null);
        localStorage.clear();
    };
    
    const showResults = () => {
        const maxVotes = counters.reduce((acc, current) => {
            return current.count > acc.count ? current : acc;
        }, counters[0]);
        setMaxVote(maxVotes);
    };
    return (
        <div>
            <div className="emoji d-flex justify-content-center gap-3">
                {counters.map(counter => (
                    <div key={counter.id} className="d-flex gap-3">
                        <p>{counter.count}</p>
                        <p onClick={() =>count(counter.id)}>{counter.value}</p>
                    </div>
                ))}
            </div>
            <div className="button d-flex justify-content-center gap-3 mt-3">
                <button className='btn btn-success rounded-pill p-3'onClick={showResults}>Показати результати</button>
                <button className='btn btn-success rounded-pill p-3'onClick={clearStorage}>Очистити результати</button>
            </div>
            {maxVote && (
                <div className="result d-flex flex-column align-items-center mt-4">
                    <h1>Результати голосування:</h1>
                    <h3>Переможець:</h3>
                    <p className="emoji">{maxVote.value}</p>
                    <p>Кількімть голосів: {maxVote.count}</p>
                </div>
                )}
        </div>
    )
}

export default Emoji;