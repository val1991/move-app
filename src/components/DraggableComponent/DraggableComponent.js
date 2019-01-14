import React, { Component } from 'react';

import Draggable from 'react-draggable'; 

class DraggableComponent extends Component {
    handleDrag = (e, ui) => {
    const {x, y} = this.props.position;
    const { changePositionAction } = this.props;
    const data = {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
    };
    changePositionAction(data)
    }

    render() {
        const { position } = this.props;
        const { nameFigure } = this.props;
        return (
          <Draggable
            position={position}
            onDrag={this.handleDrag}
            bounds="parent"
          >
            <div className={nameFigure}>
            </div>
          </Draggable>
        );
      }
  }
  
  export default DraggableComponent;