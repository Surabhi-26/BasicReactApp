function Message() {
  const name = "Anonymous";
  if (name) return <h1>Hello, this is {name}!!</h1>;
  else return <h1>Hello, this is Me!!</h1>;
}

export default Message;
