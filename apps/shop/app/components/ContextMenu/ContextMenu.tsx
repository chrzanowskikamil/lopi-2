'use client';

import {
  ContextMenuTrigger,
  ContextMenu as ReactContextMenu,
} from 'react-contextmenu';
import { clientCode, director } from './ContextBuilder';

import { FC } from 'react';
import style from './contextMenu.module.scss';

type CartContextMenuProps = {
  children?: JSX.Element;
  uid: string;
  id: number;
};
export const CartContextMenu: FC<CartContextMenuProps> = ({
  children,
  uid,
  id,
}) => {
  const elements = clientCode(director, uid);

  return (
    <>
      <ContextMenuTrigger id={`${uid}`}>{children}</ContextMenuTrigger>

      <ReactContextMenu id={`${uid}`} className={style.contextMenu}>
        {...elements.parts}
      </ReactContextMenu>
    </>
  );
};
