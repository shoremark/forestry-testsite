import React from 'react';
import { render } from 'test-utils';
import { createMemoryHistory } from 'history';
import ScrollToTop from './index';
import 'jest-styled-components';

describe('Components: Scroll To Top', () => {
  it('should call scrollToTop when route is changed', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const mockScrollTo = jest.fn();
    const tagRef = {
      current: { scrollHeight: 100, clientHeight: 200, scrollTo: mockScrollTo },
    };
    render(<ScrollToTop scrollRef={tagRef} />, {
      history,
    });
    history.push('/a');
    expect(mockScrollTo.mock.calls.length).toBe(1);
    history.push('/b');
    expect(mockScrollTo.mock.calls.length).toBe(2);
  });
});
