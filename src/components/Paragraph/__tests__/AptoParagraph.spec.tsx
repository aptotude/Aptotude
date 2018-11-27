import React from 'react';
import renderer from 'react-test-renderer';
import AptoParagraph from '../AptoParagraph';

test('Paragraph renders', () => {
  const component = renderer.create(
    <AptoParagraph />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph compact renders', () => {
  const component = renderer.create(
    <AptoParagraph compact />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
