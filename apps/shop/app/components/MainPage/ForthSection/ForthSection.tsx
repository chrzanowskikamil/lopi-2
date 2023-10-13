import { CustomersOpinions } from './components/CustomersOpinions/CustomersOpinions';
import { OurCustomers } from './components/OurCustomers/OurCustomers';
import { PictureGalery } from './components/PictureGalery/PictureGalery';

export const ForthSection = async () => {
  return (
    <>
      <OurCustomers />
      <CustomersOpinions />
      <PictureGalery />
    </>
  );
};
