"use client"

import Counter from "../components/Counter"
function DashBoardPage() {
  return (
    <div>
       <h2 className="text-2xl text-yellow-200">DashBoard Page</h2>
         <Counter></Counter>
        <ul>
            <li>Dashbaord item1</li>
            <li>Dashbaord item2</li>
            <li>Dashbaord item3</li>
         </ul>
    </div>
  )
}

export default DashBoardPage
