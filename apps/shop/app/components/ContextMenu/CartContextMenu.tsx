'use client';

import 'react-contexify/ReactContexify.css';

import { Menu, useContextMenu } from 'react-contexify';

import { FC } from 'react';
import React from 'react';
import { clientCode } from './ContextDirector';
import style from './contextMenu.module.scss';

type CartContextMenuProps = {
  children: JSX.Element | JSX.Element[];
  uid: string;
  id: string;
};

export const CartContextMenu: FC<CartContextMenuProps> = ({
  children,
  uid,
  id,
}) => {
  const elements = clientCode(uid);

  const { show } = useContextMenu({
    id,
  });

  function handleContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    show({
      event,
      props: {
        key: 'value',
      },
    });
  }

  return (
    <div>
      <div
        onContextMenu={(e) =>
          handleContextMenu(e as React.MouseEvent<HTMLDivElement>)
        }
        className={style.contextMenuTriger}
      >
        {children}
      </div>
      <Menu id={`${id}`} className={style.contextMenu}>
        {elements.parts}
      </Menu>
    </div>
  );
};
