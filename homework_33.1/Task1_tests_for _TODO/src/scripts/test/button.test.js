import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo } from '../../components/AddTodo'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({}));

describe('Checking the button', () => {
    it('Should if you click "Add" without text, there will be an error', () => {
        render(
            <Provider store={store}>
                <AddTodo />
            </Provider>
        );

        const buttons = screen.getByText('Додати');
        fireEvent.click(buttons);

        const errors = screen.getByText('Поле не повинно бути порожнім');
        expect(errors).toBeInTheDocument();

    });
});