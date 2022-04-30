import InputBox from "./components/InputBox";
import Navbar from "./components/Navbar";


export default function App(){


    function handleChange(e){
        const {name,value} = e.target;
        console.log(value)
    }


    return(
        <h1>
            <Navbar />
            <InputBox />
        </h1>
    );
}