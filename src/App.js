import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import NavMenu from "./NavMenu/NavMenu";

function App() {
    return (
        <div className="App">

            <div className="DivHeader">
                <Header/>
            </div>

            <div className="DivMain">
                <div className="DivMenu">
                    <NavMenu/>
                </div>
                <hr/>
                <div className="DivBody">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, assumenda consequuntur dignissimos
                        distinctio, ea eligendi laboriosam minus necessitatibus neque odit saepe sint suscipit, tempora
                        vero.</p>
                </div>
            </div>


            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}

        </div>

    );
}

export default App;
