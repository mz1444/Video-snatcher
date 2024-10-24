import React from 'react';
import Header from '../PageComponents/Header/Header';
import InputField from '../components/InputField/inputfield';
import Cards from '../components/Cards/cards';
import Footer from '../PageComponents/Footer/footer';

const Home = () => {
  return ( 
    <div>
        <Header />
        <Cards />
        <InputField />
       
        <Footer />
    </div>
  );
};

export default Home;
