import React from 'react'
import Part from './part'

const Content = ({parts}) => {

    return (
        <div>
            {parts.map((item,id) => (<Part part={item.name} exercises={item.exercises} key={item.id} />))}
        </div>
    )
}
export default Content