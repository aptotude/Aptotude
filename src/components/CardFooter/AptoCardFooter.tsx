import React from 'react';
import classNames from 'classnames';
import './aptoCardFooter.scss';
import { StandardTypes } from '../../utils/standardTypes';
import { AptoCardFooterRight } from './AptoCardFooterRight';
import { AptoCardFooterLeft } from './AptoCardFooterLeft';

const COMPONENT_PREFIX = 'AptoCardFooter';

export interface AptoCardFooterDisplayProps extends StandardTypes {
  padTop?: boolean;
  align?: 'left' | 'right' | 'center' | undefined;
}

export class AptoCardFooter extends React.Component<
  AptoCardFooterDisplayProps
> {
  public static Left: any = AptoCardFooterLeft;
  public static Right: any = AptoCardFooterRight;

  public render() {
    const {
      padTop,
      align,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      padTop && `${COMPONENT_PREFIX}--padTop`,
      align && `${COMPONENT_PREFIX}--${align}`,
      className
    );

    return (
      <div {...rest} ref={forwardRef} className={classes}>
        {children}
      </div>
    );
  }
}
