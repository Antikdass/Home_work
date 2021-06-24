import './CharactersComponent.css';
function CharactersComponent(props) {
 return   <div className="App">
     <img src={props.img} alt=""/>
     <p>
         {props.text}
     </p>
    </div>
}export default CharactersComponent;