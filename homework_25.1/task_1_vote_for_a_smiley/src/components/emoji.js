import React from "react"
import "./emoji.css";

class Emoji extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counters: [
                { id: 0, count: 0, value: "😃",},
                { id: 1, count: 0, value: "😊",},
                { id: 2, count: 0, value: "😎",},
                { id: 3, count: 0, value: "🤩",},
                { id: 4, count: 0, value: "😍",},
            ],
            max: null
        }
    }

    incrementCount = (id) => {
        const updatedCounters = this.state.counters.map(counter => {
          if (counter.id === id) {
            return { ...counter, count: counter.count + 1 };
          }
          return counter;
        });
        this.setState({ counters: updatedCounters });
        localStorage.setItem("vote", JSON.stringify(updatedCounters))
      };

      clearStorage = () => {
        const reset = this.state.counters.map(e => {
            return e.count = 0
        })
        this.setState({ counters: reset, max: null });
        this.render(this.incrementCount())
        localStorage.clear();
      }


      showResults = () => {
        const maxVotes = this.state.counters.reduce((acc, current) => {
          return current.count > acc.count ? current : acc;
        }, 
        this.state.counters[0]);
        this.setState({ max: maxVotes });
      };

      componentDidMount() {
        const savedVotes = JSON.parse(localStorage.getItem('vote')) || [];
        if (savedVotes.length > 0) {
            this.setState({ counters: savedVotes });
        }
    }

    render() {
        const { max } = this.state;
        return (
            <div>
                <div className="emoji d-flex justify-content-center gap-3">
                    {this.state.counters.map(counter => (
                        <div key={counter.id} className="d-flex gap-3">
                            <p>{counter.count}</p>
                            <p onClick={() => this.incrementCount(counter.id)}>{counter.value}</p>
                        </div>
                    ))}
                </div>
                <div className="button d-flex justify-content-center gap-3 mt-3">
                    <button className='btn btn-success rounded-pill p-3'onClick={this.showResults}>Показати результати</button>
                    <button className='btn btn-success rounded-pill p-3'onClick={this.clearStorage}>Очистити результати</button>
                </div>
                {max && (
                    <div className="result d-flex flex-column align-items-center mt-4">
                        <h1>Результати голосування:</h1>
                        <h3>Переможець:</h3>
                        <p className="emoji">{max.value}</p>
                        <p>Кількімть голосів: {max.count}</p>
                    </div>
                    )}
            </div>
        )
    }
}

export default Emoji;