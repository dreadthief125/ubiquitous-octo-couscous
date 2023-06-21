AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },      
    },
    
    update: function() {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function(elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", e => {
        if (elementId.includes("#coins")) {          
          console.log("You have hit a coin. +1 bitcoin");
          
        }
        else if(elementId.includes("#fish")){
          console.log("you hit da fish >:( -100 social credit");
        }         
      });
    }
    
  });
  