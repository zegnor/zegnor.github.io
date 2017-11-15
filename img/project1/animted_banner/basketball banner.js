(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 720,
	height: 300,
	fps: 26,
	color: "#023059",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/basketball banner_atlas_.png", id:"basketball banner_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"basketball banner_atlas_", frames: [[0,0,1979,1974],[0,1976,1475,1265]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.basketball_PNG1100 = function() {
	this.spriteSheet = ss["basketball banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Thereallogoforposter = function() {
	this.spriteSheet = ss["basketball banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF5A00").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,-53.4,166.9,106.8);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Thereallogoforposter();
	this.instance.parent = this;
	this.instance.setTransform(56,12.2,0.032,0.032,0,15,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,51.3);


(lib.fireh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AoUG6IgSgIIgGgCIgFAAIgCAAIgDAAIAAAAIgCAAIgEAAIgBgBIgaAAIgtgDQgagCgUgEQgXgFgTgHIAOAAIAnAHQAHgBgDgFIgJgLIgFgFIgDgFQgCgFAGgCIBcAMIAVAAIgBgQIghABIg7gHIgfgJIgKgEIgHgGIgCgBIgBAAIAAgBIgJgJIgEgFIAAgBIAAgBIgBgBIgBgBIgCgFQgCgHACgFQADgFAGABIALACIADABIABAAIABAAIAAAAIAFABIACAAIABAAIBAAMIBEAFIAAgBIADAAIALgBIgDgBQgDgBgCgCQgBgDgBgHIgDAAIAHgBQAagCAagHIBlghIgGgOIgXAJIgLgcIBXgvIAAAAIABgBIABAAIAMgIQAMgIAJgIQAKgJAEgHQAKgSgQgMIgWAKIgKgVIgpANIgBAAIgBABIgBAAIAAAAIgDABIgcAIIgkAKIgfAGIgIgWIAIgDIACAAIADgBIAHgEIADgBIADgBQgIAEgKAAIgEgBIgHgCIgCgBIgBgBIgEgBIgBAAIAAgBIgCAAIgHgEIgCgCIgEgCIgBgBIgBAAQgKgIgQgBQgLgBgPACIgHAAIAEAAIgCAAIgDAAIgJAAQgIAAgFgEIgBgBQgCAAACgJIAEgLIgBgBIABAAIAAgBIAAAAIACgDIABgDIABgLIACgBIADgCIACAAIgFgDIACAAIAAABIACABIACAAIACAAIAAAAIgBABIAHAAIAagFIACgBIACAAIABAAIABAAIADgBIACgBIADAAIABgBIABAAIABAAIABgBIAJgDIABgBIAAAAIALgDIADgCIADgBIADgCIADgBIAtgXIACgBIACgBIAEgDIACAAIAAAAIAAgBIAPgGIBKgzQAHgDADgFIABgKQAAgGACgDQACgFAHgEIAfgPQgMgGAAgLQAAgLAJgFQBYg+AxgcQBNgtBCgNIBZgiIASgKIgIgOQAFAHAKgIIAGgEIABgBIACgCQAHgEAEABIAIANQACAEAIgCIAPgHIAHALIAAABIAAAAIAAAAIADgCIgDACIAAgBIAAAAIAEgDIAJgGIAegPIAUgOIAJgKIAHANIAFgEIACgBIACgCIAcgMIACAAIAAAAIABgBIADgBIALgGQAKgFAGgIIAEAMQgCgFACgEIAFgFIAFgDIBlgiIAQgDIAFAAIACAAIADAAIAMgBIACAAIANgBIA/ADIACABIACAAIABAAIAqAIIAqAOIAMAGIADADIABABIAMABIAKAEIANAHIAEAEIAJAFIACABIACABIAAAAIADADIAGACIABAAIABABIAAAAIAHAAQgCAHgGAJIgJANIgBABIAAABIAAgBIgBABIgDAFQgBAEAAAEIAAACIAAAAIAAABIABAEQAAADAEAFQAMANANAbIAYA3IAIAbIACANIABAFIAAACIABABIABADQAEALgBAIQAAAFgCACIgCADIgBABIgBABIgDADIAAABIgDADIgLAIQgNAIgUAIIgjAOQgSAHgFADQgDgBgMAHIgYASIgMAMIgLANIgIAMIgFALIgHgCIgHgBIgFABIgCAFQgCAFABAFIABAEIACAFIAHAHIAEADIABAAIABABIAHAFIABAAIAwAZQAHAMgLASIgGAHIgDADIgEADQgGAHgIAEIgMALIgeAVIgOAIIAAABIgBAAIgBABIgLAHIAJAZIgBAAIAAAAIgKgZIAAAAIgBABIAJAZIgBAAIgyATIgBAAIgBAAIgFAEIgIADQgJADgJACIgNAAIgEAAIgrAAIhMAXQgjANgnAPQgyAUhkAsQhiAsg0AUIiVAzIgMAHIgBAAIAAAAIAAAAIgRAJQgnATgOgHQgXgGgUgDIgLgBIgbgBIgCgBIgIAAIgEABIgDAAIgCAAIgCAAIgmAEQgcAFgeAIQgCgKgLgGg");
	this.shape.setTransform(189.8,58.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF5A00").s().p("AvYK5QAVgJgtgCQgugCAVgIQAkgLAigHIBPgRICWgeIgDgPIlWBKQhbAPgpgFQgRgCgBgFQgBgFAPgHQBkgfCvgnIEMg4QgUADgJgCQgFgCgCgHIC/gsICxgrIC3gxIgEgPIhUAXIgIgdIBYgbQA4gQAugQQBvgkBdglIBVglIA9ggQAYgQAEgJQAEgKgRgDIhQAfIgIgWIhoAhIjcA+IjSAyIgGgWIBigbIgKACIhLANIhFADIgiAAQhNABjYAwImDBSQgcAGgMgGQgGgEgCgJQhnAbiFAXIjyAqIBCgSIBAgQICBggQBVgUCsgmIHchnIGOhkIAAgBIABAAIB6glQBPgaAlgOICshCICBg7IgIAAIg5AJIgCgPIi8AiQglAJgXAJIgCgPIiBAbIgUAGQgKACgGAEIgEgNQACAIgEACQgIAGgbAGQg+ANhDAUIgpANIh2AbIgCAAIh5AcIgBAAIgCAAIgDABIhmAWQgLACAAgCIgmAOIhtAcIgiAPQgDgGAFgNIAKgWQAEgLgGgEQgEgDgIAAIg2ALIgCAAIgDABIgNAEIgDAAIgBAAIABAAIgBAAIhPAUQgjAJgmANQgaAJgqARIhcAnIgBAAIgBAAIgBABIgCAAIgEACIgCAAIgCAAIAAABIgEABIgHABQgGABgCgEQgDgDABgHIADgMIABgDIABgCIAJgYIAUgjQAPgaANgRQASgaAQgTQAQgSAXgZIBahTIAIgFIALgJIACgBIAAAAIAAgBIAzgwIAxg8IAGgKIAEgJQADgJgCgFIA8gWQAbgLgCgFQgCgGgLAAIgNAAIgQABIhZAWQgTAGghAMIgEABIgRAHIgDABIgDABIgnAQIgCACIgBAAIgCABIgCABIgYALIgCABIgEABIgoAUQgIACgIAAQgGgBgDgDQgDgCAAgFQAAgFACgGQACgHAEgHIAKgPIAug3IABgBIAAgBIABAAIACgBIAAAAIAAgBIAMgPIAHgHIAjgiQAtgnAygfQA9gmBAgWICHgtIABAAIADgBIABAAID0hEIADgBIBwgbIIThhIB5gNICNADIHLgYQDUgLDagHIFqgKIhkFSQgLAlgSAnQgRAkgUAfQgQAagZAgIgTAXIgBABIAAAAIgNAPIgBABIgJAJQgiAkgwAqIgjAcIgCACIgEADIAAABIAAAAIgBABIhFAyIgBABIgBABIh9BWQhHAwhcA0QhSAvhYAqIh7A4IgCAAIAAABIjcBVQhMAahMAXIh2ApQgyAQg1AOIgTAEIgRAEQgRADgIgBIgzACIgEAAIg5AEIgQABIhvANQhHAKhFAOQhIAPhRAVQgCgKgcgBQgRgBgtACIjXAsQiUAjhAAOQArgSBTgRgAp1ByIADAAIgCAAgApyBygApyByg");
	this.shape_1.setTransform(162.4,73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324.7,146.6);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AAYAAQAAAKgIAGQgGAHgKAAQgJAAgGgHQgIgGAAgKQAAgJAIgHQAGgHAJAAQAKAAAGAHQAIAHAAAJg");
	this.shape.setTransform(-2.6,-0.4,0.643,0.643);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAQQgGgGgBgKQABgIAGgHQAHgIAJABQAJgBAHAIQAIAHAAAIQAAAKgIAGQgHAIgJgBQgJABgHgIg");
	this.shape_1.setTransform(-2.6,-0.4,0.643,0.643);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,1,1).p("ABXAGQACAYgEANQgFANgogGQgngGgogJQgqgKgFgWQgEgUAdgRQAcgRAhAAQAgAAAaARQAbARACAXg");
	this.shape_2.setTransform(-0.1,-0.7,1,1,0,-15,165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoAyQgngGgogJQgqgKgFgWQgEgUAdgRQAcgRAhAAQAgAAAaARQAbARACAXQACAYgEANQgDAJgUAAQgJAAgNgCg");
	this.shape_3.setTransform(-0.1,-0.7,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-7.2,18.9,14.5);


(lib.court = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.9,1,1).p("AiqmsIKYAHIAANSIqYAAAiqmsIAANZQqGnfKGl6g");
	this.shape.setTransform(280.5,85,1,1,-60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9528").s().p("AlLGtIgBtZIKZAHIAANSg");
	this.shape_1.setTransform(288.6,71.1,1,1,-60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.9,1,1).p("AzGpDQSmgrSTB6QCVInhzIcMglbAAAg");
	this.shape_2.setTransform(197.6,203.3,1.601,1.846,-56.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9528").s().p("AzGJPIAAySQSmgrSTB6QCVInhzIcg");
	this.shape_3.setTransform(197.6,203.3,1.601,1.846,-56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,395.3,429.8);


(lib.bornebasket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF5A00").s().p("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");
	this.shape.setTransform(-1.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.2,-89.9,320,179.8);


(lib.basketisfunn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF5A00").s().p("AuABaIAPAAIgCiiIgPAAIAAgxIBngBQANAFAJAIQAIAHADAPIAABIQgCAJgFAGQgEAEgKAEQAKACAFAGQAFAHADAHIAABIQgCAOgIAJQgIAJgOAEIhoABgAtJAWIABBEIAeAAIAGgGQADgDAAgGIgBgmQAAgIgDgEQgEgEgIAAgAtKhIIABBDIAZAAQAKAAADgIIgBgtQAAgGgEgFQgEgEgEAAgArjBZIAOAAIAVijIgPAAIAAgxIBxgBIAAAxIgPABIAZCiIAOAAIAAAwIhDAAIgBgwIANAAIgFgkIgnAAIgDAlIANAAIAAAwIhDAAgAqbhDIgCAJIgJBPIAhgBIgKhOIgDgJQgBgFgDgCQgDACgCAFgAonB7QgIgIgDgPIgBgtIApgBIAAAXQAAAHADACIAGAEIAWAAIAGgEQACgCAAgIIAAgWIgBgJQgBgDgGgFIg5gjQgGgCgFgJQgGgJAAgLIAAg7QABgHAEgHQAEgHAFgFQAFgGAHgCQAGgCAGgBIAgAAIAMAMIAAgMIApAAIABBQIgpABIgBghIgeABIgFAGQgCADAAAHIAAAZQAAAEACADQACADAFAEIA5AhQAHAFAEAIQAEAIAAAIIAAA6QgCAOgIAJQgIAJgOAEIg6AAQgOgEgIgIgAmjBWIAPAAIgBijIgPAAIgBgwIBFAAIABAwIgNAAIAABGIAHAAIAjhHIgNAAIgBgwIBFAAIAAAwIgPAAIgjBHQADABAFAGQAFAEAFAMQAGALAFASQAFARADAWIAPAAIAAAxIhFABIAAgxIANAAQgCgQgEgOQgEgNgFgMQgCgFgDgCQgDgDgGAAIgNAAIAABCIAOgBIAAAxIhFABgAj5BUIAPAAIgCijIgPAAIAAgwICCgBIABBQIgoABIAAghIgjABIABBEIAhgBIAAgNIAZAAIABA1IgZAAIAAgMIgiAAIABBDIAiAAIAAggIAnAAIABBQIiCACgAg7BSIARAAIgBimIgTAAIAAAjIglABIgBhQICYgCIABBQIglABIgBgkIgRAAIACCmIAPAAIABAxIhLABgAB+BQIAQAAIgCiiIgQAAIAAgxIBJgBIABAxIgRABIACCiIAQAAIABAwIhKABgADoB0QgJgJgDgOIAAguIAoAAIABAWQAAAIACACIAGADIAWAAIAGgDQADgDAAgHIgBgXIgBgJQgBgDgGgEIg5giQgGgDgFgKQgFgJAAgLIgBg6QACgIADgGQAEgHAGgGQAFgFAGgDQAGgCAGAAIAhgBIALAMIAAgMIAqAAIABBQIgqABIAAggIgeABIgGAFQgCADAAAHIABAZQAAAFACADQABACAGAFIA4AhQAHAEAEAIQAEAJAAAHIABA6QgCAOgJAKQgIAIgNAEIg7AAQgNgEgIgHgAGiBOIAPAAIgCijIgPAAIAAgxICCgBIABBRIgoAAIAAggIgjAAIABBFIAhAAIAAgOIAZAAIABA2IgZAAIAAgNIgiAAIABBDIAPAAIABAwIhIABgAJSBwQgIgJgDgNIgCiwIgPAAIAAgwIBDgBIABAwIgOAAIACCVQAAAIACACIAGAEIAZgBIAGgEQADgBAAgIIgCiVIgNAAIgBgwIBEgBIAAAwIgPAAIACCxQgDANgIAJQgIAJgNAEIg3ABQgOgEgIgJgALgBKIAPAAIgCiiIgPAAIAAgwIBFgBIAtCjIgBhzIgQAAIAAgwIBEgBIAAAxIgPAAIACDTIguAAIgzi7IABCLIAPgBIABAxIhGABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-13.9,180,27.9);


(lib.basket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DF5A00").ss(5,1,1).p("AD4gSQAHBKgaA+QgbA/huADQhsAEhDgcQhEgchBhRQhBhOBBhAQBAg/B2gXQB1gWBOA0QBPA1AIBMg");
	this.shape.setTransform(45.2,79.3,1.141,0.814,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkkHMQiVgHiRgPIgxgGIAYiLIABgCIAAgCIAEgfQABAAACAFIACAJQACAKAEgXIAShpIAAgFIADgMQADgLADgEQACgCAEAAQABAAAAAQIgDAhQgCAmACgPIgFA3IAAACIgBACIgVCVIAJABIALAAIgLgDIgHgBIAGgcQAEgOAGgcIARh/QAEgfACgMIABgCIACgHQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAEAKIADALQACACADgMIAEhiIABgCIAAgtIACgJQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQACABACAJIADAKQABACAAgMIABgoIgNjRIgQhwIgdACQgEAAAEgCIAJgCIATgFIAAgBIgFgbIACgFIABgDIABgCIABACQADAGAGAcIAYgFIBHgNQgQADgPAAIgYABIgMACQAAAAAAAAQABgBAAAAQAAAAABgBQABAAAAAAIAKgEIAngKICTgVIheAJQgWABAIgEIANgGIAxgFQAWgDAAgBIAAgHIhIAHIgvAFIAZgDQAWgDAAgBIgBgHIAcgEIBAgFIARgBIAIgBIAJgBIB+gHIgBgFIjAAMIgfADIgdADIAggGQAEgCAAgDIAKgBIAFgBIErgRIADAAIhlADQAUgEA0gDIAWgBIBHgBIEtALIDQAVIADAAIBwAQIgJAoQgWBggKBbQgLBfgBBfQAABbAKBdQALBcATBUIAQBDIgsAFQiYARiLAJQiXAJiSABIgiAAQiHAAh/gHgAn2lhIgFABIgdADIAAABQAPBWAJBkQAHBeAABcQgBBhgIBbQgHBHgMBIQEHAZEQgBQELgBEJgZQgPhKgJhMQgLhmAAhkQAAhlALhiQAIhJAPhNQj1gij9gCQiCgBiNAIIkGAYIgCAAg");
	this.shape_1.setTransform(54.9,46.3,0.466,0.464,0,-1.1,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9A9A9").s().p("An9F2QAMhJAGhHQAJhbABhhQAAhcgIheQgIhkgPhWIAAgBIAdgDIAFgBIACAAIABAAIEHgYQCMgICDABQD9ACD1AiQgPBNgJBJQgLBiAABlQABBkALBmQAJBMAPBKQkJAZkLABIgUABQkGAAj9gYgAoCC6IgEgLIgDgKQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAHQASjzgqkCIAdgCIAQBwIAMDRIAAAoQgBAMAAgCIgEgKQgCgJgBgBQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgCAJIAAAtIgBACIgFBiQgCAKgCAAIAAAAgAotlwIAhgFIgBADIgCAFIAFAbIAAABIgTAFIgJACIgHgmgAoKl1QBqgOBqgKQAAABgWADIgyAFIgMAGQgIAEAVgBIBfgIIiTAUIgoAKIgJAEQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAAAIAMgCIAYgBQAPAAAPgCIhGAMIgZAGQgFgdgDgGg");
	this.shape_2.setTransform(53.8,45.4,0.466,0.464,0,-1.1,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.698)").s().p("AC5HAIg8AAIhVgBIkhgCIlXgXIACgJQAVh2AFhxIACgyIAAgDIgBhfIAAgDIgBgNIgDgyQgIhggRhXIgliMIACgBIAlCMQASBXAIBhIADAyIAAAMIABAEIABBfIgBADIgBAyQgGBxgVB3IgBAFIFUAXIBbABICVABQiLgEiKgJQiOgJh/gNIgBAJIgBACIAAgBIAAgBIABgJIgJgBIgBAAIgBAAIgCAJIgBADIgCgCIAAgBIgBgBIgCgCIAAACIAAABIgBgBIgFgIIgBgBIABAAIABAAIgBgBIgBgCIAAAAIgDgDIAFABIAIAAIAAgCIAAgBIACgJIgIgBIgBAAIgBgBIADAAIAHABQAHgmAFgqIACgSIADgkIAFhNIgBAWIABgUIABgCIgBgcIAAAcIgBgpIgLjKIgGgnIACgBIAGAoIAAAAIAJB/IgChOIAFA8IACAgIAAAEIgDCRIgBADIAAAEIgNCDIgCANIgCANIAMABIABAAQCiANCTAFIFQACImNgMIAJAAIALgBIF2ACIHGgSQgOhdgGhWQgHhfACheQAEhmAMhWQAMhcAVhVIiegUIihgIIhpgBQgaAAgfgBIijgCQgTACgXAAIhegBIh3ALIgFAAIAAAAIgBgBIgUABIADgBIgnAEIARgFIBCgLIhFAHIgqAFIgpAGQAEgCARgEIAagGIgiAEIAWgHIAHgCIATgEIA1gNIhWARIgEAAIgJACIgMADIgXADIABgBQAFgDAYgFQgLACgpAFIAzgNIhBAIQgrAHgXACQAPgLAzgNIBwgVIBAgIIDwgRIA5gCIA4gBIEgAMQBxAJBuARIBsAPIgJAmQgUBbgMBYQgNBdgDBWQgHCxAdC3IANBGIgUABQiJAJiSADIgPAAIgiACIguABIgZAAgAkgGqQCIAICgADQCPADCYgEIAcgBQB+gDCCgJIAJgBIgCgJQgRhUgJhhQAEBLAKBIIAAABIAFAjIAAABIgBAAIgHAAIgYABIgBABIgDAFIgBgEIAAgCQkYAJkEgFQiYgDiOgIQiGgHiGgLIgBAAIgMgBIgCALIDjAPIEJALIAAADIkJgLIjWgOQCBALCJAJgAo+GbIABgDIgEgBgAoxhuIAAgBIAAAFgApAjIIAIAnIABAEIAFApg");
	this.shape_3.setTransform(56.3,40,0.956,0.952,0,-1.1,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A9A9A9").s().p("AicGeQjIgGjGgTIACgJQB+ANCOAJQCLAJCLAEgAAKGYQiggDiIgJQiJgIiBgMIDXAPIEJALIAAgDIkJgLIjjgPIACgMIAMABIABAAQCGAMCGAHQCNAICYADQEEAFEYgJIABABQhuALhtAGIgdABQhWAChUAAIh9gBgAIuGDIAXAAIgZACgAo3GDIACgIIACAAIAAAAIAKABIgCAJIgMgCgAo8GDIAAgCIABACIgBAAgApEGCIABgHIAGAIIgHgBgAo+F6IADAAIgBAEgAjwF7QiTgFiigNIgBAAIgMgBIACgNIACgNIANiDIAAgEIAAgDIAEiRIgBgEIgBggQABjHgmjRIBlgNIgBABIAXgDIAogFIgHACIgXAGIAigDIgaAFQgRAFgEACIApgGIArgFIBEgHIhCALIgQAFIAngFIgDACIATgBIABABIAAgBIAFABIB4gLIBdABQAXAAAUgCICjABQAfACAZgBIBqABICgAJICfAUQgVBVgNBbQgMBXgDBnQgCBdAGBeQAGBXAPBdInHARIl2gBIgKAAIgKABIGNALgApDF5IABgBIABACIgCgBgApCF1IADgNIAHABIgBAJIAAABIgBACgAo/FnQAWh8AHh/IAAApIABgcIAAAcIAAACIgBATIAAgVIgEBNIgEAkIgCASQgFAqgGAmIgIgBg");
	this.shape_4.setTransform(56.1,42.7,0.956,0.952,0,-1.1,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A9A9A9").s().p("AgESUQgJgSgRg+QADALgEALQgEAMADALQgMABgNghQgQgngHg9IAEBDQgCAOgHgFIgOgIQgCgsgFAAIgSABIAEBEIgBgJQgBgOgDAAIgSABQgEgWgBg4QgBg5gEgWIgNABQgBAbAEA0IAGBOQgEgPgEgEQgDgDgIABQgDgXgChPQgCg+gKgmIAEBDQgPgagChNQgEhvgBgKIgJhWIgJiIIgBguIgHn/IAGi7IANiHIAwkNQAOg6AOgvIAghnQAEACAHALQAHAJAHgNIAPgcIANgUIALgNIAKgIQAIgGAIABIANADQAEACgLAdIgFAQQgBAGAFgHIgfBoQgFAXACADQAAABAAAAQAAAAABAAQAAAAABgBQAAgBABgBIAIgQQADgDADgHIAhhaQAJgTAGgFQAHgFAFADQADACAEAHQAFAIADACQAFADAGgGIAhhSQAJgJAGAQQADAHACABQACACADgGQAPgaAkhJQAmhLAVglQACABAFAAQAGAAABABQAGADgLAZIg/B9QgfBEgWA/QgwCDggCOQgRBNgKBAIgTCPQgJBNgEBEIgICWIgCCLIABCTIAoN4QAAArgHAAQAAAAgEgGg");
	this.shape_5.setTransform(68.5,91.4,0.778,0.652,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3.4,121.1,171.6);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(63,126,166,0.569)","#023059"],[0,1],175.2,227.4,-175.5,-227.5).s().p("Eg5oAZLMAAAgyVMBzRAAAMAAAAyVg");
	this.shape.setTransform(0,0,0.976,0.976);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-157.2,720,314.5);


(lib.odense = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-4,-1.3);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.4,-57.7,180,120);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lefteye = new lib.eye();
	this.lefteye.parent = this;
	this.lefteye.setTransform(10.4,16.2,1,1,0,-45,135);

	this.righteye = new lib.eye();
	this.righteye.parent = this;
	this.righteye.setTransform(31.2,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.righteye},{t:this.lefteye}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.4,40.7,27.5);


(lib.basketisfun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basketisfunn();
	this.instance.parent = this;
	this.instance.setTransform(0.8,0);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-17,193,41);


(lib.Basketball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(-5.7,-8.5,1,1,0,0,0,19.7,13.3);

	this.lefteye = new lib.eye();
	this.lefteye.parent = this;
	this.lefteye.setTransform(-15,-5.7,1,1,0,-45,135);

	this.righteye = new lib.eye();
	this.righteye.parent = this;
	this.righteye.setTransform(5.8,-15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.righteye},{t:this.lefteye}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:19.2,regY:13.1,x:-6.2,y:-8.7},0).wait(82).to({_off:true},1).wait(1));

	// basketball
	this.instance_1 = new lib.basketball_PNG1100();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.7,-23.6,0.024,0.024);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-23.6,49.8,47.3);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bornebasket();
	this.instance.parent = this;
	this.instance.setTransform(176.9,108.4);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,4);

	this.instance_1 = new lib.odense();
	this.instance_1.parent = this;
	this.instance_1.setTransform(339.4,96.5);
	this.instance_1.shadow = new cjs.Shadow("#000000",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.7,15.4,428.2,194);


// stage content:



(lib.basketballbanner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// baskeisfun
	this.instance = new lib.basketisfun();
	this.instance.parent = this;
	this.instance.setTransform(-239.4,360.5,0.999,0.999,-21.3);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("#000000",3,3,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).wait(1).to({regX:3.7,regY:2.8,scaleX:1,scaleY:1,rotation:-21.1,x:-205.8,y:352,alpha:0.063},0).wait(1).to({rotation:-20.7,x:-176.7,y:342.3,alpha:0.125},0).wait(1).to({rotation:-20.3,x:-147.7,y:332.6,alpha:0.188},0).wait(1).to({rotation:-20,x:-118.5,y:322.9,alpha:0.25},0).wait(1).to({rotation:-19.6,x:-89.4,y:313.1,alpha:0.313},0).wait(1).to({rotation:-19.2,x:-60.4,y:303.4,alpha:0.375},0).wait(1).to({rotation:-18.8,x:-31.3,y:293.6,alpha:0.438},0).wait(1).to({rotation:-18.4,x:-2.2,y:283.9,alpha:0.5},0).wait(1).to({rotation:-18.1,x:26.9,y:274.1,alpha:0.563},0).wait(1).to({rotation:-17.7,x:56,y:264.4,alpha:0.625},0).wait(1).to({rotation:-17.3,x:85.1,y:254.7,alpha:0.688},0).wait(1).to({rotation:-16.9,x:114.2,y:245,alpha:0.75},0).wait(1).to({rotation:-16.5,x:143.3,y:235.2,alpha:0.813},0).wait(1).to({rotation:-16.1,x:172.4,y:225.5,alpha:0.875},0).wait(1).to({rotation:-15.8,x:201.4,y:215.8,alpha:0.938},0).wait(1).to({rotation:-15.4,x:230.6,y:206,alpha:1},0).wait(26));

	// basket
	this.instance_1 = new lib.basket();
	this.instance_1.parent = this;
	this.instance_1.setTransform(663.5,-92.1,1,1,0,0,0,56.5,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:56.3,regY:80.6,x:663.3,y:-88.9},0).wait(1).to({y:-84.5},0).wait(1).to({y:-80.1},0).wait(1).to({y:-75.7},0).wait(1).to({y:-71.3},0).wait(1).to({y:-66.9},0).wait(1).to({y:-62.5},0).wait(1).to({y:-58.1},0).wait(1).to({y:-53.7},0).wait(1).to({y:-49.3},0).wait(1).to({y:-45},0).wait(1).to({y:-40.6},0).wait(1).to({y:-36.2},0).wait(1).to({y:-31.8},0).wait(1).to({y:-27.4},0).wait(1).to({y:-23},0).wait(1).to({y:-18.6},0).wait(1).to({y:-14.2},0).wait(1).to({y:-9.8},0).wait(1).to({y:-5.4},0).wait(1).to({y:-1},0).wait(1).to({y:3.4},0).wait(1).to({y:7.8},0).wait(1).to({y:12.2},0).wait(1).to({y:16.6},0).wait(1).to({y:21},0).wait(1).to({y:25.4},0).wait(1).to({y:29.8},0).wait(1).to({y:34.2},0).wait(1).to({y:38.6},0).wait(1).to({y:43},0).wait(1).to({y:47.3},0).wait(1).to({y:51.7},0).wait(1).to({y:56.1},0).wait(1).to({y:60.5},0).wait(1).to({y:64.9},0).wait(1).to({y:69.3},0).wait(1).to({y:73.7},0).wait(1).to({y:78.1},0).wait(1).to({y:82.5},0).wait(1).to({y:86.9},0).wait(1).to({y:91.3},0).wait(1).to({y:95.7},0).wait(52));

	// basketball
	this.instance_2 = new lib.Basketball();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.9,18.2,0.999,0.999,-29.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).wait(1).to({regX:-2.4,regY:-0.3,scaleX:1,scaleY:1,rotation:-26.1,x:-25.3,y:16.5},0).wait(1).to({rotation:-22.2,x:-17.8,y:14},0).wait(1).to({rotation:-18.3,x:-10.5,y:11.9},0).wait(1).to({rotation:-14.4,x:-3,y:10},0).wait(1).to({rotation:-10.5,x:4.4,y:8.3},0).wait(1).to({rotation:-6.5,x:12,y:6.8},0).wait(1).to({rotation:-2.6,x:19.6,y:5.6},0).wait(1).to({rotation:1.3,x:27.3,y:4.9},0).wait(1).to({rotation:5.2,x:35,y:4.6},0).wait(1).to({rotation:9.1,x:42.7,y:4.9},0).wait(1).to({rotation:13,x:49.1,y:6.1},0).wait(1).to({rotation:16.9,x:56.8,y:9.4},0).wait(1).to({rotation:20.8,x:63.8,y:12.8},0).wait(1).to({rotation:24.7,x:70.7,y:16.3},0).wait(1).to({rotation:28.6,x:77.5,y:19.9},0).wait(1).to({rotation:32.5,x:84.2,y:23.7},0).wait(1).to({rotation:36.5,x:90.8,y:27.5},0).wait(1).to({rotation:40.4,x:97.4,y:31.5},0).wait(1).to({rotation:44.3,x:103.9,y:35.7},0).wait(1).to({rotation:48.2,x:110.3,y:39.9},0).wait(1).to({rotation:52.1,x:116.7,y:44.3},0).wait(1).to({rotation:56,x:122.9,y:48.8},0).wait(1).to({rotation:59.9,x:129.1,y:53.4},0).wait(1).to({rotation:57,x:134.9,y:58.4},0).wait(1).to({rotation:54.1,x:139.7,y:62.7},0).wait(1).to({rotation:51.2,x:133.1,y:58.3},0).wait(1).to({rotation:48.3,x:126.5,y:54.2},0).wait(1).to({rotation:45.5,x:119.9,y:50.3},0).wait(1).to({rotation:42.6,x:113.2,y:46.5},0).wait(1).to({rotation:39.7,x:106.3,y:42.9},0).wait(1).to({rotation:36.8,x:101.5,y:41.2},0).wait(1).to({rotation:33.9,x:91.6,y:40.6},0).wait(1).to({rotation:31,x:81.1,y:41.7},0).wait(1).to({rotation:28.1,x:76.4,y:42.5},0).wait(1).to({rotation:25.2,x:68.9,y:42.2},0).wait(1).to({rotation:22.4,x:61.3,y:44.4},0).wait(1).to({rotation:19.5,x:54.5,y:48.2},0).wait(1).to({rotation:16.6,x:48.6,y:53.2},0).wait(1).to({rotation:13.7,x:43.7,y:59.4},0).wait(1).to({rotation:10.8,x:41.1,y:66.6},0).wait(1).to({rotation:7.9,x:40.2,y:74.4},0).wait(1).to({rotation:5,x:40.4,y:82.2},0).wait(1).to({rotation:2.1,x:41.1,y:89.9},0).wait(1).to({rotation:-0.8,x:42.3,y:97.6},0).wait(1).to({rotation:-3.6,x:43.8,y:105.2},0).wait(1).to({rotation:-6.5,x:45.7,y:112.7},0).wait(1).to({rotation:-9.4,x:47.9,y:120.2},0).wait(1).to({rotation:-12.3,x:50.5,y:127.6},0).wait(1).to({rotation:-15.2,x:54,y:134.5},0).wait(1));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.1,87.5,1,1,0,0,0,221.1,108.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).wait(1).to({regX:221.6,regY:109.7,x:56.4,y:88.8,alpha:0.043},0).wait(1).to({x:63.3,alpha:0.087},0).wait(1).to({x:70.1,alpha:0.13},0).wait(1).to({x:77,alpha:0.174},0).wait(1).to({x:83.8,alpha:0.217},0).wait(1).to({x:90.7,alpha:0.261},0).wait(1).to({x:97.5,alpha:0.304},0).wait(1).to({x:104.4,alpha:0.348},0).wait(1).to({x:111.2,alpha:0.391},0).wait(1).to({x:118.1,alpha:0.435},0).wait(1).to({x:124.9,alpha:0.478},0).wait(1).to({x:131.8,alpha:0.522},0).wait(1).to({x:138.6,alpha:0.565},0).wait(1).to({x:145.5,alpha:0.609},0).wait(1).to({x:152.3,alpha:0.652},0).wait(1).to({x:159.2,alpha:0.696},0).wait(1).to({x:166,alpha:0.739},0).wait(1).to({x:172.9,alpha:0.783},0).wait(1).to({x:179.7,alpha:0.826},0).wait(1).to({x:186.6,alpha:0.87},0).wait(1).to({x:193.4,alpha:0.913},0).wait(1).to({x:200.3,alpha:0.957},0).wait(1).to({x:207.1,alpha:1},0).wait(44));

	// background2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DF5A00").ss(5,1,1).p("Eg4MgXiMBwZAAAMAAAAvFMhwZAAAg");
	this.shape.setTransform(360,150,1.001,0.995);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

	// basketballcourt1
	this.instance_4 = new lib.court();
	this.instance_4.parent = this;
	this.instance_4.setTransform(562.2,518.5,1,1,0,0,0,196.2,213.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:197.6,regY:203.3,x:563.6,y:503.3,alpha:0.023},0).wait(1).to({y:498.4,alpha:0.046},0).wait(1).to({y:493.4,alpha:0.069},0).wait(1).to({y:488.5,alpha:0.092},0).wait(1).to({y:483.5,alpha:0.115},0).wait(1).to({y:478.6,alpha:0.138},0).wait(1).to({y:473.6,alpha:0.161},0).wait(1).to({y:468.6,alpha:0.184},0).wait(1).to({y:463.7,alpha:0.208},0).wait(1).to({y:458.7,alpha:0.231},0).wait(1).to({y:453.8,alpha:0.254},0).wait(1).to({y:448.8,alpha:0.277},0).wait(1).to({y:443.8,alpha:0.3},0).wait(1).to({y:438.9,alpha:0.323},0).wait(1).to({y:433.9,alpha:0.346},0).wait(1).to({y:429,alpha:0.369},0).wait(1).to({y:424,alpha:0.392},0).wait(1).to({y:419.1,alpha:0.415},0).wait(1).to({y:414.1,alpha:0.438},0).wait(1).to({y:409.1,alpha:0.461},0).wait(1).to({y:404.2,alpha:0.484},0).wait(1).to({y:399.2,alpha:0.507},0).wait(1).to({y:394.3,alpha:0.53},0).wait(1).to({y:389.3,alpha:0.553},0).wait(1).to({y:384.3,alpha:0.576},0).wait(1).to({y:379.4,alpha:0.599},0).wait(1).to({y:374.4,alpha:0.623},0).wait(1).to({y:369.5,alpha:0.646},0).wait(1).to({y:364.5,alpha:0.669},0).wait(1).to({y:359.6,alpha:0.692},0).wait(1).to({y:354.6,alpha:0.715},0).wait(1).to({y:349.6,alpha:0.738},0).wait(1).to({y:344.7,alpha:0.761},0).wait(1).to({y:339.7,alpha:0.784},0).wait(1).to({y:334.8,alpha:0.807},0).wait(1).to({y:329.8,alpha:0.83},0).wait(59));

	// logo bigger
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-70,323.4,3.288,3.288,0,0,180,28,25.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).wait(1).to({regY:25.6,x:-40.7,y:314.3},0).wait(1).to({x:-11.5,y:305.7},0).wait(1).to({x:17.8,y:297},0).wait(1).to({x:47,y:288.4},0).wait(1).to({x:76.3,y:279.7},0).wait(1).to({x:105.5,y:271.1},0).wait(1).to({x:134.8,y:262.4},0).wait(1).to({x:164,y:253.7},0).wait(1).to({x:193.3,y:245.1},0).wait(1).to({x:222.5,y:236.4},0).wait(1).to({x:251.8,y:227.8},0).wait(1).to({x:281,y:219.1},0).wait(1).to({x:310.3,y:210.5},0).wait(1).to({x:339.5,y:201.8},0).wait(1).to({x:368.8,y:193.2},0).wait(1).to({x:398,y:184.5},0).wait(26));

	// shitsfire
	this.instance_6 = new lib.fireh();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-199.3,373.3,1,1,0,0,0,162.3,73.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).wait(1).to({x:-171,y:364.1,alpha:0.976},0).wait(1).to({x:-142.8,y:355,alpha:0.951},0).wait(1).to({x:-114.6,y:345.8,alpha:0.927},0).wait(1).to({x:-86.4,y:336.7,alpha:0.902},0).wait(1).to({x:-58.2,y:327.5,alpha:0.878},0).wait(1).to({x:-30,y:318.3,alpha:0.854},0).wait(1).to({x:-1.8,y:309.2,alpha:0.829},0).wait(1).to({x:26.4,y:300,alpha:0.805},0).wait(1).to({x:54.6,y:290.9,alpha:0.78},0).wait(1).to({x:82.8,y:281.7,alpha:0.756},0).wait(1).to({x:111,y:272.5,alpha:0.732},0).wait(1).to({x:139.2,y:263.4,alpha:0.707},0).wait(1).to({x:167.3,y:254.2,alpha:0.683},0).wait(1).to({x:195.5,y:245.1,alpha:0.659},0).wait(1).to({x:223.7,y:235.9,alpha:0.634},0).wait(1).to({x:252,y:226.8,alpha:0.61},0).wait(1).to({alpha:0.585},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.488},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.415},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.366},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.317},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.195},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.146},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0},0).wait(1));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(763.4,84.3,1,1,0,0,0,28,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-1.4,x:745.9,y:79.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-2.7,x:728.3,y:74.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-4.1,x:710.8,y:69.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-5.5,x:693.2,y:64.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:-6.8,x:675.6,y:59.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:-8.2,x:658.1,y:54.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-9.5,x:640.5,y:49.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:-10.9,x:622.9,y:44.3},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:-12.3,x:605.4,y:39.3},0).wait(1).to({scaleX:1.29,scaleY:1.29,rotation:-13.6,x:587.8,y:34.3},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:-15,x:570.3,y:29.3},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:-16.4,x:552.7,y:24.4},0).wait(1).to({scaleX:1.38,scaleY:1.38,rotation:-17.7,x:535.1,y:19.4},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-19.1,x:517.6,y:14.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,rotation:-20.5,x:500.1,y:9.4},0).wait(1).to({scaleX:1.47,scaleY:1.47,rotation:-21.8,x:482.5,y:4.4},0).wait(1).to({scaleX:1.5,scaleY:1.5,rotation:-23.2,x:465,y:-0.6},0).wait(1).to({scaleX:1.53,scaleY:1.53,rotation:-24.5,x:447.4,y:-5.6},0).wait(1).to({scaleX:1.56,scaleY:1.56,rotation:-25.9,x:429.8,y:-10.6},0).wait(1).to({scaleX:1.59,scaleY:1.59,rotation:-27.3,x:412.3,y:-15.6},0).wait(1).to({scaleX:1.61,scaleY:1.61,rotation:-28.6,x:394.7,y:-20.6},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-30,x:377.2,y:-25.6},0).wait(1).to({scaleX:1.67,scaleY:1.67,rotation:-31.4,x:358.2,y:-27.3},0).wait(1).to({scaleX:1.7,scaleY:1.7,rotation:-32.7,x:338.9,y:-28.5},0).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:-34.1,x:319.7,y:-29.4},0).wait(1).to({scaleX:1.76,scaleY:1.76,rotation:-35.5,x:300.4,y:-29.9},0).wait(1).to({scaleX:1.79,scaleY:1.79,rotation:-36.8,x:281.1,y:-30.1},0).wait(1).to({scaleX:1.82,scaleY:1.82,rotation:-38.2,x:261.9,y:-29.9},0).wait(1).to({scaleX:1.85,scaleY:1.85,rotation:-39.5,x:242.6,y:-29.1},0).wait(1).to({scaleX:1.88,scaleY:1.88,rotation:-40.9,x:223.4,y:-27.7},0).wait(1).to({scaleX:1.91,scaleY:1.91,rotation:-42.3,x:204.3,y:-25},0).wait(1).to({scaleX:1.94,scaleY:1.94,rotation:-43.6,x:186.9,y:-20.3},0).wait(1).to({scaleX:1.97,scaleY:1.97,rotation:-45,x:168.1,y:-13.7},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:150.2,y:-6.5},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:132.5,y:1.4},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:115.1,y:9.9},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:98.3,y:19.5},0).wait(1).to({scaleX:2.11,scaleY:2.11,x:82.2,y:30.4},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:69.3,y:41.9},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:54.8,y:56.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:41.3,y:70.1},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:28.1,y:84.4},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:15.3,y:98.7},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:2.8,y:113.5},0).wait(1).to({scaleX:2.32,scaleY:2.32,x:-9.2,y:128.8},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:-19.1,y:144.2},0).wait(1).to({scaleX:2.37,scaleY:2.37,x:-27.1,y:162},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:-33.6,y:180.3},0).wait(1).to({scaleX:2.43,scaleY:2.43,x:-39,y:199},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:-43.7,y:217.7},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:-47.7,y:236.7},0).wait(1).to({scaleX:2.52,scaleY:2.52,x:-51.2,y:256},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:-53.4,y:274.3},0).wait(42));

	// background
	this.instance_8 = new lib.Background();
	this.instance_8.parent = this;
	this.instance_8.setTransform(360.1,150.1,1,0.954,0,0,0,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DF5A00").ss(5,1,1).p("Eg4MgXiMBwZAAAMAAAAvFMhwZAAAg");
	this.shape_1.setTransform(360,150,1.001,0.995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_8}]}).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(357.6,-28.5,793.9,911.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;