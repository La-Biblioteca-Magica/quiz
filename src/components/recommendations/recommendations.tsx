'use client';
import styles from './recommendations.module.scss';
import animations from './animations.module.scss';
import { RecommendationType } from './recommendation.types';
import { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
import Loading from './loading';
export default function Recommendations({ recommendations, loading }: { recommendations: RecommendationType[] | undefined, loading: boolean }) {
  const [book, setBook] = useState<RecommendationType | undefined>(undefined);
  const matchRef = useRef<HTMLDivElement>(null);
  const recommendationRef = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState<boolean>(false);

  useEffect(() => {
    if (!recommendations?.length) return;
    setBook(recommendations[0])
  }, [recommendations]);

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
  function dislikeBook(event?: React.MouseEvent<HTMLImageElement>) {
    (event?.target as HTMLImageElement)?.classList.add(animations.wobble);
    recommendationRef.current?.classList.add(animations.disappear__left);
    setTimeout(() => {
      (event?.target as HTMLImageElement)?.classList.remove(animations.wobble);
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
    dislikeBook();
  }

  function goToBook() {
    if (!book?.href) return;
    globalThis.open(book.href, '_blank');
  }
  function reload() {
    globalThis.location.reload();
  }
  function truncateDescription(description: string): string {
    const MAX_DESCRIPTION_LENGTH = 600;
    return description.length > MAX_DESCRIPTION_LENGTH ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
      : description;
  }
  return <section id="recommendations" className={styles.recommendations}>
    <header>
      {/* <h1>Recomendaciones</h1> */}
      <p>¡Qué gusto tan interesante! Aquí tienes algunas recomendaciones.</p>
    </header>
    {loading && <Loading></Loading>}
    {!loading && <>
      {book && <main aria-expanded={expand}>
        <div className={styles.img__wrapper + ' ' + animations.recommendation__animated} ref={recommendationRef}>
          <div className={styles.mask}></div>
          <img src={book?.img || '/placeholder-book.jpg'} alt={book.title} className={styles.book__img} />
          <div className={styles.info}>
            <p className={styles.info__title}>{book.title} · {book.author}</p>
            <div className={styles.description}>
              <p>{truncateDescription(book.description)}</p>
              <dl>
                <dt>Páginas</dt>
                <dd>{book.pages}</dd>
                <dt>Género</dt>
                <dd>{book.genres.join(', ')}</dd>
              </dl>
            </div>
          </div>
          <div className={styles.actions}>
            <img src="/icons/hate.svg" alt="I do not like this book" onClick={dislikeBook} />
            <img src="/icons/info.svg" alt="I want more info about this book" onClick={requestMoreInfo} />
            <img src="/icons/love.svg" alt="I love this book" onClick={likeBook} />
          </div>
        </div>
      </main>}
      {!book && <div className={styles.no__book}>
        <h1>No hay recomendaciones para ti :(</h1>
        <p>¡Pero no te preocupes! ¡Estamos continuamente afinando nuestro algoritmo para darte los mejores resultados!</p>
        <Button action={() => reload()}>Volver a intentarlo</Button>
      </div>}

      {/* MATCH */}
      {book && <div ref={matchRef} className={styles.match}>
        <header>
          <h1>¡¡Amor a primera vista!!</h1>
          <p>{book.title} · {book.author}</p>
          <img src={book.img} alt="Librito" />
        </header>
        <div className={styles.match__actions}>
          <Button action={() => goToBook()} className={styles.submit}>Leer ahora</Button>
          <Button variant='secondary' action={() => hideMatch()}>Seguir buscando</Button>
        </div>
      </div>}
    </>}
  </section>
}