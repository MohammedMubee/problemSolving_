const timeConvert = (time12 = '') => {
   
    const [time, modifier] = time12.split(' ');
    let [hour, minutes,seconds] = time.split(':');

    if (modifier === 'AM' && hour === '12') {
        hour = '00';
    } else if (modifier === 'PM' && hour !== '12') {
        hour = String(parseInt(hour, 10) + 12);
    }

    return `${hour}:${minutes}:${seconds}`;
};
console.log(timeConvert('12:00 AM')); 
console.log(timeConvert('01:00 AM')); 
console.log(timeConvert('12:00 PM')); 
console.log(timeConvert('01:00 PM')); 
console.log(timeConvert('11:59 PM')); 
