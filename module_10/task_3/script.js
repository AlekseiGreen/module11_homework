let webSocket;

document.getElementById('btn-ID').onclick = function() {
    let value1 = document.getElementById('input-ID').value;
    
    let elem = document.getElementById('cont');
    elem.innerHTML += `<div class='enter'>${value1}</div>`;


    let socket = new WebSocket("wss://echo-ws-service.herokuapp.com");

    socket.onopen = function(e) {
        socket.send(`${value1}`);
    };

    socket.onmessage = function(event) {
        elem.innerHTML += `<div class='enter2'>${event.data}</div>`;
    };
    
    socket.onclose = function(event) {
        if (event.wasClean) {
            alert('!!!');
            console.log(`Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            alert('Соединение прервано');
        }
    };

    socket.onerror = function(error) {
        alert(`[error]`);
    };
    
}


document.getElementById('btn-ID2').onclick = function() {
    let elem2 = document.getElementById('cont');

    if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let socket = new WebSocket("wss://echo-ws-service.herokuapp.com");

            socket.onopen = function(e) {
                socket.send(`${position.coords.latitude}, ${position.coords.longitude}`);
            };
            
            socket.onclose = function(event) {
                if (event.wasClean) {
                    alert('!!!');
                    console.log(`Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
                } else {
                    alert('Соединение прервано');
                }
            };

            socket.onerror = function(error) {
                alert(`[error]`);
            };

            let link1 = `https://www.openstreetmap.org/search?query=${position.coords.latitude}%${position.coords.longitude}`
            elem2.innerHTML += `<div class='enter'>${link1}</div>`;
        });
    } else {
        elem2.innerHTML += `<div class='enter'>Нет доступа к гео-лакации</div>`;
    }
}