fetch('https://freegeoip.app/json/')
.then(data => data.json())
.then(activeData => {
    const activeText = activeData.zip_code;
    const element = document.getElementById('element');
    element.innerHTML = activeText;
})