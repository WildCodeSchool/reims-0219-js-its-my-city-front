
navigator.geolocation.getCurrentPosition(function (position){
    let coordonnees = []
    coordonnees.push(position.coords.latitude)
    coordonnees.push(position.coords.longitude)
    return coordonnees
});


export default coordonnees;
