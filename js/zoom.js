var button = document.querySelector('#start');
var container = document.querySelector('#jitsi-container');
var api = null;

button.addEventListener('click', () => {
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var stringLength = 30;

    function pickRandom() {
    return possible[Math.floor(Math.random() * possible.length)];
    }

var randomString = Array.apply(null, Array(stringLength)).map(pickRandom).join('');

    var domain = "meet.jit.si";
    var options = {
        "roomName": randomString,
        "parentNode": container,
        "width": 1000,
        "height": 700,
    };
    api = new JitsiMeetExternalAPI(domain, options);
});