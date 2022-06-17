import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'minhyuk',
      company: 'dankook',
      theme: 'Dark',
      title: 'Software Engineer',
      email: 'comon23463@gmail.com',
      message: 'hi',
      fileName: 'mh',
      fileURL: null,
    },
    {
      id: '2',
      name: 'minhyuk2',
      company: 'dankook',
      theme: 'Light',
      title: 'Software Engineer',
      email: 'comon23463@gmail.com',
      message: 'hi',
      fileName: 'mh',
      fileURL: 'mh.png',
    },
    {
      id: '3',
      name: 'minhyuk3',
      company: 'dankook',
      theme: 'Colorful',
      title: 'Software Engineer',
      email: 'comon23463@gmail.com',
      message: 'hi',
      fileName: 'mh',
      fileURL: null,
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });
  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
