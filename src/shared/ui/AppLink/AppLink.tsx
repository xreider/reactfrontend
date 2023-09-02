import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}) => (
  <Link
    className={classNames(cls.AppLink, {}, [cls[theme], className])}
    {...props}
  >
    {children}
  </Link>
);
