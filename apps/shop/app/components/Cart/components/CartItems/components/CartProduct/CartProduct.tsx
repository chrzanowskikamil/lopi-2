import style from './CartProduct.module.scss';
import { FC, Fragment } from 'react';
import Image from 'next/image';
import { Button } from '@lopi-2/common';
import { Container } from 'react-bootstrap';
import { ProductPrice } from './components/ProductPrice/ProductPrice';
import { QuantityController } from './components/QuantityController/QuantityController';
import { IconWrapper } from '../../../../../../components/Icons/IconWrapper';
import { useCart } from '../../../../../../contexts/CartContext';

export const CartProduct: FC = () => {
  const { cartData, deleteProduct } = useCart();

  const productsList = cartData?.cartItems.map((product) => {
    return (
      <Fragment key={product.product.uid}>
        <Container className={style.product}>
          <Image
            width={64}
            height={64}
            src={product.product.imageUrls[0]?.imageUrl || '/no-image.png'}
            alt={product.product.name}
          />
          <p className={style.productName}>{product.product.name}</p>
          <ProductPrice productUid={product.product.uid} />
        </Container>
        <div className={style.menu}>
          <Button
            className={'m-0 p-0 border-0'}
            title={<IconWrapper icon={<i className="bi bi-trash"></i>} />}
            onClick={() => deleteProduct(product.product.uid)}
          />
          <QuantityController productId={product.product.uid} />
        </div>
      </Fragment>
    );
  });

  return (
    <>
      <Container className={style.products}>{productsList}</Container>
    </>
  );
};
