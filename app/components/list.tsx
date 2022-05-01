import { Link } from 'remix';
import type { Cat } from '~/types';
import { styles } from '~/styles/posts';

type Props = {
  cats: Cat[];
};

export const List: React.VFC<Props> = ({ cats }) => {
  return (
    <ul style={styles.list}>
      {cats.map((cat) => (
        <li key={cat.id} style={styles.card}>
          <Link to={`/cat/${cat.id}`}>
            <img
              style={styles.img}
              src={`https://cataas.com/cat/${cat.id}/says/LGTM`}
              alt={cat.tags.join('')}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
