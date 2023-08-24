import style from '../NavBar.module.scss';

import { CartIcon } from '../../../assets/SvgIcons/CartIcon';
import { HeartIcon } from 'apps/shop/app/assets/SvgIcons/HeartIcon';
import { SearchIcon } from 'apps/shop/app/assets/SvgIcons/SearchIcon';
import { UserIcon } from 'apps/shop/app/assets/SvgIcons/UserIcon';
import { Button } from '@lopi-2/common';
import { Cart } from './Cart/Cart';
import { FC, useState } from 'react';
import { CartProvider, useCart } from 'apps/shop/app/contexts/CartContext';

const Socials: FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>();
  const { productsInCart } = useCart();
  const productsCounter = productsInCart.length;

  const handleOpenCart = () => setIsCartOpen(true);

  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <CartProvider>
      <div className={style.socials}>
        <div className={style.socialsElements}>
          <SearchIcon />
        </div>
        <div className={style.socialsElements}>
          <UserIcon />
        </div>
        <div className={style.socialsElements}>
          <div className={style.socialsCounter}>
            <span>0</span>
          </div>
          <HeartIcon />
        </div>

        <div className={style.socialsElements}>
          <div className={style.socialsCounter}>
            <span>{productsCounter}</span>
          </div>
          <Button
            title={<CartIcon />}
            className={style.button}
            onClick={handleOpenCart}
          />
        </div>
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
      </div>
    </CartProvider>
  );
};
export default Socials;
