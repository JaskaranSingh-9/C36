class Game{
    constructor(){
        
    }
    getState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data){
        gameState=data.val()
        })
    }
    update(state){
        database.ref('/').update({gameState:state})
    }
    start(){
        console.log(gameState)
        if(gameState=== 0 ){
            console.log("if")
            player= new Player()
            player.getCount()

            form=new Form ()
            form.display();
        }
    }
}