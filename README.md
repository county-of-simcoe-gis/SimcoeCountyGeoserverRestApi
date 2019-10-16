# Simcoe County Geoserver Rest Custom Rest API

Node JS Express API. This adapts the existing GeoServer Rest Api and adds in customizations. For now it adds in all Layer Details for a layer group.
This allows a single URL call to a layer group and get all layer details as well.

Currently works with the main map viewer [WebViewer](https://github.com/county-of-simcoe-gis/SimcoeCountyWebViewer). This project will grow as needed.

### Single call will give you all layers AND layer info. [See it here](https://opengis.simcoe.ca/geoserverRestApi/getLayerGroup/All%20Layers)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node JS
```

### Installing

```
In the root directory, type `npm install` in the terminal.
In the root directory, type `set DEBUG=myapp:* & npm start` in the terminal.
```

## Deployment

Copy the entire directory to your Node server.

## Built With

- [Express](This project was created using Express application generator. https://expressjs.com/en/starter/generator.html)

## Authors

- **Al Proulx** - _Initial work_ - [Al Proulx](https://github.com/iquitwow)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
