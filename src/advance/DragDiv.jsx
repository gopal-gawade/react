import React, { useState } from 'react';

const DragDiv = () => {
    const [dragging, setDragging] = useState(null);
    const [columns, setColumns] = useState({
        todo: ['Todo 1', 'Todo 2'],
        inProgress: ['Progress'],
        done: ['Completed'],
    });

    const handleDrag = (task, columnId) => {
        setDragging({ task, columnId });
    };

    const handleOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (targetColumnId) => {
        if (!targetColumnId || !dragging) return;
        if (targetColumnId === dragging.columnId) return;

        setColumns((prev) => {
            const sourceItems = prev[dragging.columnId].filter(
                (t) => t !== dragging.task
            );
            const targetItems = [...prev[targetColumnId], dragging.task];

            return {
                ...prev,
                [dragging.columnId]: sourceItems,
                [targetColumnId]: targetItems,
            };
        });

        setDragging(null);
    };

    return (
        <div>
            <h3>Drag Div</h3>

            <div className="grid-lg-3">
                {Object.entries(columns).map(([columnId, tasks]) => (
                    <div
                        key={columnId}
                        onDragOver={handleOver}
                        onDrop={() => handleDrop(columnId)}
                        style={{
                            minHeight: '150px',
                            padding: '10px',
                            border: '1px solid gray',
                            margin: '10px',
                        }}
                    >
                        <p>{columnId}</p>
                        <hr />
                        {tasks.map((task, index) => (
                            <div
                                key={index}
                                draggable
                                style={{ background: 'aliceblue', margin: '10px', padding: '5px' }}
                                onDragStart={() => handleDrag(task, columnId)}
                            >
                                {task}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragDiv;
