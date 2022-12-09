let rec1 = document.getElementById('rects'),rec2 = document.getElementById('rects2');
rec1.onclick = function(event){
    if (event.target.className == 'rect1'){
        let num;
        for (i = 0;i < 3;i++){
            if (event.target == rec1.children[i]){
                num = i
                break
            }
        }
        for (i = 0;i < 3;i++){
            rec1.children[i].className = 'rect1'
        }
        rec1.children[num].className = 'rect2'
    }
};
rec2.onclick = function(event){
    if (event.target.className == 'rect1'){
        let num;
        for (i = 0;i < 5;i++){
            if (event.target == rec2.children[i]){
                num = i
                break
            }
        }
        for (i = 0;i < 5;i++){
            rec2.children[i].className = 'rect1'
        }
        rec2.children[num].className = 'rect2'
    }
};