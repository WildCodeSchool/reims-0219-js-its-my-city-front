const MapZoom = (userLocalisation, defaultLocalisation, newPoiLocalisation) => {
  if (newPoiLocalisation.length !== 0) {
    return newPoiLocalisation;
  }
  return defaultLocalisation.length ? userLocalisation : defaultLocalisation;
};

export default MapZoom;
