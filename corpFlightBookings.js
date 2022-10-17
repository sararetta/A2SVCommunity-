/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    let arr=Array.from({length:n+1}, (_, i) => 0);
    for (let i=0; i< bookings.length; i++) {
        let temp=bookings[i][bookings[i].length-1] 
        for (let j=bookings[i][0]; j<=bookings[i][1]; j++) {
            arr[j]=arr[j]+temp
        }
    }
    return arr.slice(1)
};

