import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      phases: ['🫁 Inspire...', '😑 Segure...', '😮‍💨 Expire...'],
      phaseIndex: 0
    }
  }

  // inicializa a contagem
  componentDidMount() {
    const ONE_SECOND = 1000;
    this.intervalId = setInterval(() => {
      this.setState((prevState) =>({
        seconds: prevState.seconds + 1
      }))
    }, ONE_SECOND)
    console.log(this.intervalId);
  }

// manipula a contagem
  componentDidUpdate(_prevProps, prevState) {
    const TIME_LIMIT_IN_SECONDS = 5;
    const TWO = 2;
    const ZERO = 0;
    if (prevState.seconds === TIME_LIMIT_IN_SECONDS){
      this.setState({ seconds: 0,
      phaseIndex: prevState.phaseIndex === TWO ? ZERO : prevState.phaseIndex + 1
      })
    }
    // console.log(prevState.seconds);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState.seconds);
    console.log(nextState.phaseIndex);
    return true;
  }
  
  componentWillUnmount() {
    console.log('vou desmontar');
    clearInterval(this.intervalId)
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