Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)



function updateClock() {
      const now = new Date();
      const hours24 = now.getHours();
      const hours12 = (hours24 % 12) || 12; // Convert 24-hour to 12-hour format
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours24 < 12 ? 'AM' : 'PM';

      const time24 = `${String(hours24).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      const time12 = `${String(hours12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

      document.getElementById('clock').innerHTML = `<p>${time24}</p><p>${time12}</p>`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial update