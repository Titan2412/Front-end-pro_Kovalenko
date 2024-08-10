import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { TaskList } from '../../components/TaskList/TaskList';

const initialState = {
    todo: {
        task: [],
    },
};

const reducer = (state = initialState) => state;


const store = createStore(reducer);

describe('Array length', () => {
    it('Should the array have length 0', () => {
        render(
            <Provider store={store}>
                <TaskList />
            </Provider>
        );

        const arr = initialState.todo.task;
        expect(arr).toHaveLength(0);

    });
});