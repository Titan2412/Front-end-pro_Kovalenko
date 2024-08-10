import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AddTodo } from '../../components';


const store = createStore(() => ({}));

describe('Cleaning', () => {
    it('Should clear the input after submitting', () => {
        render(
            <Provider store={store}>
                <AddTodo />
            </Provider>
        );

        const todoInput = screen.getByPlaceholderText('Введіть своє завдання');
        fireEvent.change(todoInput, { target: { value: 'Test' } });

        const todoForm = screen.getByText('Додати')
        fireEvent.click(todoForm)

        expect(todoInput.value).toBe('')

    });
});