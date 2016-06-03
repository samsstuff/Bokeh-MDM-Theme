window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	
var game = new Phaser.Game(1920, 1080, Phaser.CANVAS, '', { init: init, preload: preload, create: create, update: update, render: render });
	
	function init() {
		game.input.maxPointers = 1;

		// Setup the scale strategy
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//you can try resiz to see which one fits best show_all scales nicely 
		//but might show letterbox
		//this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		}
	
   

	function preload() {
		//game.load.pack("level", "assets/assets-pack.json");
	    game.load.image('bokeh', 'assets/images/background.jpg');
	    game.load.image('dot1' , 'assets/images/dot1.png');
	    game.load.image("dot2" , "assets/images/dot2.png");
	}
	var dots;
	
	function create() {

	    this.add.image(0,0,"bokeh");
	    
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    dots = game.add.group();
	    dots.enableBody = true;
	   
	    for (var i = 0; i < 80; i++){    	
	    	var circsize = game.rnd.realInRange(-2, 1);
	    	var s = dots.create(game.world.randomX, game.world.randomY, "dot2");
	        s.name = 'dot' + s;
	        s.scale.setTo(circsize, circsize);
	        s.tint = Math.random() * 0xffffff;
	        s.alpha = .1;
	        s.body.collideWorldBounds = true;
	        s.body.bounce.setTo(0.8, 0.8);
	        s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
	        
	        var t = dots.create(game.world.randomX, game.world.randomY, "dot1");
	        t.name = 'dot' + t;
	        t.scale.setTo(circsize, circsize);
	        t.tint = Math.random() * 0xffffff;
	        t.alpha = .1;
	        t.body.collideWorldBounds = true;
	        t.body.bounce.setTo(0.8, 0.8);
	        t.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
	    	
	    }
	   
	}
	function update() {

	}
	
	function render() {
		
	}
};
