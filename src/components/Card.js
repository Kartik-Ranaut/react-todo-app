import React from 'react'

export default function Card(props) {
  return (
    <div className='catagorybox' style={{background:props.color}}>{props.name}</div>
  )
}
