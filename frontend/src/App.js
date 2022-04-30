import Navbar from "./components/Navbar";


export default function App(){


    function handleChange(e){
        const {name,value} = e.target;
        console.log(value)
    }


    return(
        <h1>
            <Navbar />
            <div className="container">Bleh</div>
        </h1>
    );
}