import React from 'react';
import Aboutus from './aboutus';
import WhyUs from './why-us';
import ReservationTable from './reservation-table';
import MenuCategory from './menu-category';
import Special from './special';
import Events from './events';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Contact from './contact';
import Chefs from './chefs';

const Main = () => {
  return (
    <main>
      <Aboutus />
      <WhyUs />
      <Events />
      <MenuCategory />
      <Special />
      <ReservationTable />
      <Gallery />
      <Chefs />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default Main;
