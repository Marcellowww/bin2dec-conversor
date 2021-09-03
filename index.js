let bin;
let dec;
let alert;

function getData(){
    bin = document.getElementById('bin');
    dec = document.getElementById('dec');
    document.getElementById('alert').style.display = 'none'
    verify();

}

function verify(){
    document.getElementById('alert').style.display = 'none';
    
    if(bin.value == ''){
        return
    }
    

    bin.value.split('').map((char) => {
        if(char !== '0' && char !== '1'){
            document.getElementById('alert').style.display = 'block';
            return   
        }
    })
    conversion()
}
function conversion(){
    result = parseInt(bin.value, 2);
    print()
}

function print(){
    dec.value = result;
}
