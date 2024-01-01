import React from 'react'
import Card from './Card'
export default function Categories(props) {
  return (
    <div className="category">
        <h2>Categories</h2>
        <div className='boxes'>
        {
            props.categories.map((element)=>{
                return <Card {...element}></Card>
            })
        }
        </div> <br></br> <br></br> <br></br> <br></br> <br></br>
        <button className='addCatbutton'>Add Category</button>
    </div>
  )
}



