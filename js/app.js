document.addEventListener("DOMContentLoaded", function(){

	function orientation() {
		var w = window,
		    d = document,
		    e = d.documentElement,
		    g = d.getElementsByTagName('body')[0],
		    width = w.innerWidth || e.clientWidth || g.clientWidth,
		    height = w.innerHeight|| e.clientHeight|| g.clientHeight,
		    board = document.querySelector('#board');
		var ratio = width / height;
		console.log(ratio);
		if (ratio >= 1.5) {
			board.style.height = '85vh';
			board.style.width = '164vh';
			var blocks = document.querySelectorAll('.block');
			for (var i = 0; i < blocks.length; i++) {
				blocks[i].style.height = '16vh';
				blocks[i].style.width = '16vh';
				blocks[i].style.padding = '1vh';
    			blocks[i].style.margin = '1vh';
			}
		} 
		else if (ratio >= 1 && ratio < 1.5) {
			board.style.height = '85vh';
			board.style.width = '164vh';
			var blocks = document.querySelectorAll('.block');
			for (var i = 0; i < blocks.length; i++) {
				blocks[i].style.height = '16vh';
				blocks[i].style.width = '16vh';
				blocks[i].style.padding = '1vh';
    			blocks[i].style.margin = '1vh';
			}
		}
		else if (ratio >= 0.7 && ratio < 1) {

		}
		else if (ratio <= 0.7) {
			var blocks = document.querySelectorAll('.block');
			board.style.width = '85vw';
			board.style.height = '166vw';
			for (var i = 0; i < blocks.length; i++) {
				blocks[i].style.height = '16vw';
				blocks[i].style.width = '16vw';
				blocks[i].style.padding = '1vw';
    			blocks[i].style.margin = '1vw';
			}
		}
	}

	orientation();
	window.onresize = orientation;
	window.addEventListener('orientationchange', orientation());


	var blocks = document.querySelectorAll('.block'),
		again = document.querySelector('#again'),
		myContent = [
			'<div class="triangle color1"><h1 class="spin">Open Sans Pro</h1><p>is my favourite font</p></div>',
			'<div class="triangle color2"><h1 class="gelatine">&#60;canvas&#62; magic</h1><p>is what I&nbsp;want to be great at</p></div>',
			'<div class="triangle color3"><h1 class="swing">HTML5 and CSS3</h1><p>is what I&nbsp;work with everyday</p></div>', 
			'<div class="triangle color4"><h1 class="hithere">SVG anima- tions</h1><p>is what I&nbsp;will learn on next holidays</p></div>', 
			'<div class="triangle color5"><h1 class="shake">jQuery</h1><p>is easy and fun for me</p></div>', 
			'<div class="triangle color6"><h1 class="squize">Java- Script</h1><p>is an everyday challlenge</p></div>', 
			'<div class="triangle color7"><h1 class="bounce">Sass</h1><p>is my favourite thing</p></div>', 
			'<div class="triangle color8"><h1 class="roll-in">my bike</h1><p>is how I&nbsp;get to places</p></div>', 
			'<div class="triangle color9"><h1 class="spin">Graphic Design</h1><p>is what I&nbsp;have a&nbsp;lot&nbsp;of experi-ence in</p></div>', 
			'<div class="triangle color10"><h1 class="swing">NGO`s and Start-ups</h1><p>is where I&nbsp;like working</p></div>', 
			'<div class="triangle color11"><h1 class="bounce">modern art</h1><p>is what I`m inter-ested in</p></div>', 
			'<div class="triangle color12"><h1 class="wave">Art- books</h1><p>is some-thing I&nbsp;will always loook at</p></div>', 
			'<div class="triangle color13"><h1 class="wobble">Photo- graphy</h1><p>is what I&nbsp;studied and still like</p></div>',
			'<div class="triangle color14"><h1 class="hithere">coding</h1><p>is what I&nbsp;want to do for living</p></div>',
			'<div class="triangle color15"><h1 class="flash">Bongo!</h1><p>is my dog`s name</p></div>',
			'<div class="triangle color16"><h1 class="shake">digital nomad</h1><p>is the way of life for me</p></div>',
			],
		content = [],
		activeBlocks = [],
		timer,
		active = 0,
		points = 0,
		moves = 0;

	function createMemoBlocks() {
		for (var i = 0; i < myContent.length; i++) {
			for (var j = 0; j < 2; j++) {
				content.push({
					id: i+1,
					inside: myContent[i]
				});
			}
		}
		shuffle(content);
		for (var i = 0; i < content.length; i++) {
			blocks[i].dataset.inside = content[i].inside;
			blocks[i].dataset.id = content[i].id;
		}
	}

	function shuffle(array) {
	    var currentIndex = array.length, 
	    	temporaryValue, 
	    	randomIndex;
	    while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
	    }
	    return array;
	}

	createMemoBlocks();
	console.log(blocks);

	for (var i = 0; i < blocks.length; i++) {
		blocks[i].addEventListener('click', function(){
			activeBlocks = document.querySelectorAll('.active');
			active ++;
			if (activeBlocks.length < 2){
				this.classList.add('active');
				this.innerHTML = this.dataset.inside;
			}
			activeBlocks = document.querySelectorAll('.active');
			if (activeBlocks.length === 2 && active === 2) {
				if (activeBlocks[0].dataset.id === activeBlocks[1].dataset.id) {
					timer = setTimeout(hit, 2000);
				}
				else {
					timer = setTimeout(missed, 2000);
				}
				moves ++;

			} else if (active > 2) {
				if (activeBlocks[0].dataset.id === activeBlocks[1].dataset.id) {
					window.clearTimeout(timer);
					hit();	
				}
				else {
					window.clearTimeout(timer);
					missed();
				}
				moves ++;
			} else if (activeBlocks.length === 1 && active === 2) {
				active = 1;
			}
			if (points === 16) {
				console.log('PORTFOLIO');
			}
		});
	}

	function missed() {	
		activeBlocks = document.querySelectorAll('.active');
		for (var i = 0; i < activeBlocks.length; i++) {
			console.log(activeBlocks[i]);
			activeBlocks[i].removeChild(activeBlocks[i].querySelector('.triangle'));
			activeBlocks[i].classList.remove('active');
			active = 0;
		}
	}

	function hit() {
		activeBlocks = document.querySelectorAll('.active');
		for (var i = 0; i < activeBlocks.length; i++) {
			activeBlocks[i].classList.remove('active');
			activeBlocks[i].classList.add('gone');
			active = 0;
			points ++;
		}
	}

});