import React, { type JSX } from 'react'
import viteLogo from '/vite.svg'
import "./Card.css"

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src={viteLogo} className="logo" alt="Vite logo"></img>
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='infon'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sapiente, beatae asperiores laborum quas ipsa sint officia quos, provident ipsum dolorem voluptas nobis. Natus officiis doloribus odit reprehenderit numquam sit.</p>
    </div>
  )
}

export default Card