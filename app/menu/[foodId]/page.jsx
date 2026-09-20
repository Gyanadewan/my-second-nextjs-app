

const  FoodDetailsPage = async ({params}) => {
     const { foodId } = await params
     const res = await fetch (`https:phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
     const data =  await res.json()
     const {category,dish_name,price } = data.data  
  return (

    <div className="border border-amber-200 p-3">
         <h1>{category}</h1>
         <h3>{dish_name}</h3>
         <p>{price}</p>
    </div>
  )
}

export default FoodDetailsPage
