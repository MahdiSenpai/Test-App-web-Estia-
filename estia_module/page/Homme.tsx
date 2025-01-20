import { useContext, useEffect } from "preact/hooks";
import { HomeContext  } from "../context/HomeContext.ts";

export default function Homme()
{
    console.log("State has been updated to:");
    const { state, setState } = useContext(HomeContext);
    useEffect(() => {
        console.log("State has been updated to:");
    }, []); 

    setState("not initial value");
    function toggleState()
    {
        console.log("haya");
        if (state=="initial value")
        {
            setState("not initial value");
        }
        else
        {
            setState("not initial value");
        }
    }

    return(      
    <div>
        <h1>Ceci est la page homme (link / )</h1>
        <h2>le context = {state} =</h2>
        <a href="/page1">go page1</a>
        <h2>TESTE</h2>
        {state=="initial value"? <h3>egale</h3>: <h3>plus egale</h3>}
        <button type="button" onClick={()=>(console.log("hayaaaa"))}>bouttoonn</button>
        
    </div>
    )
}
