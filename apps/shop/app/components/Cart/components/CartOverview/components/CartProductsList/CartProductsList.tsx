import style from './CartProductsList.module.scss';
import Image from 'next/image';
import { Button } from '@lopi-2/common';
import { Container } from 'react-bootstrap';
import { QuantityController } from '../../../CartItems/components/CartProduct/QuantityController/QuantityController';
import { useCart } from '../../../../../../contexts/CartContext';

export const CartProductsList = () => {
  const { cartData, deleteProduct } = useCart();
  const products = cartData?.cartItems.map((product) => {
    return (
      <Container key={product.product.uid} className={style.product}>
        <Image
          alt={product.product.name}
          width={136}
          height={136}
          src={product.product.imageUrls[0].imageUrl}
        />
        <div className={style.productsDetails}>
          <p>{product.product.name}</p>
          <p>
            Kategorie: <span>{product.product.categories[0].name}</span>
          </p>
          <p>
            {(
              product.product.discountPrice || product.product.regularPrice
            ).toFixed(2)}
            zł
          </p>
        </div>
        <Container className={style.menu}>
          <QuantityController productId={product.product.uid} />
          <Button
            className={'m-0 p-0'}
            title={'X'}
            onClick={() => deleteProduct(product.product.uid)}
          />
        </Container>
      </Container>
    );
  });

  return <Container className={style.products}>{products}</Container>;
};
