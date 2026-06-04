function retry(testname,maxRetries = 3,delay = 1000 ){
    console.log(`Retrying ${testname} up to ${maxRetries} times, ${delay}ms apart `);

}
retry("Login Test");
retry("registration test", 3 , 1000);
