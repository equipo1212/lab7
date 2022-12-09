let sb = document.getElementById("searchbutton");
let csb = document.getElementById("cancelsearch")

sb.onclick = () => {
    csbfun()
    let txt = document.getElementById('arendamain').outerHTML
    let val = document.getElementById('search').value 
    let changedtxt
    let first_len = txt.length;
    if (val.includes(' ') || val.length < 3 || val.includes('<') || val.includes('>') || val.includes('.') || val.includes(',')){
        alert('Ошибка поиска\nот 3 символов и еще несколько запретов;)')
    }
    else{
        let kol = -1;
        let left = [], right = []
        for(i = 0;i < txt.length;i++){
            if (txt.slice(i, i + val.length).toUpperCase() == val.toUpperCase()){
                let prov = -1
                kol++
                for (k = 0;k < txt.length;k++){
                    if (txt[i-k] == '>'){
                        prov = 1
                        break
                    }
                    else if (txt[i-k] == '<'){
                        break
                    }
                }
                if (prov == 1){
                    for (k = 0;k < txt.length;k++){
                        if(txt[i - k] == ' ' || txt[i - k] == '\t' || txt[i - k] == '\n' || txt[i - k] == '(' || txt[i - k] == ')' || txt[i-k] == ">"){
                            if (txt[i-k] == ">" || txt[i-k] == "("){
                                k--
                            }
                            left[kol] = i - k + 31 * kol
                            break
                        }
                    }
                    for (k = 0;k < txt.length;k++){
                        if(txt[i + k] == ' ' || txt[i + k] == '\t' || txt[i + k] == '\n' || txt[i + k] == '(' || txt[i + k] == ')' || txt[i + k] == '<'){
                            right[kol] = i + k + 31 * kol
                            break
                        }
                    }
                }
            }                     
        }
        for(i = 0; i <= kol;i++){
            if (i==0){
            changedtxt = txt.slice(0, left[i]) + '<span class="searchtxt">' + txt.slice(left[i], right[i]) + "</span>" + txt.slice(right[i], first_len)
            }
            else{
                let new_len = changedtxt.length
                changedtxt = changedtxt.slice(0, left[i]) + '<span class="searchtxt">' + changedtxt.slice(left[i], right[i]) + "</span>" + changedtxt.slice(right[i], new_len)
            }
        }
        if(kol >= 0){
            document.getElementById('tourmain').outerHTML = changedtxt
        }
    } 
}
let csbfun = () => {
    let ch = document.querySelectorAll('.searchtxt')
    for (i = 0;i < ch.length;i++){
     ch[i].outerHTML = ch[i].innerHTML
    }
}
csb.onclick = csbfun