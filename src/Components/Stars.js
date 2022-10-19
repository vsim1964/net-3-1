import Star from './Star';

function Stars(props) {
  const {count} = props;
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars[i] += 1;
  }

  return (
      <ul>
        {stars.map((star, index) => (
        <li key={index}>
          <Star/>
        </li>
        ))}
      </ul>
  );
}

export default Stars;
