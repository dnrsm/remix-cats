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
  copyButton: {
    marginBottom: '30px',
  },
};

export default function Catid() {
  const { catid } = useParams();

  const copyTextToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Could not copy text: ', err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          style={styles.img}
          src={`https://cataas.com/cat/${catid}/says/LGTM`}
          alt={catid}
        />
        <a style={styles.link} href={`https://cataas.com/cat/${catid}`}>
          Normal Image
        </a>
        <p style={styles.text}>{`https://cataas.com/cat/${catid}`}</p>
        <button
          style={styles.copyButton}
          onClick={() => copyTextToClipboard(`https://cataas.com/cat/${catid}`)}
        >
          COPY URL
        </button>
        <a
          style={styles.link}
          href={`https://cataas.com/cat/${catid}/says/LGTM`}
        >
          Saying LGTM
        </a>
        <p style={styles.text}>{`https://cataas.com/cat/${catid}/says/LGTM`}</p>
        <button
          onClick={() =>
            copyTextToClipboard(`https://cataas.com/cat/${catid}/says/LGTM`)
          }
        >
          COPY URL
        </button>
      </div>
    </div>
  );
}
