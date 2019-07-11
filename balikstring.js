//input "hello world!"
//output"!dlrow olleh"
function balikString(str){
    var out=''
    for(var i=str.length -1; i>=0; i--){
out= out+str[i]
    }
    console.log(out);
    
}
balikString("hello world!")