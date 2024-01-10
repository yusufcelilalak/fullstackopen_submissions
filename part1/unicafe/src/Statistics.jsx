const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <h1>statistics</h1>
            {
                (good + neutral + bad) === 0 ?
                    <p>No feedback given</p>
                    :
                    <>
                        <p>good {good}</p>
                        <p>neutral {neutral}</p>
                        <p>bad {bad}</p>
                        <p>all {good + neutral + bad}</p>
                        <p>average {(good - bad) / (good + neutral + bad)}</p>
                        <p>positive {(good * 100) / (good + neutral + bad)} %</p>
                    </>
            }
        </div>
    )
}

export default Statistics;
  