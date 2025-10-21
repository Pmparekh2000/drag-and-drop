import React from 'react'
import ContainerItem from './ContainerItem'

const Container = ({container}) => {
    console.log(container);
    
  return (
    <div className='container'>
        <h2>{container?.title}</h2>
        {
            container?.items?.map((item) => {
                return (
                    <ContainerItem key={item.id} item={item} />
                )
            })
        }
    </div>
  )
}

export default Container