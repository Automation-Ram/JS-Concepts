function browsersettings(broName, broVer, exe){
    if(typeof broName==="string" && typeof broVer=== "number" && typeof exe ==="boolean")
    {
        console.log(`Browser:${broName}, 'version:${broVer}, 'execution: ${exe}''`)
    }
    else{
        console.log(`Browser:${broName}`);
    }


}
browsersettings("chrome",115,true);