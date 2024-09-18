function reverse(number){
    let num=0
    while(number!==0){
        last=number%10
        num=num*10+last
        number=Math.floor(number/10)
    }
    return num
}
console.log(reverse(1234));

function palindrome(st){
    let i=0
    let j=st.length-1
    while(i<=j){
        if(st[i]!==st[j]){
            return false
        }
        i=i+1
        j=j-1
    }
    return true
}
console.log(palindrome("abacaba"));



