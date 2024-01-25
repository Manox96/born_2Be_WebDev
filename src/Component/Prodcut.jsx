import React, { useState } from 'react'


function Prodcut() {
    const [prod , SetProd] = useState([
        {
            "id":1,
            "name" : "iphone 12",
            "type":"mobile",
            "price":4000
        },
        {
            "id":2,
            "name" : "iphone 14",
            "type":"mobile",
            "price":5200
        },
        {
            "id":2,
            "name" : "iphone 6",
            "type":"mobile",
            "price":1500
        },
        {
            "id":3,
            "name" : "iphone 13",
            "type":"mobile",
            "price":4100
        },
        {
            "id":4,
            "name" : "macBookPro 2019",
            "type":"laptop",
            "price":10000
        },
        {
            "id":5,
            "name" : "lenovo thinkpad",
            "type":"laptop",
            "price":3500
        },
        {
            "id":6,
            "name" : "asus",
            "type":"laptop",
            "price":8000
        },
        {
            "id":7,
            "name" : "case iphone 11",
            "type":"accesoire",
            "price":30
        },
        {
            "id":8,
            "name" : "chargeur macBookPro",
            "type":"accesoire",
            "price":1000
        },
    ])

    let countPrd = () =>
    {
        var c = 0;
        while (prod[c])
            c++;
        return c;
    }
  return (
    <div>
            <h3 className='text-center bold p-1 bg-info'> u have {countPrd()} Product </h3>
            {prod && prod.map(e =>
            (
                <div  className="card border-warning  mb-3 w-25 p-3 m-3 d-inline-flex  position-relative" key={e.id}>
                    <h4 className="card-title bg-primary rounded-1 text-center">{e.name}</h4>
                    <div className="card-body">
                        <p> {e.price} <span className='bg-success'>MAD</span></p>
                        <p className='badge bg-primary'>type {e.type}</p>
                        <p className="card-text border border-warning p-1 rounded-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-warning p-2"><span class="visually-hidden">unread messages</span></span>
                    </div>
                </div>
            ))
            }
            <div className=' d-flex m-2 justify-content-center'>
                <button className='btn btn-warning'>click me</button>
            </div>
    </div>
  )
}

export default Prodcut