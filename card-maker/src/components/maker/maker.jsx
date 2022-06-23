import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const creaOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={creaOrUpdateCard}
          updateCard={creaOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
