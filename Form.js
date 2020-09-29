class Form {

  constructor() {
    // to create an input for the name 
    this.input = createInput("Name");
    // to click the play button to start the game  
    this.button = createButton('Play');
    // to write 'hello'
    this.greeting = createElement('h2');
    // to shoe the name of the game 
    this.title = createElement('h2');
    // to reset the database    
    this.reset = createButton('reset')
  }
  hide(){
    // to hide the features that we do not need for the entire game 
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){               

    //to display the features 
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth/2 + 70, 0)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
player.updateCount(0)
    game.update(0)



    })
  }
}
