class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`this.BASE_URL/characters`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getOneRegister(characterId) {
    axios
      .get(`this.BASE_URL/characters/${characterId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createOneRegister(characterInfo) {
    axios
      .post(`this.BASE_URL/characters`, characterInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateOneRegister(characterId, characterInfo) {
    axios
      .patch(`this.BASE_URL/characters/${characterId}`, characterInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteOneRegister(characterId) {
    axios
      .delete(`this.BASE_URL/characters/${characterId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}