import '../style/App.css';
import {Message} from './Message' ;

export function App(props) {
  return (
    <div className="App" >
      <header className="App-header" style={{border: '20px double black'}}>
        My first React App
        <Message />
      </header>
    </div>
  );
}