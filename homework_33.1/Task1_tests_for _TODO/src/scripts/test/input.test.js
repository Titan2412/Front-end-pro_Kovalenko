import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo } from '../../components/AddTodo'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({}));

describe('Input check', () => {
    it('should accept both letters and numbers in the input field', () => {
        render(
            <Provider store={store}>
                <AddTodo />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Введіть своє завдання');
        fireEvent.change(inputElement, { target: { value: 'Test123' } });
        expect(inputElement.value).toBe('Test123');
    });
});