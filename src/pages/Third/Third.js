import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/modules/third_page/actions';

import DraggableComponent from '../../components/DraggableComponent';

class Third extends Component {
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
        position: state.third.position,
        nameFigure: state.third.figure
    };
  }
  export default connect(
    mapStateProps,
    actions,
  )(Third);