/*
 * URL AMIGÁVEL
 */


const urlPath = window.location.pathname;
const urlSegments = urlPath.split("/").filter(segment => segment !== "");// Divide a URL pelos "/" e remove elementos vazios
console.log("URL Segmentada:", urlSegments);// Exibe os segmentos no console



const App = (props) => {

    return (
        <div>
            <h1>Olá, React Puro!</h1>
            {props.component.map((index) => {
                return <Componente text="Este é um componente safado do React! purista baby" id={index} key={index}/>
            })}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App component={[1, 2]}/>);

