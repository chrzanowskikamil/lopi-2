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
  id: string;
};
export const CartContextMenu: FC<CartContextMenuProps> = ({
  children,
  uid,
  id,
}) => {
  const elements = clientCode(director, uid);

  return (
    <>
      <ContextMenuTrigger id={`${id}`}>{children}</ContextMenuTrigger>

      <ReactContextMenu id={`${id}`} className={style.contextMenu}>
        {...elements.parts}
      </ReactContextMenu>
    </>
  );
};
