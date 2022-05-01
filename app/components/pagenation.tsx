import { Link, useParams } from 'remix';
import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    paddingBottom: '60px',
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

type Props = {
  isLastPage: boolean;
};

export const Pagenation: React.VFC<Props> = ({ isLastPage }) => {
  const { id } = useParams();
  const numId = Number(id);
  const isFirstPage = !id;
  const prev = isFirstPage ? 1 : isLastPage ? numId - 2 : numId - 1;
  const current = isFirstPage ? 2 : isLastPage ? numId - 1 : numId;
  const next = isFirstPage ? 3 : isLastPage ? numId : numId + 1;

  return (
    <ul style={styles.list}>
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
      {!isLastPage && (
        <li style={styles.item}>
          <Link style={styles.link} to={`/page/${next}`}>
            {'>'}
          </Link>
        </li>
      )}
    </ul>
  );
};
