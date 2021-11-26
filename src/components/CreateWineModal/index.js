import React from "react";
import { Modal as BootstrapModal, ModalBody } from "react-bootstrap";
import WineApi from "../../api/wineapi";

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
    country: "",
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
      <form onSubmit={createWine}>
        <BootstrapModal.Header>
          <h2>Create Wine</h2>
        </BootstrapModal.Header>
        <BootstrapModal.Body
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <input
            style={{ margin: "10px" }}
            name="wine"
            placeholder="Put your wine here"
            value={createWineForm.wine}
            onChange={handleChange}
          />
          <input
            style={{ margin: "10px" }}
            name="vintage"
            placeholder="Put your vintage here"
            value={createWineForm.vintage}
            onChange={handleChange}
          />
          <input
            style={{ margin: "10px" }}
            name="gws"
            placeholder="Put your gws here"
            value={createWineForm.gws}
            onChange={handleChange}
          />
          <input
            style={{ margin: "10px" }}
            name="ci"
            placeholder="Put your ci here"
            value={createWineForm.ci}
            onChange={handleChange}
          />
          <input
            style={{ margin: "10px" }}
            name="nbj"
            placeholder="Put your nbj here"
            value={createWineForm.nbj}
            onChange={handleChange}
          />
          <select
            name="country"
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          >
            {selectCountries.length &&
              selectCountries.map((selectCountry, idx) => (
                <option key={idx} value={selectCountry.value}>
                  {selectCountry.label}
                </option>
              ))}
          </select>
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
