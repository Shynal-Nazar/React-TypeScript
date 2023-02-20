import logo from "./logo.svg";
import "./App.css";
import Title from "./component/Title1";
import Title2 from "./component/Title2";
import PhonebookComponent from "./component/Phonebook";
import ContactList from "./component/ContactsList";
import Filter from "./component/Filter";

function App() {
  return (
    <div className="App-header">
      <div className="item">
        <Title />
      </div>
      <div className="item">
        <PhonebookComponent />
      </div>
      <div className="item item2">
        <Title2 title="Find contacts by name" />
        <Filter />
        <Title2 title="Contacts" />
        <ContactList />
      </div>
      <div className="item">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="item">
        <img src={logo} className="App-logo2" alt="logo" />
      </div>
    </div>
  );
}

export default App;
