var h = null; // Giờ
    var m = null; // Phút
    var s = null; // Giây
 
    var timeout = null; // Timeout
 
    function start()
    {
        
    }
 
    function stop(){
        clearTimeout(timeout);
    }
    console.log()
    function start(){
       
     
        // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
        //  - giảm số giờ xuống 1 đơn vị
        //  - thiết lập số phút lại 59
        if (m === +1){
            h += 1;
            m = 59;
        }
    }