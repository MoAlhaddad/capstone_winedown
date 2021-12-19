import React from "react";
import { Modal as BootstrapModal, ModalBody } from "react-bootstrap";
import WineApi from "../../api/wineapi";
import "./styles.scss";

// const countries = {
//     id:
// }

function CreateWineModal({ openModal, setOpenModal }) {
  const [createWineForm, setCreateWineForm] = React.useState({
    wine: "",
    vintage: "",
    gws: "",
    ci: "",
    nbj: "",
    country: "1",
    isFavoriteWine: false,
  });
  const [selectCountries, setSelectCountries] = React.useState([]);

  React.useEffect(() => {
    async function getLkCountries() {
      const lkCountriesResponse = await WineApi.getLkCountries();

      setSelectCountries(lkCountriesResponse.lkCountries);
    }

    getLkCountries();
  }, []);

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.type == "checkbox" ? target.checked : target.value;
    const name = target.name;
    const copyOfForm = Object.assign({}, createWineForm);
    copyOfForm[name] = value;
    setCreateWineForm(copyOfForm);
  };

  const createWine = async (evt) => {
    evt.preventDefault();
    const createWineResponse = await WineApi.createWine(createWineForm);
    //If a wine is created successfully, reset form to initial state and close modal.
    if (createWineResponse.success) {
      setCreateWineForm({
        wine: "",
        vintage: "",
        gws: "",
        ci: "",
        nbj: "",
        country: "",
        isFavoriteWine: false,
      });
      onCancel();
    }
  };

  const onCancel = () => setOpenModal(false);
  return (
    <BootstrapModal
      show={openModal}
      toggle={() => setOpenModal(!openModal)}
      size="lg"
    >
      <form onSubmit={createWine} id="createWineForm">
        <BootstrapModal.Header>
          <h2>Create Wine</h2>
        </BootstrapModal.Header>
        <BootstrapModal.Body
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <input
            name="wine"
            placeholder="insert your wine here"
            value={createWineForm.wine}
            onChange={handleChange}
          />
          <input
            name="vintage"
            placeholder="insert your vintage here"
            value={createWineForm.vintage}
            onChange={handleChange}
          />
          <input
            name="gws"
            placeholder="insert your gws here"
            value={createWineForm.gws}
            onChange={handleChange}
          />
          <input
            name="ci"
            placeholder="insert your ci here"
            value={createWineForm.ci}
            onChange={handleChange}
          />
          <input
            name="nbj"
            placeholder="insert your nbj here"
            value={createWineForm.nbj}
            onChange={handleChange}
          />
          <select name="country" onChange={handleChange}>
            {selectCountries.length &&
              selectCountries.map((selectCountry, idx) => (
                <option key={idx} value={selectCountry.value}>
                  {selectCountry.label}
                </option>
              ))}
          </select>
          <div id="check2" class="checkbox-container">
            <label>
              is my Favorite Wine?
              <input
                type="checkbox"
                id="checkboxid2"
                checked={createWineForm.isFavoriteWine}
                name="isFavoriteWine"
                onChange={handleChange}
              />
            </label>
          </div>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ maxWidth: "170px" }}
          >
            Create Wine
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-danger"
            style={{ width: "120px" }}
          >
            Cancel
          </button>
        </BootstrapModal.Footer>
      </form>
    </BootstrapModal>
  );
}

export default CreateWineModal;
