import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// Mock the Button component from the shared UI library
jest.mock('@crypto-kitchen/shared/ui', () => ({
  Button: ({ children, ...props }: { children: React.ReactNode }) => (
    <button {...props}>{children}</button>
  ),
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a heading with the text "Momentum Dashboard"', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const heading = getByText('Momentum Dashboard');
    expect(heading).toBeTruthy();
  });

  it('should render the buttons', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText('Primary Button')).toBeTruthy();
    expect(getByText('Secondary Button')).toBeTruthy();
    expect(getByText('Outline Button')).toBeTruthy();
  });
}); 