import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <h1>statistics</h1>
            {
                (good + neutral + bad) === 0 ?
                    <p>No feedback given</p>
                    :
                    <>
                        <StatisticLine text={"good"} value={`${good}`} />
                        <StatisticLine text={"neutral"} value={`${neutral}`} />
                        <StatisticLine text={"bad"} value={`${bad}`} />
                        <StatisticLine text={"all"} value={`${good + neutral + bad}`} />
                        <StatisticLine text={"average"} value={`${(good - bad) / (good + neutral + bad)}`} />
                        <StatisticLine text={"positive"} value={`${(good * 100) / (good + neutral + bad)} %`} />
                    </>
            }
        </div>
    )
}

export default Statistics;
  