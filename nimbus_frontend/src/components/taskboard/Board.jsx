

// import { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import { v4 as uuidv4 } from 'uuid';
// import Column from './Column';

// // Column definitions
// const columns = [
//   { id: 'backlog', title: 'Backlog' },
//   { id: 'todo', title: 'Todo' },
//   { id: 'inProgress', title: 'In Progress' },
//   { id: 'done', title: 'Done' },
//   { id: 'cancelled', title: 'Cancelled' },
// ];

// // Initial dummy items (optional)
// const initialItems = [
//   {
//     id: uuidv4(),
//     title: 'Welcome to Plane 👋',
//     columnId: 'inProgress',
//   },
// ];

// const Board = () => {
//   const [workItems, setWorkItems] = useState(initialItems);

//   // 🔁 Handle Drag-and-Drop
//   const onDragEnd = (result) => {
//     const { source, destination, draggableId } = result;
//     if (!destination) return;

//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     )
//       return;

//     setWorkItems(prev =>
//       prev.map(item =>
//         item.id === draggableId
//           ? { ...item, columnId: destination.droppableId }
//           : item
//       )
//     );
//   };

//   // ➕ Add New Work Item
//   const addWorkItem = (columnId) => {
//     const title = prompt('Enter work item title');
//     if (!title) return;
//     const newItem = {
//       id: uuidv4(),
//       title,
//       columnId,
//     };
//     setWorkItems(prev => [...prev, newItem]);
//   };

//   // ❌ Delete Work Item
//   const deleteWorkItem = (id) => {
//     setWorkItems(prev => prev.filter(item => item.id !== id));
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="flex gap-4 overflow-x-auto p-4">
//         {columns.map(col => {
//           const items = workItems.filter(item => item.columnId === col.id);

//           return (
//             <Droppable key={col.id} droppableId={col.id}>
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   className="bg-gray-900 p-4 rounded-xl min-w-[250px] w-64 flex flex-col"
//                 >
//                   <h2 className="text-lg font-bold mb-2 text-white flex justify-between items-center">
//                     {col.title} <span className="text-sm text-gray-400">({items.length})</span>
//                   </h2>

//                   <div className="flex flex-col gap-3 flex-1">
//                     {items.map((item, index) => (
//                       <Draggable key={item.id} draggableId={item.id} index={index}>
//                         {(provided) => (
//                           <div
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                           >
//                             <Column.ItemCard item={item} onDelete={deleteWorkItem} />
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>

//                   <button
//                     onClick={() => addWorkItem(col.id)}
//                     className="mt-3 text-sm text-blue-400 hover:underline"
//                   >
//                     + New Work Item
//                   </button>
//                 </div>
//               )}
//             </Droppable>
//           );
//         })}
//       </div>
//     </DragDropContext>
//   );
// };

// export default Board;


import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { v4 as uuidv4 } from 'uuid';
import Column from './Column';
import AddWorkItemModal from './AddWorkItemModal';

const columns = [
  { id: 'backlog', title: 'Backlog' },
  { id: 'todo', title: 'Todo' },
  { id: 'inProgress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
  { id: 'cancelled', title: 'Cancelled' },
];

const initialItems = [];

const Board = () => {
  const [workItems, setWorkItems] = useState(initialItems);
  const [activeColumn, setActiveColumn] = useState(null); // For modal state

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    setWorkItems(prev =>
      prev.map(item =>
        item.id === draggableId
          ? { ...item, columnId: destination.droppableId }
          : item
      )
    );
  };

  const handleAddItem = (title) => {
    const newItem = {
      id: uuidv4(),
      title,
      columnId: activeColumn,
    };
    setWorkItems(prev => [...prev, newItem]);
  };

  const handleDeleteItem = (id) => {
    setWorkItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto p-4">
          {columns.map(col => {
            const items = workItems.filter(item => item.columnId === col.id);

            return (
              <Droppable key={col.id} droppableId={col.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-gray-900 p-4 rounded-xl min-w-[250px] w-64 flex flex-col"
                  >
                    <h2 className="text-lg font-bold mb-2 text-white flex justify-between items-center">
                      {col.title}{' '}
                      <span className="text-sm text-gray-400">({items.length})</span>
                    </h2>

                    <div className="flex flex-col gap-3 flex-1">
                      {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Column.ItemCard item={item} onDelete={handleDeleteItem} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>

                    <button
                      onClick={() => setActiveColumn(col.id)}
                      className="mt-3 text-sm text-blue-400 hover:underline"
                    >
                      + New Work Item
                    </button>
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>

      {/* 🔥 Popup Modal */}
      <AddWorkItemModal
        isOpen={!!activeColumn}
        columnId={activeColumn}
        onClose={() => setActiveColumn(null)}
        onAdd={handleAddItem}
      />
    </>
  );
};

export default Board;
