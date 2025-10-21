import React, { useRef, useState } from "react";

const DragAndDrop = ({ initialData = {} }) => {
  const [data, setData] = useState(initialData);
  const dragItemRef = useRef(null);
  const dragContainerRef = useRef(null);

  const handleDragStart = (e, item, sourceContainer) => {
    e.target.style.opacity = "0.5";
    dragItemRef.current = item;
    dragContainerRef.current = sourceContainer;
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (destinationContainer) => {
    const movedItem = dragItemRef.current;
    const sourceContainer = dragContainerRef.current;
    setData((prevData) => {
      const copyPrevData = { ...prevData };
      copyPrevData[sourceContainer] = copyPrevData[sourceContainer]?.filter(
        (item) => item?.id !== movedItem?.id
      );
      copyPrevData[destinationContainer] = [
        ...copyPrevData[destinationContainer],
        movedItem,
      ];
      return copyPrevData;
    });
  };

  return (
    <div className="drag-and-drop-container">
      {Object.keys(data)?.map((container) => {
        return (
          <div
            key={container}
            className="single-container"
            onDrop={() => handleDrop(container)}
            onDragOver={handleDragOver}
          >
            <h2>{container}</h2>
            <div>
              {data[container]?.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="item"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item, container)}
                    onDragEnd={(e) => handleDragEnd(e)}
                  >
                    {item?.title}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DragAndDrop;
