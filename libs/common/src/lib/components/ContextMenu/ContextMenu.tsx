'use client';

import {
  ContextMenuTrigger,
  ContextMenu as ReactContextMenu,
} from 'react-contextmenu';
import { clientCode, director } from './ContextBuilder';

export const CartContextMenu = () => {
  const elements = clientCode(director);

  console.log(`${elements.parts}`);

  return (
    <div>
      <ContextMenuTrigger id={'id'}>
        <div className="well">Right click to see the menu</div>
      </ContextMenuTrigger>

      <ReactContextMenu id="id">{...elements.parts}</ReactContextMenu>
    </div>
  );
};

// const CartContextItems = (CartContextMenu) => {
//   return clientCode(director);
// };
