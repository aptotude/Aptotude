import React from 'react';
import classNames from 'classnames';
import './aptoCard.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoCard';

export interface AptoCardDisplayProps extends StandardTypes {
  elevation?: 0 | 1 | '0' | '1';
}

export class AptoCard extends React.Component<AptoCardDisplayProps> {
  public static defaultProps = {
    elevation: 1
  };

  public render() {
    const { className, elevation, forwardRef, children, ...rest } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      elevation && `${COMPONENT_PREFIX}--elevation${elevation}`,
      className
    );

    return (
      <div {...rest} ref={forwardRef} className={classes}>
        {children}
      </div>
    );
  }
}
