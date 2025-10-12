import React from 'react'

const ContainerItem = ({item}) => {
  return (
    <div className='container-item-description'>
        {item?.description}
    </div>
  )
}

export default ContainerItem