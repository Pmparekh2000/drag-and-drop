import React, { useState } from 'react'
import ContainerItem from './ContainerItem'

const Container = ({container, setData, data}) => {
    const [dragItem, setDragItem] = useState(null);
    const [dragContainer, setDragContainer] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e, targetContainer) => {
        const item = dragItem;
        const sourceContainer = dragContainer;
        let sourceContainerIndex = 0;
        let sourceContainerItemId = 0;
        let targetContainerIndex = 0;
        setData((prevValue) => {
            const entireContainerDataCopy = [...prevValue];
            for (let i = 0; i < entireContainerDataCopy.length; i++) {
                if (entireContainerDataCopy[i].title === sourceContainer) {
                    sourceContainerIndex = i;
                    break;
                }
            }
            console.log("Getting source container index as", item, sourceContainer);
            
            for (let i = 0; i < prevValue[sourceContainerIndex].items.length; i++) {
                if (prevValue[sourceContainerIndex].items[i].id === item.id) {
                    sourceContainerItemId = i;
                    break;
                }
            }
            let sourceContainerItemCopy = [...entireContainerDataCopy[sourceContainerIndex].items];
            sourceContainerItemCopy = [...sourceContainerItemCopy.slice(0, sourceContainerItemId), ...sourceContainerItemCopy.slice(sourceContainerItemId + 1)];
            entireContainerDataCopy[sourceContainerIndex].items = sourceContainerItemCopy;

            for (let i = 0; i < entireContainerDataCopy.length; i++) {
                if (entireContainerDataCopy[i].title === targetContainer) {
                    targetContainerIndex = i;
                    break;
                }
            }
            let targetContainerItemCopy = [...entireContainerDataCopy[targetContainerIndex].items, targetContainer];
            entireContainerDataCopy[targetContainerIndex].items = targetContainerItemCopy;
            return entireContainerDataCopy;
        });
        console.log("Calling handleDrop");
        
    };
  return (
    <div className='container' onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, container?.title)}>
        <h2>{container?.title}</h2>
        {
            container?.items?.map((item) => {
                return (
                    <ContainerItem
                        key={item.id}
                        item={item}
                        title={container?.title}
                        dragItem={dragItem}
                        setDragItem={setDragItem}
                        dragContainer={dragContainer}
                        setDragContainer={setDragContainer}
                    />
                )
            })
        }
    </div>
  )
}

export default Container