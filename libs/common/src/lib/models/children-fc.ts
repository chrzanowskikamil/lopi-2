import { FC, PropsWithChildren } from 'react';

export type ChildrenFC<T = unknown> = FC<PropsWithChildren<T>>;
