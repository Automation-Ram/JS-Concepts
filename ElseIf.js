function scoreGrade(score)
{
    let grade;
    if(score>=90){
        grade='A';
    }
    else{
        if(score>=80){
            grade='B';
        }
        else{
            if(score>=70)
            {
                grade='C';
            }
            else{
                grade='D'
            }
        }
    }
    console.log(grade);
}
scoreGrade(30);