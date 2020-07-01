import React from 'react';
import { render } from 'test-utils';
import Title from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from 'app/theme';
import 'jest-styled-components';

describe('Components: Title', () => {
  const testMessage = 'Test Message';
  it('Should display title text', () => {
    const { queryByText } = render(<Title>{testMessage}</Title>);
    const component = queryByText(testMessage);
    expect(component).toBeInTheDocument();
  });
});
