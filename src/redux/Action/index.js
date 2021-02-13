import {
    CLEAR_DATA,
    LOADER,
} from './types';

export const LoaderAction = payload => {
    return { type: LOADER, payload }
}

