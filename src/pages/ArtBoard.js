import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../store/modules/change_figure/actions';

const figures = [
    'square',
    'circle',
    'oval',
    'triangle',
]
class ArtBoard extends Component {

    handleChooseFigure = (figure) => {
        const { changeFigureAction, location } = this.props;
        changeFigureAction(figure, location);
    }
    render() {
      return (
        <div className='main__art-board'>
            {figures.map((el, index) => (
                <div
                    key={index}
                    className={`main__art-board__item ${el}`}
                    onClick={() => this.handleChooseFigure(el)}
                ></div>
            ))}
        </div>
      );
    }
  }
  
  function mapStateProps(state) {
    return {
        location: state.router.location.pathname,
    };
  }
  export default connect(
    mapStateProps,
    actions,
  )(ArtBoard);