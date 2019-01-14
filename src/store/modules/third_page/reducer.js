import { 
    CHANGE_THIRD_POSITION,
} from './types';

import {
    CHANGE_THIRD_FIGURE,
} from '../change_figure/types';

const initialState = {
    figure: 'oval',
    position: {
        x: 0,
        y: 0,
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THIRD_FIGURE:
            return {
                ...state,
                figure: action.figure
            }
        case CHANGE_THIRD_POSITION:
            return {
                ...state,
                position: action.position,
            }
        default:
            return state;
    }
}