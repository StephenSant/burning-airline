import Search from "./Search";
import SignIn from "./SignIn";

function App() {
  return (
    <div>
      <SignIn />
      <h1>BURNING AIRLINES</h1>
      <em>We put the AAAAAAAAAAAAAAAAAAAAAAHHHH in adventure.</em>
      <ol>
        <li>User will login.</li>
        <li>User will search for a flight.</li>
        <li>User will select a seat.</li>
      </ol>
      <Search />
    </div>
  );
}
export default App;
