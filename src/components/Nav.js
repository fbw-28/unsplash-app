import { updateText, updateImage } from '../actions';
import { connect } from 'react-redux';

const Nav = (props) => {
  console.log('NAV PROPS:', props);

  return (
    <div className="nav">
      <h5>unpslash</h5>
      <button onClick={() => props.updateImage()}>
        GET RANDOM IMAGE
      </button>
      <button
        onClick={() =>
          props.updateText('Steve is no longer the master')
        }
      >
        WHATS UP WITH STEVE
      </button>
    </div>
  );
};

export default connect(null, {
  updateText,
  updateImage,
})(Nav);
