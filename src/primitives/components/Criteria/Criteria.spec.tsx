import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Criteria } from './Criteria';

describe('<Criteria />', () => {
  it('should render the component', () => {
    const props = {
      satisfactionRule: true,
      text: '18 anos',
    };

    const { text } = props;

    render(<Criteria {...props} />);

    const satisfiedIcon = screen.getByTestId('criteria-satisfied-icon');
    const criteria = screen.getByText(new RegExp(text, 'i'));

    expect(satisfiedIcon).toBeTruthy();
    expect(criteria).toBeTruthy();
  });

  it('should render the component in not satisfied state', () => {
    const props = {
      satisfactionRule: false,
      text: '18 anos',
    };

    const { text } = props;

    render(<Criteria {...props} />);

    const notSatisfiedIcon = screen.getByTestId('criteria-not-satisfied-icon');
    const criteria = screen.getByText(new RegExp(text, 'i'));

    expect(notSatisfiedIcon).toBeTruthy();
    expect(criteria).toBeTruthy();
  });

  it('should render the component in error state', () => {
    const props = {
      satisfactionRule: false,
      text: '18 anos',
      displayError: true,
    };

    const { text } = props;

    render(<Criteria {...props} />);

    const notSatisfiedIcon = screen.getByTestId('criteria-not-satisfied-icon');
    const criteria = screen.getByText(new RegExp(text, 'i'));

    expect(notSatisfiedIcon).toBeTruthy();
    expect(criteria).toBeTruthy();
  });

  it('should render the component without text', () => {
    render(<Criteria />);

    const notSatisfiedIcon = screen.getByTestId('criteria-not-satisfied-icon');

    expect(notSatisfiedIcon).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Criteria className="123" />);

    const criteria = screen.getByTestId(/criteria-container/i);

    expect(criteria.className).includes('123');
  });
});
