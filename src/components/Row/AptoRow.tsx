import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoRow.scss';
import capitalize from '../../utils/capitalize';

const COMPONENT_PREFIX = 'AptoRow';

export interface AptoRowDisplayProps extends StandardTypes {
  noGutter?: boolean;
  align?: 'start' | 'center' | 'end' | null | undefined;
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'around'
    | 'between'
    | null
    | undefined;
}

export class AptoRow extends React.Component<AptoRowDisplayProps> {
  public static defaultProps = {
    noGutter: false
  };

  public render() {
    const {
      children,
      className,
      noGutter,
      forwardRef,
      align,
      justify,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      noGutter && `${COMPONENT_PREFIX}--noGutter`,
      align && `${COMPONENT_PREFIX}--align${capitalize(align)}`,
      justify && `${COMPONENT_PREFIX}--justify${capitalize(justify)}`,
      className
    );

    return (
      <div {...rest} ref={forwardRef} className={classes}>
        {children}
      </div>
    );
  }
}
