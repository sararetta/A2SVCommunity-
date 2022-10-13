function dominoPiling(m,n){
    let maximamNumberOfDominoes=0;

    if(m*n%2==0){
        maximamNumberOfDominoes=(m*n)/2
    }
    else{
        maximamNumberOfDominoes=parseInt((m*n)/2);
    }
    console.log(maximamNumberOfDominoes)
    return maximamNumberOfDominoes

};

dominoPiling(2,3)

