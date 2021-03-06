import React from 'react';
import { render, cleanup, getByText } from 'react-testing-library';
import { AptoCard } from '../AptoCard';

describe('Card Header Component', () => {
  afterEach(cleanup);

  it('Renders', () => {
    const { container } = render(<AptoCard />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard AptoCard--elevation1');
  });

  it('Renders elevation 0', () => {
    const { container } = render(<AptoCard elevation="0" />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard AptoCard--elevation0');
  });

  it('Renders elevation 1', () => {
    const { container } = render(<AptoCard elevation="1" />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard AptoCard--elevation1');
  });

  it('Renders custom className', () => {
    const { container } = render(<AptoCard className="foo" />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard AptoCard--elevation1 foo');
  });

  it('Renders spinner', () => {
    const { container } = render(<AptoCard loading />);

    const node = container.querySelector('.AptoCard .AptoSpinner');
    expect(node).toBeDefined();
  });

  it('Renders spinner with text', () => {
    const { container } = render(
      <AptoCard loading loadingText="hey i am loading" />
    );
    expect(getByText(container, 'hey i am loading')).toBeDefined();
  });

  it('Renders children', () => {
    const { container } = render(
      <AptoCard>
        <div>foo</div>
      </AptoCard>
    );

    const node = container.querySelector('.AptoCard');
    expect(node!.innerHTML).toEqual('<div>foo</div>');
  });
});
