const calcy = () => {
    let hin = document.getElementById('hin').value;
    let eng = document.getElementById('eng').value;
    let math = document.getElementById('math').value;
    let phy = document.getElementById('phy').value;
    let comp = document.getElementById('comp').value;
    let grades = ""

    let total = parseFloat(hin) + parseFloat(eng) + parseFloat(math) + parseFloat(phy) + parseFloat(comp)
    

    let perc = (total / 500) * 100;
    
    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    }
    else
        if (perc <= 79 && perc >= 60) {
            grades = 'B';
        }
        else
            if (perc <= 59 && perc >= 35) {
                grades = 'C';
            }
        else{
            grades = 'F'
        }
               if(perc >=  35 ){
                document.getElementById('showdata').innerHTML = `Out Of 500 Your Total is ${total} And Persentage is ${perc}%. <br> Your Gread is ${grades}.Yor Are Pass.. `
                document.getElementById('thank').innerHTML =`Thank You..`
                swal("Congratulation!", "You Are Pass!", "success");
               } 
           
               else{
                
                document.getElementById('showdata').innerHTML = `Out Of 500 Your Total is ${total} And Persentage is ${perc}%. <br> Your Gread is ${grades}.Yor Are Fail.. `
                document.getElementById('thank').innerHTML =`Thank You..`
                swal("Sorry!", "You Are Fail!", "error");


               }
}
