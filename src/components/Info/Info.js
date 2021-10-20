const Info = ({ isCallling }) => {
  return <span className="message"> {isCalling ? "Calling..." : ""} </span>;
};

export default Info;
