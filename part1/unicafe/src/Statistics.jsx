const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average {(good - bad ) === 0 ? 0 : (good - bad) / (good + neutral + bad)}</p>
            <p>positive {(good + neutral + bad ) === 0 ? 0 : (good * 100) / (good + neutral + bad)} %</p>
        </div>
    )
}

export default Statistics;
  