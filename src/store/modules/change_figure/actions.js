import { 
    CHANGE_FIRST_FIGURE,
    CHANGE_SECOND_FIGURE,
    CHANGE_THIRD_FIGURE,
} from './types';

import {
    BOARD_1,
    BOARD_2,
    BOARD_3,
  } from '../../../pages/routes';

export const changeFigureAction = (figure, board) => dispatch => {
    if ( board === BOARD_1 ) {
        dispatch({
            type: CHANGE_FIRST_FIGURE,
            figure
        })
    } else if ( board === BOARD_2 ) {
        dispatch({
            type: CHANGE_SECOND_FIGURE,
            figure
        })
    } else if (board === BOARD_3 ) {
        dispatch({
            type: CHANGE_THIRD_FIGURE,
            figure
        })
    }
    
}