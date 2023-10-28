'use client';
import styles from './recommendations.module.scss';
import animations from './animations.module.scss';
import { RecommendationType } from './recommendation.types';
import { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
export default function Recommendations({ recommendations }: { recommendations: RecommendationType[] | undefined }) {
  const [book, setBook] = useState<RecommendationType | undefined>(undefined);
  const matchRef = useRef<HTMLDivElement>(null);
  const recommendationRef = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState<boolean>(false);
  useEffect(() => {
    if (!recommendations) return;
    setBook(recommendations[0])
  }, []);

  function requestMoreInfo() {
    setExpand(!expand);
  }

  function _loadNextRecommendation() {
    if (!recommendations) return;
    setBook(prev => {
      const prevIndex = recommendations.findIndex(r => r.href === prev?.href);
      if (prevIndex >= 0) {
        return recommendations[prevIndex + 1];
      }
    });
  }
  function dislikeBook(event: React.MouseEvent<HTMLImageElement>) {
    (event.target as HTMLImageElement).classList.add(animations.wobble);
    recommendationRef.current?.classList.add(animations.disappear__left);
    setTimeout(() => {
      (event.target as HTMLImageElement).classList.remove(animations.wobble);
      recommendationRef.current?.classList.remove(animations.disappear__left);
      _loadNextRecommendation();
    }, 700);
  }
  function likeBook(event: React.MouseEvent) {
    (event.target as HTMLImageElement).classList.add(animations.jello);
    setTimeout(() => {
      (event.target as HTMLImageElement).classList.remove(animations.jello);
    }, 700);
    showMatch();
  }

  function showMatch() {
    setTimeout(() => {
      matchRef.current?.classList.add(styles.match__fired);
    }, 700);
  }
  function hideMatch() {
    matchRef.current?.classList.remove(styles.match__fired);
  }

  function goToBook() {
    if (!book?.href) return;
    globalThis.open(book.href, '_blank');
  }
  function reload() {
    globalThis.location.reload();
  }
  return <section id="recommendations" className={styles.recommendations}>
    <header>
      <h1>Recomendaciones</h1>
      <p>Tienes un gusto muy extraño y además hueles mal.</p>
    </header>
    {book && <main aria-expanded={expand} className={animations.recommendation__animated} ref={recommendationRef}>
      <div className={styles.img__wrapper} >
        <div className={styles.mask}></div>
        <img src={book.img} alt={book.title} />
        <div className={styles.info}>
          <p>{book.title} · {book.author}</p>
          <p className={styles.description}>{book.description}</p>
          <dl>
            <dt>Páginas</dt>
            <dd>{book.pages}</dd>
            <dt>Género</dt>
            <dd>{book.genres.join(', ')}</dd>
          </dl>
        </div>
      </div>
    </main>}
    {!book && <div className={styles.no__book}>
      <h1>No hay recomendaciones para ti :(</h1>
      <p>¡Pero no te preocupes! ¡Estamos continuamente afinando nuestro algoritmo para darte los mejores resultados!</p>
      <Button action={() => reload()}>Volver a intentarlo</Button>
    </div>}
    <div className={styles.actions}>
      <img src="/icons/hate.svg" alt="I do not like this book" onClick={dislikeBook} />
      <img src="/icons/info.svg" alt="I want more info about this book" onClick={requestMoreInfo} />
      <img src="/icons/love.svg" alt="I love this book" onClick={likeBook} />
    </div>
    {book && <div ref={matchRef} className={styles.match}>
      <header>
        <h1>Amor a primera vista!!</h1>
        <p>{book.title} · {book.author}</p>
        <img src={book.img} alt="Librito" />
      </header>
      <div className={styles.match__actions}>
        <Button action={() => goToBook()} className={styles.submit}>Leer ahora</Button>
        <Button variant='secondary' action={() => hideMatch()}>Seguir buscando</Button>
      </div>
    </div>}
  </section>
}