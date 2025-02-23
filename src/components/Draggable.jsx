import * as React from 'react';
import styled from './styled';

const DraggableContainer = styled('div')`
    cursor: grab;
    user-select: none;
    touch-action: none;
    
    &:active {
        cursor: grabbing;
    }
`;

const Draggable = ({ children, onDrag, className }) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const elementRef = React.useRef(null);
    const startPosRef = React.useRef({ x: 0, y: 0 });

    const handleMouseDown = React.useCallback((e) => {
        setIsDragging(true);
        startPosRef.current = {
            x: e.clientX,
            y: e.clientY
        };
    }, []);

    const handleMouseMove = React.useCallback((e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startPosRef.current.x;
        const deltaY = e.clientY - startPosRef.current.y;
        
        if (onDrag) {
            onDrag({ x: deltaX, y: deltaY });
        }
        
        startPosRef.current = {
            x: e.clientX,
            y: e.clientY
        };
    }, [isDragging, onDrag]);

    const handleMouseUp = React.useCallback(() => {
        setIsDragging(false);
    }, []);

    React.useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    return (
        <DraggableContainer
            ref={elementRef}
            onMouseDown={handleMouseDown}
            className={className}
        >
            {children}
        </DraggableContainer>
    );
};

export default React.memo(Draggable);
