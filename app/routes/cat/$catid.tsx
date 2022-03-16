import { useParams } from 'remix';
import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    maxWidth: '100%',
    verticalAlign: 'bottom',
    display: 'block',
    marginBottom: '30px',
  },
  link: {
    display: 'block',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  text: {
    wordBreak: 'break-all',
  },
};

export default function Catid() {
  const { catid } = useParams();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          style={styles.img}
          // src={`https://cataas.com/cat/${catid}?width=600`}
          src={`https://cataas.com/cat/${catid}`}
          alt={catid}
        />
        <a style={styles.link} href={`https://cataas.com/cat/${catid}`}>
          Image
        </a>
        <p style={styles.text}>{`https://cataas.com/cat/${catid}`}</p>
        <a
          style={styles.link}
          href={`https://cataas.com/cat/${catid}/says/LGTM`}
        >
          Saying LGTM
        </a>
        <p style={styles.text}>{`https://cataas.com/cat/${catid}/says/LGTM`}</p>
      </div>
    </div>
  );
}
