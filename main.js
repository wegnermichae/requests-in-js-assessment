const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios.get(`${BASE_URL}/constellations`).then(response => {
    const data = response.data;
    const names = [];
    for (let stars of data) {
      names.push(stars.name);
    }
    console.log(names);
  })
}

function getConstellationsByQuadrant(quadrant) {
  axios.get(`${BASE_URL}/constellations`).then(response => {
    const constels = response.data.filter(stars => stars.quadrant === quadrant);
    console.log(constels);
  })
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};