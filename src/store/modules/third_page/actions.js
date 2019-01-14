import { 
    CHANGE_THIRD_POSITION,
} from './types';

export const changePositionAction = (data) => dispatch => {
    const newPosition = {
        x: data.x,
        y: data.y,
    }
    dispatch({
        type: CHANGE_THIRD_POSITION,
        position: newPosition,
    })
}