import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/modules/second_page/actions';

import DraggableComponent from '../../components/DraggableComponent';

class Second extends Component {
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
      const { 
        position,
        changePositionAction,
        nameFigure,
      } = this.props;
      return (
        <DraggableComponent
          position={position}
          nameFigure={nameFigure}
          changePositionAction={changePositionAction}
        />
      );
    }
  }
  
  function mapStateProps(state) {
    return {
        position: state.second.position,
        nameFigure: state.second.figure
    };
  }
  export default connect(
    mapStateProps,
    actions,
  )(Second);