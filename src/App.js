import "./app.css";
function App() {
  return (
    <>
      <div className="header">
        <div className="namePerson">Sujan Pokhrel</div>
      </div>

      <div className="middle">
        <div className="image"></div>
        <div className="name-person" style={{ color: "black" }}>
          <p style={{ display: "inline", textDecoration: "underline" }}>
            Full Stacker Developer
          </p>
          &nbsp;(MERN STACK)
        </div>
        <div className="mail">mail me : Sujan901@gmail.com </div>
      </div>
    </>
  );
}
export default App;
