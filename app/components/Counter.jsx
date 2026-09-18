
import { useState } from "react"
function Counter() {
  const [count, setCount] = useState(0)
  const hanlderBtn = () => {
   setCount (count + 1)
  }
  return (
    <div>
        <h2>Counter:{count}</h2>
         <button onClick={hanlderBtn} className="rounded-xl px-3 py-1 bg-blue-500">incress Button!</button>
    </div>
  )
}

export default Counter
