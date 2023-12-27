import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Switch } from './Switch';

describe('<Switch />', () => {
  const handleOnClick = vi.fn();
  const handleOnTurnOn = vi.fn();
  const handleOnTurnOff = vi.fn();

  it('should render the component', () => {
    render(<Switch checked />);

    expect(screen.getByTestId('check-icon')).toBeTruthy();
  });

  it('should render the component with off switch', () => {
    render(<Switch checked={false} />);

    expect(screen.getByTestId('cancel-icon')).toBeTruthy();
  });

  it('should not display the offLabel if the switch is on', () => {
    render(<Switch checked offLabel={{ text: 'Inativa', position: 'pos' }} />);

    const label = screen.queryByText(/Inativa/i);

    expect(label).not.toBeTruthy();
  });

  it('should not display the label if the switch is off', () => {
    render(
      <Switch checked={false} label={{ text: 'Ativa', position: 'pos' }} />,
    );

    const label = screen.queryByText(/Ativa/i);

    expect(label).not.toBeTruthy();
  });

  it('should render the component with label in default position', () => {
    render(<Switch checked label={{ text: 'Ativa', position: 'pos' }} />);

    const label = screen.getByText(/Ativa/i);

    expect(label).toBeTruthy();
  });

  it('should render the component with offLabel in default position', () => {
    render(
      <Switch
        checked={false}
        offLabel={{ text: 'Inativa', position: 'pos' }}
      />,
    );

    const label = screen.getByText(/Inativa/i);

    expect(label).toBeTruthy();
  });

  it('should render the component with label in pre position', () => {
    render(<Switch checked label={{ text: 'Ativa', position: 'pre' }} />);

    const label = screen.getByText(/Ativa/i);

    expect(label).toBeTruthy();
  });

  it('should render the component with offLabel in pre position', () => {
    render(
      <Switch
        checked={false}
        offLabel={{ text: 'Inativa', position: 'pre' }}
      />,
    );

    const label = screen.getByText(/Inativa/i);

    expect(label).toBeTruthy();
  });

  it('should handle switch click', () => {
    render(<Switch checked={false} onClick={handleOnClick} />);

    const switchElement = screen.getByTestId('cancel-icon');

    fireEvent.click(switchElement);

    expect(handleOnClick).toHaveBeenCalledOnce();
  });

  it('should handle the switch turn on', () => {
    render(<Switch checked={false} onTurnOn={handleOnTurnOn} />);

    const switchElement = screen.getByTestId('cancel-icon');

    fireEvent.click(switchElement);

    expect(handleOnTurnOn).toHaveBeenCalledOnce();
  });

  it('should handle the switch turn off', () => {
    render(<Switch checked={true} onTurnOff={handleOnTurnOff} />);

    const switchElement = screen.getByTestId('check-icon');

    fireEvent.click(switchElement);

    expect(handleOnTurnOff).toHaveBeenCalledOnce();
  });

  it('should not  handle the switch turn off because disabled', () => {
    render(<Switch disabled checked onClick={handleOnClick} />);

    const switchElement = screen.getByTestId('check-icon');

    fireEvent.click(switchElement);
  });
});
