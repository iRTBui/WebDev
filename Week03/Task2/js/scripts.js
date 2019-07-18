function time() {
    var today = new Date();

    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    
    var day = weekday[today.getDay()];
    
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    
    m=checkTime(m);
    s=checkTime(s);
    
    nowTime = h+":"+m+":"+s;

    //sua format ngay/thang/nam
    //if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = day+', '+ dd+'/'+mm+'/'+yyyy;
    //
    //tmp='<span class="date">'+today+' | '+nowTime+'</span>';

    document.getElementById("clock").innerHTML=nowTime;

    clocktime=setTimeout("time()","1000","JavaScript");
    function checkTime(i)
    {
        if(i<10){
            i="0" + i;
        }
        return i;
    }
}
function submitName() {
    var x;
    // Get nameValue
    nammeX = document.getElementById("nameValue").value;
}
function loiChao() {
    var text;
    switch (new Date().getHours()) {
        case 4,5,6,7,8,9:
            text = "Chào buổi sáng";
            break;
        case 11,12,13:
            text = "Trưa rồi! Thư giãn nào";
            break;
        case 14,15,16,17,18:
            text = "Chào buổi chiều";
            break;
        case 19,20,21:
            text = "Chào buổi tối";
            break;
        default:
            text = "Khuya rồi! Đi ngủ mau";
    }

    document.getElementById("message").innerHTML = text + ", ";

}
setInterval(loiChao, 1000);

// Set ngay sinh nhat
var countDownDate = new Date("Oct 10, 2019 00:00:00").getTime();
                        
// Cap nhat lai sau 1s
var countdownfunction = setInterval(function() {

  // Get ngay va gio
  var now = new Date().getTime();
  
  // Tinh khoang canh
  var distance = countDownDate - now;
  
  // Tinh ngay, gio, phut, giay
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Xuat ra man hinh voi id="demo"
  document.getElementById("myBirthday").innerHTML = "Bạn còn " + days + " ngày " + hours + " giờ "
  + minutes + " phút " + seconds + " giây là tới sinh nhật. ";
  
  // Neu thoi gian dem nguoc ket thuc, in ra man hinh EXPIRED
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("myBirthday").innerHTML = "EXPIRED";
  }
}, 1000);