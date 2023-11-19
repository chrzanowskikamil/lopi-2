import { Col, Container, Row } from 'react-bootstrap';

import { Button, NO_IMAGE_URL } from '@lopi-2/common';
import Image from 'next/image';
import { QuantityController } from '../../../CartItems/components/CartProduct/QuantityController/QuantityController';
import style from './CartProductsList.module.scss';
import { useCart } from '../../../../../../contexts/CartContext';

export const CartProductsList = () => {
  const { cartData, deleteProduct } = useCart();
  const products = cartData?.cartItems.map((product) => {
    return (
      <Container key={product.product.uid} className={style.product}>
        <Row>
          <Col sm="6">
            <div className={style.productListElement}>
              <Image
                alt={product.product.name}
                width={160}
                height={160}
                src={product?.product?.imageUrls?.[0]?.imageUrl || NO_IMAGE_URL}
              />

              <div className={style.productsDetails}>
                <p>{product.product.name}</p>

                <div className={style.categoryNameStyle}>
                  <p>
                    Kategorie: <span>{product.product.categories[0].name}</span>
                  </p>
                </div>
                <p>
                  {(
                    product.product.discountPrice ||
                    product.product.regularPrice
                  ).toFixed(2)}
                  zł
                </p>
              </div>
            </div>
          </Col>
          <Col sm="6">
            <Container className={style.menu}>
              <QuantityController productId={product.product.uid} />
            </Container>
          </Col>
        </Row>

        <Button
          className={style.deleteButton}
          title={'X'}
          onClick={() => deleteProduct(product.product.uid)}
        />
      </Container>
    );
  });

  return <Container className={style.products}>{products}</Container>;
};
