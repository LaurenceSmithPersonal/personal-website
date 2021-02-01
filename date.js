        var browser=''; 
        var version='';
        if (navigator.appName.indexOf('Microsoft') != -1)
            browser = 'IE'
        else if (navigator.appName.indexOf('Netscape') != -1)
            browser = 'Netscape'
        if (version == ''){
            version= navigator.appVersion;
            paren = version.indexOf('(');
            whole_version = navigator.appVersion.substring(0,paren-1);
            version = parseInt(whole_version);
        }
        
        /*var print1="";*/
        var print2="";
        var print3="";
        today = new Date();
        
        /* weekday = today.getDay();
        if (weekday == 6) print1='Saturday';
        if (weekday == 0) print1='Sunday';
        if (weekday == 1) print1='Monday';
        if (weekday == 2) print1='Tuesday';
        if (weekday == 3) print1='Wednesday';
        if (weekday == 4) print1='Thursday';
        if (weekday == 5) print1='Friday'; */
        
        month = today.getMonth();
        if (month == 0) print2='January';
        if (month == 1) print2='February';
        if (month == 2) print2='March';
        if (month == 3) print2='April';
        if (month == 4) print2='May';
        if (month == 5) print2='June';
        if (month == 6) print2='July';
        if (month == 7) print2='August';
        if (month == 8) print2='September';
        if (month == 9) print2='October';
        if (month == 10) print2='November';
        if (month == 11) print2='December';
        date = today.getDate();
        year=today.getYear();



        if (browser=="IE" && version>= "4.00"){
            year = year;
        }
        else {
            year= year+1900;
        }

