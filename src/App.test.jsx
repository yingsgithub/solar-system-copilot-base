import App from './App';
import { render, act } from '@testing-library/react';

describe('App rendering', () => {
  test('app renders successfully', async () => {
    // Arrange
    // Act
    // render an app with the data provider and wait for the data to be fetched
    let app;
    await act(async () => {
      app = render(<App />);
    });

    // Assert
    // find the main element
    const elementList = app.container.querySelectorAll('main');
    expect(elementList).toHaveLength(1);
  });
});