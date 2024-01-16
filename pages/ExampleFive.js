import { useEffect , useState } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ExampleFive() {

// we want to setup a counter
// after every one second the number increases by 1
// we want to display that number on screen as it increases
// no button is needed it will update automatically

const [count, setCount] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1);
    }, 1000)
    return () => clearInterval(interval);
}, [count])

    return(
        <>
        <Header/>
            <div>
                <h1>Number Counter</h1>
                <h3>Example using Interval</h3>
                <div>{count}</div>
            </div>
        <Footer/>
        </>

    )
}