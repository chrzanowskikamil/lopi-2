'use client';

import {
  ContextMenuTrigger,
  ContextMenu as ReactContextMenu,
} from 'react-contextmenu';
import { clientCode, director } from './ContextBuilder';

import { FC } from 'react';
import style from './contextMenu.module.scss';

export const CartContextMenu: FC = () => {
  const elements = clientCode(director);

  console.log(`${elements.parts}`);

  return (
    <div>
      <ContextMenuTrigger id={'id'}>
        <div className={`well ${style.contextMenuTrigger}`}>
          Right click to see the menu
        </div>
      </ContextMenuTrigger>

      <ReactContextMenu id="id" className={style.contextMenu}>
        {...elements.parts}
      </ReactContextMenu>
    </div>
  );
};
