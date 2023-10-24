function rpsGame(yourchoice){
    var humanchoice,botchoice
    humanchoice=yourchoice.id
    botchoice=numtochoice(random())
    console.log("human choice:",humanchoice)
    console.log("computer choice:",botchoice);

    
    results=decidewinner(humanchoice,botchoice)
    console.log(results);
    message=finalmessage(results);
    console.log(message)
    rpsfrontend(yourchoice.id,botchoice,message);
}

function random(){
    return Math.floor(Math.random()*3);
}
function numtochoice(number){
    return ["rock","paper","scissors"][number]
}

function decidewinner(yourchoice,computerchoice){
    var rpsdb={
        "rock":{"scissors":1,"rock":0.5,"paper":0},
        "paper":{"rock":1,"paper":0.5,"scissors":0},
        "scissors":{"paper":1,"scissors":0.5,"rock":0}
    };
    var yourscore=rpsdb[yourchoice][computerchoice];
    var computerscore=rpsdb[computerchoice][yourchoice];
    

    return [yourscore,computerscore];
}

function finalmessage([yourscore,computerscore]){
    if(yourscore===0){
        return {'message':'you lost','color':'red'}

    }else if(yourscore ===0.5){
        return {'message':'you tied','color':'yellow'}


    }else{
        return {'message':'you win','color':'green'}
    }

}

function rpsfrontend(humimgchoice,comimgchoice,finalmessage){
    var imgdb={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
        

    }
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById("scissors").remove()

    var hd=document.createElement("div")
    var cd=document.createElement("div")
    var md=document.createElement("div")
    hd.innerHTML="<img src="+imgdb[humimgchoice]+" heigth=150 width=150>"
    cd.innerHTML="<img src="+imgdb[comimgchoice]+" heigth=150 width=150>"
    md.innerHTML="<h1 style='color:"+finalmessage['color']+";font-size:60px;padding:30px;'> "+ finalmessage['message']



    document.getElementById('flex-box-rps-div').appendChild(hd);
    document.getElementById("flex-box-rps-div").appendChild(md);
    document.getElementById("flex-box-rps-div").appendChild(cd);
    

}