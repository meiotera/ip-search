

document.querySelector('.button').addEventListener('click', async function (event){
    
    let input = document.getElementById('addressIp').value;
    let api = `at_66PV95tFbrvbLxwLL4FZBwS4KqBtE`;
  
    
    if(input === '') {
        console.log('endereco invalido')
    } else {

        let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${api}&ipAddress=${input}&domain=${input}`;
        let result = await fetch(url);
        let json = await result.json();
        
        // call the function messageResult
        messageResult(json)
        map(json)
      

    }
    
});




function messageResult(json){
    let address = document.getElementById('address');
    let location = document.getElementById('location');
    let timezone = document.getElementById('timezone');
    let isp = document.getElementById('isp');    
    let data = json
    
    address.innerHTML = data.ip;
    location.innerHTML = `${data.location.region}, ${data.location.country}`;
    timezone.innerHTML = data.location.timezone;
    isp.innerHTML = data.isp
}

function map(json){
    let lat = json.location.lat;
    let long = json.location.lng
    let map = L.map('map').setView([lat, long], 13);
    
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([lat, long]).addTo(map);       
                
    let latlng = L.latLng(lat, long); 

    let imgIcon = document.querySelector('.leaflet-marker-icon');
   
    imgIcon.setAttribute('src', 'assets/images/icon-location.svg');

}