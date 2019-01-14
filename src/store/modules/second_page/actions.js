import { 
    CHANGE_SECOND_POSITION,
} from './types';

export const changePositionAction = (data) => dispatch => {
    const newPosition = {
        x: data.x,
        y: data.y,
    }
    dispatch({
        type: CHANGE_SECOND_POSITION,
        position: newPosition,
    })
}