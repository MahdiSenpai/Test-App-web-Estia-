import type { Signal } from "@preact/signals";
import { useContext, useEffect } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { HomeContext  } from "../context/HomeContext.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  const { state, setState } = useContext(HomeContext);
    function toggleState()
    {
        console.log("haya");
        if (state=="initial value")
        {
            setState("not initial value");
        }
        else
        {
            setState("initial value");
        }
    }
  return (
    <div class="flex gap-8 py-6">

      <h2>le state = {state} =</h2>
      {state=="initial value"? <h3>egale</h3>: <h3>plus egale</h3>}
      <button  onClick = { () => toggleState() }>bouttuunn</button>



      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
