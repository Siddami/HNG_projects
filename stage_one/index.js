function dateAndTime() {
    const now = new Date()
    const dayOfTheWeek= now.toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = now.toUTCString();

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfTheWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

setInterval(dateAndTime, 1000);
