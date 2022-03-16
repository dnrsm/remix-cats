import { Link, useParams } from 'remix';
import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '60px 0',
    padding: '0',
  },
  item: {
    listStyleType: 'none',
    border: '1px solid #999',
  },
  link: {
    padding: '10px 16px',
    display: 'block',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default function Pagenation() {
  const { id } = useParams();
  const numId = Number(id);
  const lastId = 76;
  const isLastPage = numId === 76;
  const prev = id ? (isLastPage ? lastId - 2 : numId - 1) : 1;
  const current = id ? (isLastPage ? lastId - 1 : numId) : 2;
  const next = id ? (isLastPage ? lastId : numId + 1) : 3;

  return (
    <ul style={styles.list}>
      <li style={styles.item}>
        <Link style={styles.link} to={'/'}>
          {'<<'}
        </Link>
      </li>
      <li style={styles.item}>
        <Link style={styles.link} to={`/page/${prev}`}>
          {'<'}
        </Link>
      </li>
      <li style={styles.item}>
        <Link style={styles.link} to={`/page/${prev}`}>
          {prev}
        </Link>
      </li>
      <li style={styles.item}>
        <Link style={styles.link} to={`/page/${current}`}>
          {current}
        </Link>
      </li>
      <li style={styles.item}>
        <Link style={styles.link} to={`/page/${next}`}>
          {next}
        </Link>
      </li>
      <li style={styles.item}>
        <Link style={styles.link} to={`/page/${next}`}>
          {'>'}
        </Link>
      </li>
      <li style={styles.item}>
        <Link style={styles.link} to={'/page/76'}>
          {'>>'}
        </Link>
      </li>
    </ul>
  );
}
