import { Link } from 'remix';
import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  header: {
    maxWidth: '1200px',
    width: '100%',
    margin: '20px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#222',
  },
  repoLink: {
    width: '48px',
    display: 'block',
  },
  img: {
    width: '100%',
  },
};

export const Header = () => {
  return (
    <header style={styles.header}>
      <Link to={`/`}>
        <h1 style={styles.title}>LGTM Cat</h1>
      </Link>
      <a style={styles.repoLink} href={`https://github.com/dnrsm/remix-cats`}>
        <img style={styles.img} src="/images/github.png" alt="github" />
      </a>
    </header>
  );
};
