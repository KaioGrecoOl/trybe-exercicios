import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      phases: ['🫁 Inspire...', '😑 Segure...', '😮‍💨 Expire...'],
      phaseIndex: 2
    }
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    setInterval(() => {
      this.setState((prevState) =>({
        seconds: prevState.seconds + 1
      }))
    }, ONE_SECOND)
  }

  render() {
    const { seconds, phaseIndex, phases } = this.state;
    return (
      <section>
        <h2>{phases[phaseIndex]}</h2>
        <h2>{seconds}</h2>
      </section>
    );
  }
}

export default Timer;