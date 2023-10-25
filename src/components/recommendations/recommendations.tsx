'use client';
import Link from 'next/link';
import styles from './recommendations.module.scss';
import { RecommendationType } from './recommendation.types';
import { useEffect, useState } from 'react';
export default function Recommendations({ recommendations }: { recommendations: RecommendationType[] | undefined }) {
  const [book, setBook] = useState<RecommendationType | undefined>(undefined)
  useEffect(() => {
    if (!recommendations) return;
    setBook(recommendations[0])
  }, [])

  return <section id="recommendations" className={styles.recommendations}>
    <header>
      <h1>Recomendaciones</h1>
      <p>Tienes un gusto muy extraño y además hueles mal.</p>
    </header>
    {book && <main>
      <div>
        <img src={book.img} alt={book.title} />
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
      <div className={styles.actions}>
        <img src="hate.svg" alt="" />
        <img src="info.svg" alt="" />
        <img src="like.svg" alt="" />
      </div>
      <div className={styles.info}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <Link href={book.href}>Go to amazon</Link>
      </div>
    </main>}
  </section>
}