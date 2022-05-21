document.querySelector('.button').addEventListener('click', async function (event){
      
    let input = document.getElementById('addressIp').value;
    let api = `at_66PV95tFbrvbLxwLL4FZBwS4KqBtE`;
    console.log(input)
    
    if(input === '') {
        console.log('endereco invalido')
    } else {

        let url = `https://geo.ipify.org/api/v2/country?apiKey=${api}&ipAddress=${input}&domain=${input}`;
        let result = await fetch(url);
        let json = await result.json();

        // call the function messageResult
        messageResult(json)

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