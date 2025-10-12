import React, { useRef } from 'react'

const ContainerItem = ({item, title, dragItem, setDragItem, dragContainer, setDragContainer}) => {

    const handleDragStart = (e, item, title) => {
        // dragItem.current = item;
        // dragContainer.current = title;
        setDragItem(item);
        setDragContainer(title);
        // console.log("Handle drag start", item, title);
        
        e.target.style.opacity = "0.5";
    };
    const handleDragEnd = (e) => {
        e.target.style.opacity = "1";
    }
  return (
    <div
        draggable
        onDragStart={(e) => handleDragStart(e, item, title)}
        onDragEnd={handleDragEnd}
        className='container-item-description'
    >
        {item?.description}
    </div>
  )
}

export default ContainerItem