import { render, screen } from '@testing-library/react';
import { AddTodo } from '../../components/AddTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({}));

describe('Checking if there is a title', () => {
    it('should display the title TODOS', () => {
        render(
            <Provider store={store}>
                <AddTodo />
            </Provider>
        );

        const titleElement = screen.getByText('TODOS');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe('H1');
    });
});