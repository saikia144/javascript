function ask(question, yes, no){
    if(confirm(question)) {
        return yes;
    }else 
        return no;
}

function showMore(){
    console.log("Show me more")
    alert("Show me more") 
}

function showLess(){
    alert("Do not Show me more") 
}

let res = ask("Do you agree??",showMore,showLess);
res();

