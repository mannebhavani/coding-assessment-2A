const Box = (props) => {
  const { className, boxText } = props;
  return (
    <div className={`${className}`}>
      <p>{boxText}</p>
    </div>
  );
};

const element = (
  <div className="bg-container shadow">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box-container" boxText="Small" />
      <Box className="medium-box-container" boxText="Medium" />
      <Box className="large-box-container" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
