import React, { Component } from "react";
import { Button, Container, Image, Navbar, Nav } from "react-bootstrap";
import WineApi from "./api/wineapi";
import InputApi from "./api/inputapi";
import Card from "./components/Card";
import Form from "./components/Form";
import CreateWineModal from "./components/CreateWineModal";
import Signup from "./containers/Signup";
import logo from "./logo.svg";
import Routes from "./Routes";
import "./App.css";
import { useHistory } from "react-router";
import Wines from "./components/Wines";
// import Paginate from "./components/Paginate";

function App() {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = React.useState(undefined);
  const localStorageUser = localStorage.getItem("user");
  const [showCreateWineModal, setShowCreateWineModal] = React.useState(false);
  // const [createWineEntryInputData, setCreateWineEntryInputData] = React.useState([]);
  React.useEffect(() => {
    if (localStorageUser) {
      setLoggedInUser(JSON.parse(localStorageUser));
    }
  }, []);

  const openCreateWineModal = evt => {
    evt.preventDefault();
    setShowCreateWineModal(true);
  }

  return (
    <Container className="App" style={{minWidth: '100vw', maxWidth: '100vw'}}>
      <Navbar id="winedown-navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" onClick={() => history.push("/")}>
              Wine Down
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" onClick={() => history.push("/random-wines")}>
                  Q and A
              </Nav.Link>
              <Nav.Link href="#" onClick={() => history.push("/random-wines")}>
                  Random Wines
              </Nav.Link>
              <Nav.Link href="#" onClick={() => history.push("/favorite-wines")}>
                 Favorite Wines
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "50px", marginTop: "60px", marginBottom: "40px" }}>
        <h2>Test REST endpoints.</h2>
        <Button
          type="button"
          variant="outline-primary"
          onClick={openCreateWineModal}
        >
          Create Wine
        </Button>
        <Button
          variant="outline-primary"
          onClick={async () => {
            const initialvalues = {
              id: 2,
              wine: "new example entry updated",
              vintage: 2021,
              gws: "99.00",
              ci: "B",
              nbj: 3,
              country_id: 7,
              entry_status_id: 2,
            };
            await WineApi.updateWineEntry(initialvalues, initialvalues.id);
            alert("Wine Entry Updated!");
          }}
        >
          Update Wine
        </Button>
        <Button
          variant="outline-primary"
          onClick={async () => {
            const initialvalues = {
              id: 6,
            };
            await WineApi.deleteWineEntry(initialvalues.id);
            alert("Wine Entry Deleted!");
          }}
        >
          Delete Wine
        </Button>
      </div>
      <div>{Routes}</div>
      <CreateWineModal openModal={showCreateWineModal} setOpenModal={setShowCreateWineModal} />
    </Container>
  );
}

export default App;
