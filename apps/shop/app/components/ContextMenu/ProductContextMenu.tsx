'use client';

import 'react-contexify/ReactContexify.css';

import { Menu, useContextMenu } from 'react-contexify';

import { FC } from 'react';
import React from 'react';
import { buildProductWithContextBuilder } from './ContextDirector';
import style from './contextMenu.module.scss';

type ProductContextMenuProps = {
  children: JSX.Element | JSX.Element[];
  productUid: string;
  id: string;
};

export const ProductContextMenu: FC<ProductContextMenuProps> = ({
  children,
  productUid,
  id,
}) => {
  const elements = buildProductWithContextBuilder(productUid);

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
    <div role="menu">
      <div
        onContextMenu={(e) =>
          handleContextMenu(e as React.MouseEvent<HTMLDivElement>)
        }
        className={style.contextMenuTriger}
        role="context-menu-triger"
      >
        {children}
      </div>
      <Menu id={`${id}`} className={style.contextMenu} role="context-menu">
        {elements.parts}
      </Menu>
    </div>
  );
};
