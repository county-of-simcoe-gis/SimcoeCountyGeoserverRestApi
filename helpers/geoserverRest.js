var parser = require("xml2json");
var fs = require("fs").promises;
const fetch = require("node-fetch");
const URL = require("url").Url;


// CHANGE THIS TO YOUR SERVER
const xmlPathTemplate = (layerName) => `//county.simcoe.on.ca/shares/GIS/SimcoeCounty/Geoserver/data_dir/workspaces/simcoe/paradise/${layerName}/featuretype.xml`
const urlGroupTemplate = (groupName) => `https://opengis.simcoe.ca/geoserver/rest/layergroups/${groupName}.json`


module.exports = {
  getLayerGroup: async function(groupName, callback) {

    // XML2JSON OPTIONS
    var options = {
        object: true,
        reversible: false,
        coerce: false,
        sanitize: true,
        trim: true,
        arrayNotation: false,
        alternateTextNode: false
    };

    // URL TO LAYER GROUP
    const urlGroup = urlGroupTemplate(groupName)

    let groupJson = await this._getJSON(urlGroup);
    const layers = groupJson.layerGroup.publishables.published;
    let newPublished = []
    for (let index = 0; index < layers.length; index++) {
        const layer = layers[index];
        const nameOnly = layer.name.split(":")[1];
        let layerObj = Object.assign({}, layer);

        // CONVERT XML TO JSON
        const buff = Buffer.from(xmlPathTemplate(nameOnly));
        const xml =  await fs.readFile(buff, "utf-8")
        var json = parser.toJson(xml, options);
        
        // ADD NEW OBJECT
        layerObj.layerDetails = json;
        newPublished.push(layerObj);
        
        
    }

    // OVERRIDE ORIGINAL OBJ
    groupJson.layerGroup.publishables.published = newPublished;    

    callback(groupJson);
  },

  async _getJSON(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  },
};
