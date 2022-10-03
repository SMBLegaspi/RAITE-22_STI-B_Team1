let ws_bnbusdt_lastPrice = null;
let ws_bnbusdt = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
ws_bnbusdt.onmessage = (event) => {
    let priceEl = document.getElementById('bnb_usdt');
    let stockObj = JSON.parse(event.data);
    let price = parseFloat(stockObj.p).toFixed(2);
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};

let ws_ethusdt_lastPrice = null;
let ws_ethusdt = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
ws_ethusdt.onmessage = (event) => {
    let priceEl = document.getElementById('ethe_usdt');
    let stockObj = JSON.parse(event.data);
    let price = parseFloat(stockObj.p).toFixed(2);
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};

let ws_btcusdt_lastPrice = null;
let ws_btcusdt = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
ws_btcusdt.onmessage = (event) => {
    let priceEl = document.getElementById('btc_usdt');
    let stockObj = JSON.parse(event.data);
    let price = parseFloat(stockObj.p).toFixed(2);
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};

let ws_xrpusdt_lastPrice = null;
let ws_xrpusdt = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
ws_xrpusdt.onmessage = (event) => {
    let priceEl = document.getElementById('xrp_usdt');
    let stockObj = JSON.parse(event.data);
    let price = stockObj.p;
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};

let ws_maticusdt_lastPrice = null;
let ws_maticusdt = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
ws_maticusdt.onmessage = (event) => {
    let priceEl = document.getElementById('matic_usdt');
    let stockObj = JSON.parse(event.data);
    let price = stockObj.p;
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};
let ws_lunausdt_lastPrice = null;
let ws_lunausdt = new WebSocket('wss://stream.binance.com:9443/ws/lunausdt@trade');
ws_lunausdt.onmessage = (event) => {
    let priceEl = document.getElementById('luna_usdt');
    let stockObj = JSON.parse(event.data);
    let price = parseFloat(stockObj.p).toFixed(2);
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};
let ws_solusdt_lastPrice = null;
let ws_solusdt = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
ws_solusdt.onmessage = (event) => {
    let priceEl = document.getElementById('sol_usdt');
    let stockObj = JSON.parse(event.data);
    let price = parseFloat(stockObj.p).toFixed(2);
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};
let ws_axsusdt_lastPrice = null;
let ws_axsusdt = new WebSocket('wss://stream.binance.com:9443/ws/axsusdt@trade');
ws_axsusdt.onmessage = (event) => {
    let priceEl = document.getElementById('axs_usdt');
    let stockObj = JSON.parse(event.data);
    let price = parseFloat(stockObj.p).toFixed(2);
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};
let ws_dogebusd_lastPrice = null;
let ws_dogebusd = new WebSocket('wss://stream.binance.com:9443/ws/dogebusd@trade');
ws_dogebusd.onmessage = (event) => {
    let priceEl = document.getElementById('doge_busd');
    let stockObj = JSON.parse(event.data);
    let price = stockObj.p;
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};
let ws_adausdt_lastPrice = null;
let ws_adausdt = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
ws_adausdt.onmessage = (event) => {
    let priceEl = document.getElementById('ada_usdt');
    let stockObj = JSON.parse(event.data);
    let price = stockObj.p;
    priceEl.innerHTML = "$"+price;
    priceEl.style.color = !ws_bnbusdt_lastPrice || ws_bnbusdt_lastPrice === price ? 'black' :price > ws_bnbusdt_lastPrice ? 'green' : 'red';
    ws_bnbusdt_lastPrice = price;
};
