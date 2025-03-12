function User(usernam, password){
    this.usernam=usernam
    this.password=password
    this.score=0;
    this.tempScore=0;
    this.play=function(){
        let n=Math.floor(Math.random()*6+1)
        if(n==1) this.tempScore=0
        else this.tempScore+=n
    }

    this.nextPlayer=function(){
        this.score+=this.tempScore;
        this.tempScore=0;
    }

    this.infos=function(){
        console.log(`User: ${this.usernam}, 
            TempScore: ${this.tempScore}, 
            Score: ${this.score}`);
    }
}

function game(){
    let u1=new User("toto","titi")
    let u2=new User("tata","tutu")
    let currentPlayer=u1
    do{
        let ansewar=prompt(`${currentPlayer.usernam}  play or next (p/n)?`)
        if(ansewar=="p") currentPlayer.play()
        else {
            currentPlayer.nextPlayer();
            currentPlayer=currentPlayer==u1?u2:u1
        }
        console.log("#################")
        currentPlayer.infos()
    }while(u1.score<100 && u2.score<100)
}

