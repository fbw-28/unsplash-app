const Nav = (props) => {
  console.log(props);
  return (
    <div className="nav">
      <h5>unpslash</h5>
      <button onClick={() => props.handleClick()}>
        GET RANDOM IMAGE
      </button>
    </div>
  );
};

export default Nav;
