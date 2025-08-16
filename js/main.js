// Live clock/date (Dhaka)
function updateClock() {
    try {
        const optsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Dhaka' };
        const optsDate = { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Dhaka' };
        document.getElementById('clock').textContent = new Intl.DateTimeFormat('bn-BD', optsTime).format(new Date());
        document.getElementById('date').textContent = new Intl.DateTimeFormat('bn-BD', optsDate).format(new Date());
    } catch (e) {
        console.log(e.message);
    }
}
updateClock();
setInterval(updateClock, 1000);