import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';

it('check if days of the week text displays', () => {
    const { getByTestId } = render(<HomePage />);
    const monText = getByTestId('monday');
    const tuesText = getByTestId('tuesday');
    const wedText = getByTestId('wednesday');
  
    expect(monText).toBeInTheDocument();
    expect(monText).toHaveTextContent("Monday");
    expect(tuesText).toBeInTheDocument();
    expect(tuesText).toHaveTextContent("Tuesday");
  });

  it('check if Employee names appear on the table', () => {
    const { getByTestId } = render(<HomePage />);
    const weekWorkers = getByTestId('weekWorkers');
  
    expect(weekWorkers).toBeInTheDocument();
    expect(weekWorkers).toBeEmpty('');
  });