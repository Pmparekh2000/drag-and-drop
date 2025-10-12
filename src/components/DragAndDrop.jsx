import React, { useState } from 'react'
import Container from './Container';

const DragAndDrop = ({containersData}) => {
    const [data, setData] = useState(containersData);
    console.log(data);
    
  return (
    <div className='drag-and-drop-container'>
        {
            data?.map((container) => {
                return (<Container key={container?.title} container={container} setData={setData} data={data}/>);
            })
        }
    </div>
  )
}

export default DragAndDrop;
