let n= 5;
for(i=1;i<=n;i++){
    let row = "";
    for(j=n;j>=i;j--){
            row = row + "*";
    }
   
    console.log(row);
    
}