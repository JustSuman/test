window.addEventListener("scroll", scrollFunction)
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
// // project of weather api
// const api_key = "ff481f559fea02934cdb1cf3a79b991a"
// function myWeather(cityID){
//     fetch("http://api.openweathermap.org/dat/2.5/weather?id="+ cityID + "&appid"+api_key)
//     .then(function(resp){ return resp.json()})
// }