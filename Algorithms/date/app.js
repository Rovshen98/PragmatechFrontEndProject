let arr = []
function date(firstdate,lastdate){

    
        let start = new Date(firstdate);
        let end = new Date(lastdate)

        let loop = start;
        while (loop <= end) {
       
        let newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate)
        if ( loop.getDay()==2 && loop.getDate()==2){
            arr.push(loop)
            
        }
}
console.log(arr)
};

date("01/21/2020","10/21/2021")

