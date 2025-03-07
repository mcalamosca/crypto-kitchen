import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Click me</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('should render with the correct text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should call onClick when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    
    fireEvent.click(getByText('Click me'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock} disabled>
        Click me
      </Button>
    );
    
    fireEvent.click(getByText('Click me'));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('should apply the correct class names based on props', () => {
    const { container, rerender } = render(
      <Button variant="primary" size="medium">
        Click me
      </Button>
    );
    
    let button = container.querySelector('button');
    expect(button?.className).toContain('crypto-button');
    expect(button?.className).toContain('crypto-button--primary');
    expect(button?.className).toContain('crypto-button--medium');
    
    rerender(
      <Button variant="secondary" size="large">
        Click me
      </Button>
    );
    
    button = container.querySelector('button');
    expect(button?.className).toContain('crypto-button--secondary');
    expect(button?.className).toContain('crypto-button--large');
  });
}); 