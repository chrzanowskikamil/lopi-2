import { FC, Fragment } from 'react';

import { Button } from '@lopi-2/common';
import { CartContextMenu } from '../../../../../ContextMenu/ContextMenu';
import { Container } from 'react-bootstrap';
import { IconWrapper } from '../../../../../../components/Icons/IconWrapper';
import Image from 'next/image';
import { ProductPrice } from './ProductPrice/ProductPrice';
import { QuantityController } from './QuantityController/QuantityController';
import style from './CartProduct.module.scss';
import { useCart } from '../../../../../../contexts/CartContext';

export const CartProduct: FC = () => {
  const { cartData, deleteProduct } = useCart();

  const productsList = cartData?.cartItems.map((el, i) => {
    const product = el.product;

    return (
      <CartContextMenu
        key={i}
        uid={product.uid}
        id={`CartProduct ${product.uid}`}
      >
        <Fragment key={product.uid}>
          <Container className={style.product}>
            <Image
              width={64}
              height={64}
              src={product.imageUrls[0]?.imageUrl || '/no-image.png'}
              alt={product.name}
            />
            <p className={style.productName}>{product.name}</p>
            <ProductPrice productUid={product.uid} />
          </Container>
          <div className={style.menu}>
            <Button
              className={'m-0 p-0 border-0'}
              title={<IconWrapper icon={<i className="bi bi-trash"></i>} />}
              onClick={() => deleteProduct(product.uid)}
            />
            <QuantityController productId={product.uid} />
          </div>
        </Fragment>
      </CartContextMenu>
    );
  });

  return <Container className={style.products}>{productsList}</Container>;
};
