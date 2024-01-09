import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part partName={props.parts[0].partName} exerciseNumber={props.parts[0].exerciseNumber}/>
            <Part partName={props.parts[1].partName} exerciseNumber={props.parts[1].exerciseNumber}/>
            <Part partName={props.parts[2].partName} exerciseNumber={props.parts[2].exerciseNumber}/>
        </div>
    );
}
  
export default Content;