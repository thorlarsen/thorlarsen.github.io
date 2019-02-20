//Display current date and copyright year in Weather site footer
    let today = new Date();
    
    let weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let month = new Array(12);
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[12] = 'December';

    let fullDate = weekday[today.getDay()] + ', ' + today.getDate() + ' ' 
               + month[today.getMonth()] + ' ' + today.getFullYear();

    document.getElementById('currentDate').innerHTML = fullDate;
    document.getElementById('copyrightYear').innerHTML = today.getFullYear();

