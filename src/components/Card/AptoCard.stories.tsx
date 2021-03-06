import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoCard } from './AptoCard';
import { AptoCardContent } from '../CardContent/AptoCardContent';
import { AptoCardHeader } from '../CardHeader/AptoCardHeader';
import { AptoCardFooter } from '../CardFooter/AptoCardFooter';
import { AptoButton } from '../Button/AptoButton';
import './aptoCardStories.scss';

storiesOf('Card', module)
  .add('Default', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
        <AptoButton kind="link">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Elevation', () => (
    <React.Fragment>
      <h3>No Elevation1</h3>
      <AptoCard elevation="1">
        <AptoCardHeader>Card Header</AptoCardHeader>
        <AptoCardContent>This is content</AptoCardContent>
        <AptoCardFooter>
          <AptoButton kind="link">Left</AptoButton>
          <AptoButton kind="link">Right</AptoButton>
        </AptoCardFooter>
      </AptoCard>
      <h3>Elevation 0</h3>
      <AptoCard elevation="0">
        <AptoCardHeader>Card Header</AptoCardHeader>
        <AptoCardContent>This is content</AptoCardContent>
        <AptoCardFooter>
          <AptoButton kind="link">Left</AptoButton>
          <AptoButton kind="link">Right</AptoButton>
        </AptoCardFooter>
      </AptoCard>
    </React.Fragment>
  ))
  .add('No Header', () => (
    <AptoCard>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
        <AptoButton kind="link">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('No Footer', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
    </AptoCard>
  ))
  .add('Right Align Footer', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter align="right">
        <AptoButton kind="link">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Center Align Footer', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter align="center">
        <AptoButton kind="link">Center</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Left Align Footer', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter align="left">
        <AptoButton kind="link">Left</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Left And Right Align Footer', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoCardFooter.Left>
          <AptoButton kind="link">Left</AptoButton>
          <AptoButton>Left</AptoButton>
          <AptoButton kind="link">Left</AptoButton>
        </AptoCardFooter.Left>
        <AptoCardFooter.Right>
          <AptoButton kind="link">right</AptoButton>
          <AptoButton kind="link">right</AptoButton>
          <AptoButton>right</AptoButton>
        </AptoCardFooter.Right>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('No Padding Content', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent noPadding>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Padded Bottom Header', () => (
    <AptoCard>
      <AptoCardHeader padBottom>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Padded Top Footer', () => (
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter padTop>
        <AptoButton kind="link">Left</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Loading State', () => (
    <AptoCard loading>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
        <AptoButton kind="link">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ))
  .add('Loading State with message', () => (
    <AptoCard loading loadingText="loading stuff">
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
        <AptoButton kind="link">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  ));
