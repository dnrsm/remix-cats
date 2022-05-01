import { Link } from 'remix';
import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  header: {
    maxWidth: '1200px',
    margin: '0 auto',
    marginBottom: '20px',
  },
  link: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export const Header = () => {
  return (
    <header style={styles.header}>
      <Link style={styles.link} to={`/`}>
        HOME
      </Link>
    </header>
  );
};
