'use client';

import {
  ContextMenuTrigger,
  ContextMenu as ReactContextMenu,
} from 'react-contextmenu';

import { FC } from 'react';
import { clientCode } from './ContextDirector';
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
  const elements = clientCode(uid);

  return (
    <>
      <ContextMenuTrigger id={`${id}`}>{children}</ContextMenuTrigger>

      <ReactContextMenu id={`${id}`} className={style.contextMenu}>
        {...elements.parts}
      </ReactContextMenu>
    </>
  );
};
