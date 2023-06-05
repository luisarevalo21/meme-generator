const Box = ({ id, on, toggle }) => {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return (
    <div className="boxes" style={styles} onClick={() => toggle(id)}>
      {id}
    </div>
  );
};
export default Box;
