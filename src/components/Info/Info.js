const Info = ({ isCalling }) => {
  return <span className="message"> {isCalling ? "Calling..." : " off"} </span>;
};

export default Info;
