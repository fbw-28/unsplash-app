import { connect } from 'react-redux';

const Gallery = (props) => {
  console.log('GALLERY PROPS:', props);

  return (
    <div className="gal">
      <p>{props.text}</p>
      <img src={props.image} alt="whatevs" />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('GALLERY.JS -> STATE IS COMING', state);
  return state;
};

export default connect(mapStateToProps)(Gallery);
