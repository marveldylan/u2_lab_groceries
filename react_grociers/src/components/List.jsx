import { useState, useEffect } from 'react'

const List = (props) => {

    const [ removedItem, setItem ] = useState('')

    useEffect = (() => {

    },[removedItem])

    const removeItem = (index) => {
        console.log(props.groceries[index])
        props.groceries[index].isPurchased = false;
        setItem(props.groceries[index].item)
    }

    return(
        <div>
            <div>

            </div>
            {
            props.groceries.map((grocery, index) => (
                grocery.isPurchased ?
                <div key={index}>
                    <h1>{ grocery.item }</h1>
                    <h2>{ grocery.brand }</h2>
                    <h3>{ grocery.units }</h3>
                    <button onClick={ () => removeItem(index)} >Remove</button>
                </div>
                : null
            ))}
        </div>
    )
}

export default List