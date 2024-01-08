
const Content = (props) => {
    return (
        <>
            <p>
                {props.parts[0].partName} {props.parts[0].exerciseNumber}
            </p>
            <p>
                {props.parts[1].partName} {props.parts[1].exerciseNumber}
            </p>
            <p>
                {props.parts[2].partName} {props.parts[2].exerciseNumber}
            </p>
        </>
    );
}
  
export default Content;