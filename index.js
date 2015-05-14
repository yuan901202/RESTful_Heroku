//NWEN 304 Project 1
//Student Name: Tianfu Yuan
//Student ID: 300228072
//Username: yuantian 


var express = require('express')
   , cors = require('cors');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(cors());

// hardcoded data
var myPeoples = {"peoples" : [ {"name" : "Ian Welch", "id" : "0"}, {"name" : "Aaron Chen", "id" : "1"} ]};
var myStories = {"stories" : [ {"title" : "Pharrell-Williams interview", "id" : "0"},
                {"title" : "New York Times: Snowfall", "id" : "1"},
                {"title" : "Snowden NSA files surveillance revelations decoded", "id" : "2"}]};

//multimedia
var pharrell_vid = [
{ "url" : "http://covercdn.complex.com/custom/pharrell/vid/pharrellTop.mp4"}
];

var nytimes_vid = [
{ "url" : "http://video1.nytimes.com/video/2012/12/17/19224_1_avalanche-allure_wg_16x9_xl_bb_mm.mp4"},
{ "url" : "http://graphics8.nytimes.com/packages/video/multimedia/bundles/projects/2012/AvalancheDeploy/weather_new.mp4"}
];
 
var snowden_vid = [
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p5/p5-1.mp4"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p5/p5-2.mp4"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p5/p5-3.mp4"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p5/p5-4.mp4"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p6/p6-1.mp4"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p6/p6-2.mp4"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p6/p6-3.mp4"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/video/p6/p6-4.mp4"}
];

var myMedia = [];
myMedia[0] = pharrell_vid;
myMedia[1] = nytimes_vid;
myMedia[2] = snowden_vid;

//image
var pharrell_img = [
{ "url" : "http://cdn.covers.complex.com/assets/pharrell/desktop/img/intro/chair.jpg"},
{ "url" : "http://cdn.covers.complex.com/assets/pharrell/desktop/img/scene1/console1.jpg"},
{ "url" : "http://cdn.covers.complex.com/assets/pharrell/desktop/img/scene1/console2.jpg"},
{ "url" : "http://cdn.covers.complex.com/assets/pharrell/desktop/img/scene5/handout.jpg"}
];

var nytimes_img = [
{ "url" : "http://graphics8.nytimes.com/packages/images/multimedia/bundles/projects/2012/AvalancheDeploy/avalanche_crack.jpg"},
{ "url" : "http://graphics8.nytimes.com/images/2012/12/17/sports/AVIE_Debris-slide-GX8I/AVIE_Debris-slide-GX8I-custom1-v3.jpg"},
{ "url" : "http://graphics8.nytimes.com/images/2012/12/17/sports/AVIE_NightSki-slide-87OV/AVIE_NightSki-slide-87OV-custom2.jpg"},
{ "url" : "http://graphics8.nytimes.com/images/2012/12/17/sports/AVIE_NightSki-slide-U5NK/AVIE_NightSki-slide-U5NK-jumbo.jpg"},
{ "url" : "http://graphics8.nytimes.com/images/2012/12/17/sports/AVIE_Path-slide-I9US/AVIE_Path-slide-I9US-custom1.jpg"}
];

var snowden_img = [
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded-extended/interactives/nsa-docs/img/Bullrun_Guide-1.png"},
{ "url" : "http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/img/intro/intro.jpg"}
];

var myImg = [];
myImg[0] = pharrell_img;
myImg[1] = nytimes_img;
myImg[2] = snowden_img;

//text
var pharrell_txt = [
{ "text" : "In 2013, mystery is a rare quality."},
{ "text" : "Undermined by the privacy-obliterating nature of technology, pop culture is largely devoid of mystique, and the mystics have all left the building with the exception of Pharrell Williams. Exactly what makes Skateboard P tick is an open question. How is it that this seemingly ageless creative force has never been more in demand than he is right now, at age 40, newly married, with a five-year-old son to look after? We can't tell you. Nobody can. But everyone can tell you this: Whether you are trying to build out an album of undeniable hits, or a sartorial statement piece that as guaranteed to fly off shelves, you want Pharrell (and whatever it is that makes him tick) involved. Maybe he's simply built differently. After all, this is a guy who claims to have synesthesia, a neurological condition that allows him to see sounds as colors. Is it all about his brain wiring? Or perhaps as the extraterrestrial themes in his branding (The Neptunes production team, the Star Trak label, the Billionaire Boys Club astronaut logo) would suggest something not of this Earth?"},
{ "text" : "When I first met with Pharrell in early June, he was in SoHo, doing press for the 10th anniversary of his Billionaire Boys Club/Icecream brand, a line that has provided the cool-guy uniform for everyone from forward-thinking style students to Jay Z. A parade of reporters and cameramen moved in waves through the spaceship-meets-ice-cream-shop-themed retail store, and dressed in cutoff denim shorts, a green army jacket, and a Comme des Garcons tee, Pharrell dabbed away the excess oil from his pizza. After conducting back-to-back interviews in the back office for a few hours, he told his publicist he wanted to switch up the energy and field Complexes questions outside. Coming from someone else, this might seem a fussy demand from a high-maintenance artist. Coming from Pharrell, it is assumed that his attention to tiny details will lead to something better. Call it instinct, or just a whim Pharrell's impulses aren't something you parse or ponder. Just trust it. In other words: When a mystic talks, you listen. So we did, settling in on a West Broadway stoop across from the store, trying our best to crack the Pharrell Williams code. Easier said than done."}
]; 

var nytimes_txt = [
{ "text" : "The snow burst through the trees with no warning but a last-second whoosh of sound, a two-story wall of white and Chris Rudolphes piercing cry: Avalanche! Elyse!"},
{ "text" : "The very thing the 16 skiers and snowboarders had sought fresh, soft snow instantly became the enemy. Somewhere above, a pristine meadow cracked in the shape of a lightning bolt, slicing a slab nearly 200 feet across and 3 feet deep. Gravity did the rest."},
{ "text" : "Snow shattered and spilled down the slope. Within seconds, the avalanche was the size of more than a thousand cars barreling down the mountain and weighed millions of pounds. Moving about 7o miles per hour, it crashed through the sturdy old-growth trees, snapping their limbs and shredding bark from their trunks."},
{ "text" : "The avalanche, in Washington's Cascades in February, slid past some trees and rocks, like ocean swells around a ships prow. Others it captured and added to its violent load."},
{ "text" : "Somewhere inside, it also carried people. How many, no one knew."}
];

var snowden_txt = [
{ "text" : "When Edward Snowden met journalists in his cramped room in Hong Kong's Mira hotel in June, his mission was ambitious. Amid the clutter of laundry, meal trays and his four laptops, he wanted to start a debate about mass surveillance."},
{ "text" : "He succeeded beyond anything the journalists or Snowden himself ever imagined. His disclosures about the NSA resonated with Americans from day one. But they also exploded round the world."},
{ "text" : "For some, like Congresswoman Zoe Lofgren, it is a vitally important issue, one of the biggest of our time: nothing less than the defence of democracy in the digital age."}
];

var myText = [];
myText[0] = pharrell_txt;
myText[1] = nytimes_txt;
myText[2] = snowden_txt;

// nuber of stories
app.get('/v1/stories', function(request, response) {
    response.send(myStories);
});

app.get('/v1/stories/count', function(request, response) {
    response.send({"count" : myStories.stories.length});
});

//story for text
app.get('/v1/story/:id/text/count', function(request, response) {
    if(myStories.stories.length <= request.params.id || request.params.id < 0) {
    	return response.status(400).send({ "error":"Error with ID"});
    }
    response.send({"count":myText[request.params.id].length});
});

app.get('/v1/story/:id/text/all', function(request, response) {
    if(myStories.stories.length <= request.params.id || request.params.id < 0) {
    	return response.status(400).send({ "error":"Error with ID"});
    }
    response.send(myText[request.params.id]);
});

app.get('/v1/story/0/text/:num', function(request, response) {
    if(pharrell_txt.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with text ID"});
    }	
    response.send(pharrell_txt[request.params.num]);
});

app.get('/v1/story/1/text/:num', function(request, response) {
    if(nytimes_txt.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with text ID"});
    }	
    response.send(nytimes_txt[request.params.num]);
});

app.get('/v1/story/2/text/:num', function(request, response) {
    if(snowden_txt.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with text ID"});
    }	
    response.send(snowden_txt[request.params.num]);
});

//story for image
app.get('/v1/story/:id/image/count', function(request, response) {
    if(myStories.stories.length <= request.params.id || request.params.id < 0) {
    	return response.status(400).send({ "error":"Error with ID"});
    }
    response.send({"count":myImg[request.params.id].length});
});

app.get('/v1/story/:id/image/all', function(request, response) {
    if(myStories.stories.length <= request.params.id || request.params.id < 0) {
    	return response.status(400).send({ "error":"Error with ID"});
    }
    response.send(myImg[request.params.id]);
});

app.get('/v1/story/0/image/:num', function(request, response) {
    if(pharrell_img.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with image ID"});
    }	
    response.send(pharrell_img[request.params.num]);
});

app.get('/v1/story/1/image/:num', function(request, response) {
    if(nytimes_img.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with image ID"});
    }	
    response.send(nytimes_img[request.params.num]);
});

app.get('/v1/story/2/image/:num', function(request, response) {
    if(snowden_img.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with image ID"});
    }	
    response.send(snowden_img[request.params.num]);
});

//story for multimedia
app.get('/v1/story/:id/multimedia/count', function(request, response) {
    if(myStories.stories.length <= request.params.id || request.params.id < 0) {
    	return response.status(400).send({ "error":"Error with ID"});
    }
    response.send({"count":myMedia[request.params.id].length});
});

app.get('/v1/story/:id/multimedia/all', function(request, response) {
    if(myStories.stories.length <= request.params.id || request.params.id < 0) {
    	return response.status(400).send({ "error":"Error with ID"});
    }
    response.send(myMedia[request.params.id]);
});

app.get('/v1/story/0/multimedia/:num', function(request, response) {
    if(pharrell_vid.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with multimedia ID"});
    }	
    response.send(pharrell_vid[request.params.num]);
});

app.get('/v1/story/1/multimedia/:num', function(request, response) {
    if(nytimes_vid.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with multimedia ID"});
    }	
    response.send(nytimes_vid[request.params.num]);
});

app.get('/v1/story/2/multimedia/:num', function(request, response) {
    if(snowden_vid.length <= request.params.num || request.params.num < 0) {
	return response.status(400).send({ "error":"Error with multimedia ID"});
    }	
    response.send(snowden_vid[request.params.num]);
});




// how many people are there?
app.get('/v1/peoples/count', function(request, response) {
    response.send({ count : myPeoples.peoples.length });
});

// an example of extracting a parameter from a URI request
app.get('/v1/peoples/:name/hello', function(request, response) {
    response.send("Hello " + request.params.name);
});

// we can also return errors, lets do it every time
app.get('/v1/peoples/error', function(request, response) {
    response.status(404).send({ error : "Let's return an error"});
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
 
