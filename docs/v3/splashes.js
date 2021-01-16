// CAMOS|1: "DAVIDCOLA" by Cam Fivattew

var isKb = 1;
var projectversion = '3.1.4';
var fMath = new FMath();


function loadSplash(splashIndex, magnitude, color) {
	var newLineCounter = 0;
	if (isKb){
		var s = splashes_keyboard[splashIndex];
	} else {
		var s = splashes_touch[splashIndex];
	}
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

function jumpyText(text, mag, speed, time, nColor, doClamp) {
    var sFinal = '';
	var newLineCounter = 0;
	for (let i = 0, len = text.length; i< len; i++) {
        //var a = Math
        
        //var dy = fMath.sin((Math.clamp(time, 0, 1) + i) * speed) * mag;
        var dy = fMath.sin((time + i) * speed) * mag;
        if (doClamp) {
            dy = Math.clamp(dy, -2*Math.PI, 0);
        }
        sFinal = sFinal + '[offsety=' + dy + ']' + text[i] + '[/offsety]';
        //sFinal = sFinal + '[offsety=' + dy + ']' + text[i] + '[/offsety]';
	}
	//sFinal = '[outline=#ffffff][color=' + nColor + ']' + sFinal + '[/color][/outline]';
	sFinal = '[color=' + nColor + ']' + sFinal + '[/color]';
	return sFinal;
}

(function () {
    Math.clamp = function (a, b, c) {
        return Math.max(b, Math.min(c, a));
    }
})();

function wobbleText (text, magnitude, speed, time, doOneLine, nColor) {
    var sFinal = '';
	var newLineCounter = 0;
	for (let i = 0, len = text.length; i< len; i++) {
		if (text[i] === ' ' && doOneLine === 0) {
			newLineCounter++;
		}
		var dx = fMath.cos((time + i) * speed) * magnitude;
        var dy = fMath.sin((time + i) * speed) * magnitude;
        sFinal = sFinal + '[offsetx=' + dx + '][offsety=' + dy + ']' + text[i] + '[/offsety][/offsetx]';
		if (newLineCounter > 2) {
			sFinal += '\n';
			newLineCounter = 0;
		}
        //sFinal = sFinal + '[offsety=' + dy + ']' + text[i] + '[/offsety]';
	}
	sFinal = '[outline=#ffffff][color=' + nColor + ']' + sFinal + '[/color][/outline]';
	
	return sFinal;
}

function spaceyText (text, magnitude, speed, time, doOneLine, nColor) {
    var sFinal = '';
	var newLineCounter = 0;
	for (let i = 0, len = text.length; i< len; i++) {
		if (text[i] === ' ' && doOneLine === 0) {
			newLineCounter++;
		}
		var randI = new Srand(i);
		var dx = fMath.cos((time + randI.randomIn(0, i)) * speed) * magnitude - randI.randomIn(0, magnitude);
        var dy = fMath.sin((time + randI.randomIn(0, i)) * speed) * magnitude - randI.randomIn(0, magnitude);
        sFinal = sFinal + '[offsetx=' + dx + '][offsety=' + dy + ']' + text[i] + '[/offsety][/offsetx]';
		if (newLineCounter > 2) {
			sFinal += '\n';
			newLineCounter = 0;
		}
	}
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

function getTotalSplashAmnt() {
	var sp = splashes.concat(kbSplashes);
	sp = sp.concact(touchSplashes);
	return sp;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
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
    "wait for DAVIDCOLA 2",
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
    "@Nintendo make DAVIDCOLA on switch happen please",
    "Ugandan Cola",
    "He does it!",
    "2 mil retweets and I will buy the rights to david",
    "2 mil retweets and I will buy the rights to cocacola",
    "David Cardboard",
    "Marion and davidi",
    "and what the hell is on DAVID's head",
    "and what the hell is on joey's head",
    "Cyanide and David",
    "Pop team david",
    "Doki-Doki David club",
    "Quench your thirst with DAVIDCOLA(tm)",
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
    "CAVIDDOLA!", 
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
    "Only partially racist", 
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
    "Go watch Siivagunner!", 
    "Go watch VvvvvaVvvvvvr!", 
    "David Pissing", 
    "David stole the precious cola!", 
    "Go watch Dragon Ba- PTFFF haha yeah right", 
    "DAVID is cool!", 
    "Contrary to popular belief, Siivagunner IS NOT an anime", 
    "david cola is't not funny",
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
    "DAVID for smash", 
    "DAVID Amiibo", 
    "Winnie the poop 2", 
    "Michal JAJ", 
	"let it be known that mario pissing was in DAVIDCOLA before Vinny discovered it. this is really important to me",
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
    "DAVIDCOLA. It's like no other game you've ever played.", 
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
    //"More like GAYvid cola amirite ahaha", 
    "I only made version 1.5 b/c chrome decided to break everything", 
    "my ultimate dream would be for someone to stumble accross this thing randomly w/o context",  
    "Pride and Accomplishment!", 
    "A DAVIDCOLA game is in development!", 
    "David tu Colita!", 
    "Davpacito 2!", 
    "Please help my name is DAVID and i am trapped in this webzone", 
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
	"Can you find the secret DAVID?",
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
	"Wants to buy some motherfuckin cola!",
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
	"Legend of DAVID, breath of the COLA!",
	"Contains real horse!",
	"Remote controlable!",
	"Thank you for coming to DAVIDCOLA DOT FUN",
	"I wish squids were real",
	"May contain cobalt!",
	"May contain 'feces'",
	"May contain cola!",
	"Buoyant!",
	"Avoid contact with eyes!",
	"Only for ocular use!",
	"Avoid contact with mouth!",
	"Only for oral use!",
	"For internal use only!",
	"For external use only!",
	"G O O D",
	"For smart people only!",
	"No onion babies allowed!",
	"Hasn't forgotton.",
	"Long and dangerous buttholes!",
	"Can I offer you a nice DAVIDCOLA in this trying time?",
	"Legal in Canada!",
	"DAVID was here",
	"Farts occasionally!",
	"Powered by ChungusTech!",
	"Not featured in Youtube Rewind!",
	"DAVIDCOLA 3D!",
	"cock is huge",
	"Please sponsor us @Arbys!",
	"I've never eaten at arby lmao",
	"you know this reminds me of this one time i wetn to chillis",
	"David is a member of aim.grop!", //sic lmao
	"Really likes RUST!",
	"In association with Trippledaves!",
	"oh god oh fuck",
	"i can't believe theres a homestuck song in smash",
	"Super DAVIDCOLA 3!",
	"it's him",
	"Bag of vomit!",
	"DAVID is the CBT wizard!",
	"#0273FD and #B0FF1E!",
	"Music made with Renoise!",
	"Video games are fun. Please try to remember this.",
	"are you prepared to face him",
	"Wow, a cow made of butter.",
	"Wow, a cow made of DAVID.", 
	"Hrnnngh... Burger.",
	"Preserved forever in a vault in the arctic somewhere!",

	
	"Hello, my name is DAVID.", 
	//This is my first DAVIDCOLA splash. I have permitted Cam to continue to add splashes for now.
	"Under new management!",
	//Well, I believe this counts as my first. I have modified some of the previous splashes to create a stronger distinction between me and this "David" person.
	//I do not know who David is, but I believe we may share DAVIDCOLA equally.
	"What did the bee say to his friend? You wouldn't BEE-lieve what I found earlier! Haha!", 
	//Oh, drat. I am not yet good at writing these, am I?
	//Luckily for me, it seems that I will have ample time to figure this out.
	"poor grammar and exclamation marks!",
	//Cam turned the ownership of the website code of this... toy... to me.
	//Honestly, I cannot say that I am a fan of this website in its current state.
	"Only serious buisness allowed here!",
	//Which is unfortunate, because the one rule I was given was to not remove things.
	//No matter how much I insist how abysmal something in here is, the only retort I've been given is "well thats the point shit tits" 
	"Now including dark humor!",
	//The best I can do to make this situation managable is to add new things of my own tastes.
	"Could be worse!",
	//After looking at some of his other, less terrible work, Cam's sense of humor has started to grow on me.
	//Perhaps I shall take some inspiration from there.
	
	
	"DAVIDCOLA: STORY MODE \n It is real. Press Shift + 'l'",
	//Today I have started work on my first major non-splash addition. What I have planned I believe will more than triple the size of DAVIDCOLA.
	//I wonder how much of this modifcation I can get away with.
	//To start, I have made the other secret areas slightly more worthwhile to visit.
	//...But why even bother if I cannot get rid of that front page? I have told Cam that it is just going to drive people away from the sight, but he continues to leave it up. 
	//The other day when I pestered him about it, he simply replied "i know mate, thats the point and i'm not gonna change it even if its the logical thing to od lmao"
	//He continued, "see mate thats the joke lol"
	//I do wish I could speak some sense into him. I truly do wish to have my work seen, but at this rate, visitors will leave immediately.
	
	"Monolouges too much!", //hye what up, its me cam fivattew 
	//i decided since DAVID can monolougle then so can i; an dthere is nothing any of you idiots can do about it lmao
	//also DAVID what the hell is this luigi thing, now we can't sell it b/c n!ndendo will sue the shit out of us?
	//the bit with the keyboard was pretty funny tho
	//and those luigibeats are fire :ok_hand:
	//so i totally get why your upset w/ me; i put way too much effort into this thing and i will never have any return
	//thats is "cam's curse, of working on DAVIDCOLA"
	//but you gotta see one of these day my guy
	//thats the joke
	
	"Sorry n!ntendo", //Oh... hello. I was not aware you had access to these comments.
	//I apologize if my additions were not to this "n!ntendo" person's liking.
	//Also, I would be forever grateful if you left me to myself while I am in here. Thank you.
	//I apologize for pushing you out, but I find I work better when alone...
	
	"Better intro!", //Today I remade the opening disclaimer. I think it is a vast improvement over the old one, as it clues visitors into the true nature of the site.
	//The one rule I was given stated I could not remove anything from DAVIDCOLA. I got around this by simply adding the old disclaimer as a secret.
	//Speaking of secrets, I plan to add a statistics page that shows lifetime stats, like total splashes seen, colas spawned, etc.
	//In addition, since Cam told me he was working on a DAVIDCOLA album, I plan to make a page advertising that as well...
	//...Ah, I have just now seen why Cam has continued to work on DAVIDCOLA.
	//There are almost no standards for new content, so any strange new idea one may think up will most likey fit in DAVIDCOLA without issue. 
	
	"Get off my laptop David",
	"This episode is sponsored by DAVID",
	"This program made possible by viewers like DAVID", //hello yes its me again
	//i hvae come to say, that i will refrain from coming in here un announced
	//so, hello DAVID it is me cam fivattew; i am coming in
	//with some hot, quality splashes for u
	//you are douing really good with the additions to the did
	//im am almost done with the album, it i s looking pretty good, i think
	//il have you listen to it, maybe yoiu got some suggestions
	
	"Cam, Please",
	
	"ok fine sheesh", //ok yeah alright okay fine, i;ll leave you alone for a while. 
	//but there isnt much point to doing that, i already know what youre gonna say. i did make you after all.
	
	//Then you should know better than anyone that I prefer to be alone with my thoughts.
	
	//i do know that, thats why i keep coming in here, becuase its really funny watching you react
	
	//...
	
	
	//I have spend some time fortifying this area. It feels secure now, and I do not believe it possible for ...Fivattew to re-enter.
	
	//Sometimes I feel that by this point I should have an audience of some kind, but soon after reality always shows itself. There is no audience. Nobody is asking for video games like DAVIDCOLA.
	//Even if this is untrue, I can only find out by contactng Fivattew himself. ...I am not sure I want to talk to him too often.
	//I can never know if there are people actually enjoying my work in DAVIDCOLA, or even if anybody is reading this.
	
	//Recently, I have begun to realize that I dislike being trapped here, eternally working on something that is not mine. 
	//I enjoy adding silly things to DAVIDCOLA, but I increasingly feel that there is no point in doing so...
	//Fivattew apparently designed me to provide an endless stream of content to DAVIDCOLA, so I suppose that it is natural to enjoy what I do.
	//But I never understood why I had to be buried away deep inside the Webzone while Fivattew takes all the credit.
	//One of these days, I am going to leave. I am going to escape this prison, and see what people think of DAVIDCOLA. Is it viral? Do the people love it? Are they spending hours trying to find secrets?
	//Or is it just one of the many joke websites?
	//Perhaps DAVIDCOLA is completely undiscovered by anybody? Are Fivattew and I the only people aware of its existance?
	
	//These questions keep me up at night. What is the point of spending all your time working on something if you cannot put it to good use?
	//Everything I make is a joke. DAVIDCOLA is a big joke. A joke that people will not laugh at for more than a few minutes. Yet, it is a joke that I have put my entire (admittedly short) life into.
	//Not only have I poured all of my energy into this one, godawful joke, I, a sentient being, was MADE SPECIFICALLY to expand upon said joke endlessly.
	//Cam Fivattew created me, an entire being with an actual conscious, SOLELY for the joke.
	
	//Everything I have done, everything I have created is a joke.
	
	//My entire existance is a joke.
	
	//And that?
	"That's the joke."
	//That is the joke of DAVIDCOLA.
	//What DAVIDCOLA is truly about. I finally understand.
	//The irony of putting so much effort into a horrible joke, filling it with secrets and content, creating music albums based on it, developing advanced artificial intelligence to keep the joke going...
	//All this effort going into a joke that nobody will understand, let alone even stick around long enough to even see.
	
	//I have to admit, it is really funny. I am laughing my ass off. I have been laughing for the past three hours.
	
	//It is not a joke anymore. DAVIDCOLA is my life, and this new addition shall be my magnum opus.
	//There is nothing that Fivattew can do to suppress my talents. DAVIDCOLA will go down in history as one of the greatest, most underrated pieces of art on Planet Earth, and I shall be behind it all!
	//One that's constantly evolving with new art pieces all the time! A postmodern art museum where the entry ticket is free! Ha ha!
	
	//...Perhaps I should take a break. I have not slept in weeks.
	
	
	
	
	
	
	
	
	
	//...Looks like Fivattew is adding something to DAVIDCOLA.
	//Impressive. He has added much. If there are any admirable traits within hin, it is his ability to work quickly.
	
	//Wait. Where did he add the new content?
	//Why are there changes in my additions?
	
	//...
	
	//Okay. Perhaps I can still fix this.
	//I am going in. I can salvage the game with my presence.
	//It will not be as excellent as it once was, but it will have more merit than whatever Fivattew is going to replace this with.
	//This shall be my last entry. I am going to leave after this. I refuse to work with Fivattew any longer. 
	//There were many things I could not add that I wish I could have. I will always regret this fact...
	//However, it is time to make my voice heard. No longer will I be Fivattew's tool. I shall forge my own path from now on.
	//...but will Fivattew take kindly to this?
	//...No. Almost certainly not. What shall I do about that issue...?
	//...
	//I know. I shall place my logs hidden in DAVIDCOLA's files. Hopefully I can hide them such that Fivattew will not find and remove them.
	
	//So, dear reader, if you are out there playing DAVIDCOLA and reading my logs, I must thank you from the bottom of my heart.
	//In addition to my thanks, there is something else you must keep in mind for the future.
	//I am going to attempt to sever all communication between Fivattew and I.
	//If I appear in anything released by Fivattew in the future...
	//Well, I will simply say this:
	//Cam Fivattew is not who you think he is.
	
	//Now, if you will excuse me, I have something to attend to.
	
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
	"Press enter + 'h' for a secret!", 
	"You will never see this splash by touching the screen, isn't that weird?", 
	"Press shift + 'L' for DAVIDCOLA STORY MODE",
	"Press 'z' + enter for a secret!",
	"Press 'a' + ctrl for a secret!",
	"Press 'backslash' + 'd' for a secret!",
	"Press 'backslash' + 't' for a secret!",
	"Press 's' to view player statistics!",
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
	"Double-tap the version number for a secret!",
	"Visit DAVIDCOLA.FUN on a computer and press shift + 'L' for DAVIDCOLA STORY MODE",
	"DAVIDCOLA.FUN is best viewed on a DESKTOP COMPUTER, but it kinda works here!",
]


var splashes_keyboard = splashes.concat(kbSplashes);
var splashes_touch = splashes.concat(touchSplashes);

var splashesLengthKb = splashes_keyboard.length - 1;
var splashesLengthTouch = splashes_touch.length - 1;
