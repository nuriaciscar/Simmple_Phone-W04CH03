import Action from "../Action/Action";

const Actions = () => {
  const action = () => {};
  return (
    <>
      <Action
        href={"Call"}
        text={"Call"}
        className={"Call"}
        actionOnClick={action}
      />

      <Action
        href={"Hang"}
        text={"Hang"}
        className={"Hang"}
        actionOnClick={action}
      />
    </>
  );
};

export default Actions;
