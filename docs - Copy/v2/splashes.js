var isKb = 1;
var projectversion = '2.0';
var fMath = new FMath();



function loadSplash(splashIndex, magnitude, color) {
	var newLineCounter = 0;
    var s = splashes_keyboard[splashIndex];
    var sFinal = '';
	var sFinalOutline = '';
    for (let i = 0, len = s.length; i < len; i++) {
		if (s[i] === ' ') {
			newLineCounter++;
		}
		//newLineCounter++;
        //var a = Math.random() * Math.PI * 2;
        //var dx = Math.cos(a + i) * magnitude;
        //var dy = Math.sin(a + 1) * magnitude;
		var dx = getRndInteger(-magnitude, magnitude);
		var dy = getRndInteger(-magnitude, magnitude);
		
        // const element = s[i];
        sFinal = sFinal + '[offsetx=' + dx + '][offsety=' + dy + ']' + s[i] + '[/offsety][/offsetx]';
		if (newLineCounter > 3) {
			sFinal += '\n';
			newLineCounter = 0;
		}
		//sFinal = sFinal + '[offsetx=' + dx + 'offsety=' + dy + ']' + s[i] + '[/offsety /offsetx]';
    }
    sFinalOutline = '[color='+color+']' + sFinal + '[/color]'
    //return sFinalOutline;
	return sFinal;
}

function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

var specialMonth = 8;
var specialDay = 28;

function getDavidDate() {
	var rightNow = new Date(Date.now());
	if (rightNow.getMonth() === specialMonth && rightNow.getDate(rightNow) === specialDay) {
		return 1;
	}
	return 0;
}

function wobbleText (text, magnitude, speed, time, doOneLine, nColor) {
    var sFinal = '';
	var newLineCounter = 0;
	for (let i = 0, len = text.length; i< len; i++) {
		if (text[i] === ' ' && doOneLine === 0) {
			newLineCounter++;
		}
		var a = Math
		//var dx = Math.cos((time + i) * speed) * magnitude;
        //var dy = Math.sin((time + i) * speed) * magnitude;
		var dx = fMath.cos((time + i) * speed) * magnitude;
        var dy = fMath.sin((time + i) * speed) * magnitude;
        sFinal = sFinal + '[offsetx=' + dx + '][offsety=' + dy + ']' + text[i] + '[/offsety][/offsetx]';
		if (newLineCounter > 2) {
			sFinal += '\n';
			newLineCounter = 0;
		}
        //sFinal = sFinal + '[offsety=' + dy + ']' + text[i] + '[/offsety]';
	}
	//sFinal = '[outline=#ffffff][color=' + nColor + ']' + sFinal + '[/color][/outline]';
	sFinal = '[color=' + nColor + ']' + sFinal + '[/color]';
	return sFinal;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function setKeyboardOrTouch (isKeyboard) {
	isKb = isKeyboard;
}

function getSplashAmnt() {
	if (isKb === 1) {
		return splashesLengthKb;
	} else {
		return splashesLengthTouch;
	}
}


//Mario

function marioShake(doReturnX, magnitude){
	var a = Math.random() * Math.PI * 2;
	if (doReturnX) {
		//return 726 + Math.cos(a) * magnitude;
		return 726 + fMath.cos(a) * magnitude;
	} else {
    	//return 726 + Math.sin(a) * magnitude;
		return 246 + fMath.sin(a) * magnitude;
	}
}
var splashes = [
	"It's DAVID!",
    "It b DAVID!!",
    "It is DAVID my dudes",
    "COOL AND NEAT",
    "david 2",
    "who is david",
    "who this man",
    "dere he is",
    "look at he go",
    "he likes cola",
    "i mean okay i guess",
    "DAVIDCOLA",
    "wait for davidcola 2",
    "some, body once",
    "why he erry were",
    "webzone fivattew.com",
    "are we viral yet",
    "featuring Minecraft!",
    "did naruto run that once",
    "Consummate  V's!",
    "It is david, my dude's",
    "P E P I S",
    "Paul Beenis!",
    "He likes cola thats why its davidcola",
    "D A V I D C O L A",
    "k",
    "Please sponsor us Cocacola",
    "Please sponsor us Minecraft",
    "Please sponsor us HISD",
    "david you kind of brought this on urself",
    "I said CONSUMMATE!",
    "running out of ideas",
    "How 2 do the naruto run",
    "You're almost at the end, keep going!",
    "david's in the Kool Cid's Klub",
    "I like DAVID",
    "Please sponsor us Arma 3",
    "Did i mention the naruto run we have it on video",
    "DAVIDCOLA will become an actual drink soon i hope",
    "@cocacola make davidcola happen",
    "@Nintendo make Davidcola on switch happen please",
    "Ugandan Cola",
    "He does it!",
    "2 mil retweets and I will buy the rights to david",
    "2 mil retweets and I will buy the rights to cocacola",
    "David Cardboard",
    "Marion and davidi",
    "and what the hell is on David's head",
    "and what the hell is on joey's head",
    "Cyanide and David",
    "Pop team david",
    "Doki-Doki David club",
    "Quench your thirst with Davidcola™",
    "Every time is like cola time",
    "Goddamnit david shut up",
    "Experience Brown Water",
    "the book was better",
    "Also check out our sister product, DavidPepsi!",
    "Elephants approve!",
    "look at them sodas fly...",
    "Great for Blackface!",
    "Used in dog food!",
    "Very Comfortable!",
    "Dream big!",
    "RFID proof",
    "I spent way too long on this",
    "May contain hair",
    "Refreshing I guess",
    "Y'know we never specified this was liquid",
    "Check your Email!", 
    "I did not hit her! I DIDN'T DO IT!", 
    "David Wizeau",
    "Version " & projectversion & "!", 
    "Adding new splashes while I'm at it!", 
    "How many of these are there!?!?", 
    "01000100\n01000001\n01010110\n01001001", 
    "One Punch David", 
    "KonoDavid", 
    "Huge Basketball David!", 
    "Davidcola 2", 
    "'david's game'", 
    "it is wednesday, my davids", 
    "David is love, David is life", 
    "Real fake DAVIDCOLA!", 
    "WE WILL REGAIN THE MARKET", 
    "D A V I D C O L A D A V I D C O L A D A V I D C O L A D A V I D C O L A D A V I D C O L A ", 
    "Original music!",
    "Closed source!", 
    "The info text changes!", 
    "Genderfluid!", 
    "A Hat in David", 
    "Dooka-Yavid", 
    "Doesn't support VR!", 
    "May cause blindness", 
    "New soap flavor!", 
    "An eskimo favorite!", 
    "best used by yesterday", 
    "Library of David", 
    "David approved!", 
    "Cavid Dola!", 
    "Under new management!", 
    "Now fully cooked!", 
    "Made in Construct3!", 
    "david really hates this website lol", 
    "heck yeah...", 
    "Art made with PDN!", 
    "Tide Pod David", 
    "David Challenge", 
    "No one is around to help.", 
    "~~~AAAAAAAAA~~~",
    "Now featuring Skyrim!", 
    "Now featuring Mikersoft Excel!", 
    "Now featuring Tom Fucking Hanks!", 
    "Now featuring Dustiness Lalatina!", 
    "Anime-free!", 
    "Anime-filled!", 
    "you fucking lyve pyra alone", 
    "Cash not included", 
    "some assembly required", 
    "used in icebergs", 
    "Whoa! Looking cool, David!",
    "Only partially rasist", 
    "Skates like a pro!",
    "Seven Dollar dog!", 
    "Boing Nutt Litty!", 
    "OwO what's this?",
    "Hates Ajit Pai!", 
    "Pro Net Neutrality!", 
    "Speedrunner friendly!", 
    "Why the hell is Apple still relavant in the industry", 
    "can sometimes fly", 
    "can sometimes fly, but only sometimes", 
    "welcome to the \n -DAVID ZOME-", 
    "daviDivad \n colAloc", 
    "Kind of Dragon-free!", 
    "PB&J Sandwiches!", 
    "Doesn't condone piracy!", 
    "Wears skin-tight jeans!", 
    "Watch out for his body rolls!", 
    "yOUR WAIFU IS SHIT", 
    "works all week long!", 
    "Now with more anime referecnes!", 
    "Go watch KonoSuba!", 
    "Go watch Pop Team Epic!", 
    "Go watch Narut-Ptff, haha", 
    "Hatsune David", 
    "Traps are not gay!", 
    "Traps are gay!", 
    "Go watch Siivagunner!", 
    "Go watch VvvvvaVvvvvvr!", 
    "David Pissing", 
    "David stole the precious cola!", 
    "Go watch Dragon Ba- PTFFF haha yeah right", 
    "DAVID is cool!", 
    "Contrary to popular belief, Siivagunner IS NOT an anime", 
    "david cola is not funny",
    "According to all known laws of avaitio", 
    "The movie was better", 
    "You have not seen all of these, I guarentee it", 
    "Take off and David!", 
    "David must be found!", 
    "DAVID!", 
    "We love you, DAVID!", 
    "The bianary splash has a line cut out but that's OK", 
    "David Wurtz", 
    "Maybe you should go do somthing productive...", 
    "A David is forever", 
    "A David a day helps you work, rest, and play!", 
    "Boys like David like David", 
    "David, take me away!", 
    "Ah! David!", 
    "Finger Licken' Good!", 
    "Fair and balanced!", 
    "Got David?", 
    "I can't believe I ate the whole thing!",
    "Don't let your dreams be David!", 
    "Put a David in your tank!", 
    "Where's the beef?", 
    "Please sponsor us @sonic_hedgehog!", 
    "DAMN.", 
    "http://fivattew.com/davidcola!", 
    "Now with 4:3 support! (joke btw)", 
    "David can't play video games!", 
    "lit", 
    "no u", 
    "Number 15: Burger King Foot Lettuce!", 
    "DaVR: The David VR experience", 
    "The DS in Nintendo DS stands for Dick Suck. The idea was, playing it was as fun as gettin your dick sucked. 3DS, as fun as 3 dick sucks.", 
    "oof", 
    "god i never really realized but but kahoot's music is really fucking good isn't it the entire composition of every song is pure genius, i really hope they release an album", 
    "David for smash", 
    "David Amiibo", 
    "Winnie the poop 2", 
    "Michal JAJ", 
    "h*ck your sweating clown's dick egg", 
    "Barack Obama was created by Jason!", 
    "Barack Obama was created by David!", 
    "David was created by Barack Obama!", 
    "Hey, VSAUCE. Michael here", 
    "Hey, VSAUCE. David here", 
    "I hope you are all ready to see hatsune's miku", 
    "I'm Scott, president of Dominos Pizza", 
    "I'm David, president of Dominos Pizza", 
    "the word queue is q folowed by 4 silent letters", 
    "Suck an egg from Danny Devito", 
    "thinking abt renaming Davidcola to Undertale 2 what u think", 
    "Pee is stored in the balls!", 
    "Poo is stored in the dick!", 
    "Davidcola. It's like no other game you've ever played.", 
    "David belongs to the Nords!",
    "I want Mario to give me a vasectomy", 
    "I want David to give me a vasectomy", 
    "Beesechurger",
	"Imagine DAVIDCOLA, but like, it's good", 
    "The new splashes aren't funny m8", 
    "Please sponsor us, @BIT.TRIP!", 
    "there's this girl in my english class and she's really annoying all she doess is complain", 
    "Made by Cam Fivattew!", 
    "Made by DAVID!", 
    "Made with real DAVID!", 
    "Skyrim belongs to the David!", 
    "More like GAYvid cola amirite ahaha", 
    "I only made version 1.5 b/c chrome decided to break everything", 
    "my ultimate dream would be for someone to stumble accross this thing randomly w/o context",  
    "Pride and Accomplishment!", 
    "A DAVIDCOLA game is in development!", 
    "David tu Colita!", 
    "Davpacito 2!", 
    "Please help my name is David and i am trapped in this webzone", 
    "DAVIDCOLA isn't affiliated with CocaCola, inc!", 
    "David-Kun!", 
    "DAVIDCOLA was the worst mistake I ever made", 
    "Now featuring Michalsoft Excel!", 
    "Spellling is correct!", 
    "Thank you for, DAVIDCOLA",
    "Welcome to, DAVIDCOLA", 
    "This is it: DAVIDCOLA", 
    "Watch out for, DAVIDCOLA", 
    "Can you find the secret Mario?", 
    "sudo apt-get install DAVIDCOLA",
    "most of the early splashes were bad marketing slogans, but now they're just memes",
	"Squeaky clean!", 
	"Reflective!",
	"Loves minorities!",
	"Man, idk how david does that w/o getting dizzy",
	"With a hip and a hop and a skibib and skidop", 
	"David makes the laws here.",
	"Jetpack not included!",
	"Now using Javascript!", 
	//"There are " + getSplashAmnt() + " splashes in total!",
	"Now resource intensive!", 
	"Who were you, DenverCoder9! What did you see!",
	"I'ev redone the DAVIDCOLA song like 3 times!", 
	"Made in Michalsoft Excel!",
	"What David?",
	"sup",
	"Wants to buy some motherfuckin potions!",
	"More than 20 splashes!",
	"Oh god, he doesn't have anything else to do",
	"He bought a freaking domain for it?",
	":cryLaughingEmoji:",
	"Likes to paint!",
	"3000 grams of saturated fat!",
	"In David we trust!",
	"Steam powered!",
	"Very good!",
	"Good!",
	"Featuring Minecrap!",
	"Davidstuck!",
	"Sooths irritated skin!",
	"Not avalible on console!",
	"Always wears camo!",
	"Only mildly radioactive!",
	"Works on dandruff!",
	"Please sponsor us SHSU!",
	"wait this isnt google",
	"Batteries not included!",
	"Super DAVID Odyssey!",
	"Legend of DAVID, breath of the cola.",
	"Contains real horse!",
	"Remote controlable!"
]

var kbSplashes = [
    "Alt-F4 for secret",
    "every time you click a squirrel dies",
    "every time you click a squirrel gives birth",
    "every time you click david drinks another cola",
    "Every time u click david doesn't give birth b/c he is male",
    "Press 'h' to view info!", 
    "Press 'h' to view info!", 
    "Shift + 'm' for a secret!", 
    "Press shift + 'v' for a secret!", 
    "Whoa, you're using a mouse and keyboard!", 
	"Press Backspace + 'h' for a secret!", 
	"You will never see this splash by touching the screen, isn't that weird?", 
]

var touchSplashes = [

	"Press home button for secret",
	"every time you tap a squirrel dies", 
	"every time you tap a squirrel gives birth", 
	"every time you tap david drinks another cola", 
	"Every time u tap david doesn't give birth b/c he is male", 
	"Double-tap 'I' in DAVIDCOLA to view info!", 
	"Double-tap 'I' in DAVIDCOLA to view info!!", 
	"Tap and hold the 'L' in DAVIDCOLA for a secret!", 
	"Tap and hold the 'V' in DAVIDCOLA for a secret!", 
	"Whoa, you're touching the screen!", 
	"Pride and Accomplishment!", 
	"Double-tap the version number for a secret!",
]


var splashes_keyboard = splashes.concat(kbSplashes);
var splashes_touch = splashes.concat(touchSplashes);

var splashesLengthKb = splashes_keyboard.length - 1;
var splashesLengthTouch = splashes_touch.length - 1;
