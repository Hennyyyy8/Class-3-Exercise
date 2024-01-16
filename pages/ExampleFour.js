import { useEffect , useState } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ExampleFour() {


    const [number, setNumber] = useState(0); // initially starts as the number 0
// number is a variable on the left side that is used t display or grab value from useState
// setNumber is used to update the useState
    const [color, setColor] = useState("gray"); 

    const [trigger, setTrigger] = useState(false); //defaults as boolean false

    const HandleChange = () => {
        if(number > 2) {
            setColor("orange");
            // setText("");
        }
    console.log(number);
}

    useEffect(() => {
        var interval;
    
    if(trigger) {
        interval = setInterval(() => {
            HandleChange()
            setTrigger(false);
        }, 3000) // after 3 seconds then it will do the console log below
    }
        
    
    console.log(number);
    console.log(trigger);

    return () => clearInterval(interval); // clearing the interval so it doesnt get stuck in a loop
    }, [trigger])

    return(
        <>
        <Header/>
        <main>
             <button onCLick={() => {
                setNumber(number + 1)
                setTrigger(true)
             }}>Add Number</button>
            <h1 style={{color: color}}>Changing the text color</h1>
           
            {
                number > 1 && <div style={{
                    backgroundColor: `${color}`,
                    lineHeight: 10,
                    padding: 20
                }}>
                    Box
                </div>
             }
        </main>
        <Footer/>
        </>
    )
}