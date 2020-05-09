var champion = [{
	patk:0,
	matk:0,
	pdef:0,
	mdef:0,
	
	hp:0,
	mp:0,
	atkspd:0,
	critrate:0,
	
	cdred:0,
	hpregen:0,
	movspd:0,
	mpregen:0,
	
	ppen:0,
	ppenPercent:0,
	mpen:0,
	mpenPercent:0
}];

function initStats(){
	var stats = [
	"patkStat","matkStat","pdefStat","mdefStat",
	"hpStat","mpStat","atkspdStat","critrateStat",
	"cdredStat","hpregenStat","movspdStat","mpregenStat",
	"ppenStat","ppenPercentStat","mpenStat","mpenPercentStat"
	];

	for(i in stats){
		document.getElementById(stats[i]).innerHTML = 0;
	}
}

function calculate(){
	var stats = [
	"patkStat","matkStat","pdefStat","mdefStat",
	"hpStat","mpStat","atkspdStat","critrateStat",
	"cdredStat","hpregenStat","movspdStat","mpregenStat",
	"ppenStat","ppenPercentStat","mpenStat","mpenPercentStat"
	];

	var championName = document.getElementById("champion").value;
	var level = Number(document.getElementById("level").value);
	
	if(level == 0){
		initStats();
		return;
	}
	
	var patkBase = 0;
	var patkGrowth = 0;
	var matkBase = 0;
	var matkGrowth = 0;
	var pdefBase = 0;
	var pdefGrowth = 0;
	var mdefBase = 0;
	var mdefGrowth = 0;
	var hpBase = 0;
	var hpGrowth = 0;
	var mpBase = 0;
	var mpGrowth = 0;
	var atkspdBase = 0;
	var atkspdGrowth = 0;
	
	switch(championName){
		case "Alicia":
		setStats(130,3,0,0,25,3.5,25,1,1500,80,500,40,0,1);
		break;
		
		default:
		initStats();
	}
	
	champion.patk = patkBase + patkGrowth*level-patkGrowth;
	champion.matk = matkBase;
	champion.pdef = pdefBase + pdefGrowth*level-pdefGrowth;
	champion.mdef = mdefBase + mdefGrowth*level-mdefGrowth;
	champion.hp = hpBase + hpGrowth*level-hpGrowth;
	champion.mp = mpBase + mpGrowth*level-mpGrowth ;
	champion.atkspd = atkspdBase + atkspdGrowth*level-atkspdGrowth;
	
	var i = 0;
	var j = 0;
	var championStats = Object.values(champion);
	championStats.shift();
	for(j in championStats){
		document.getElementById(stats[i++]).innerHTML = championStats[j];
  }
	
	function setStats(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14){
		patkBase = val1;
		patkGrowth = val2;
		matkBase = val3;
		matkGrowth = val4;
		pdefBase = val5;
		pdefGrowth = val6;
		mdefBase = val7;
		mdefGrowth = val8;
		hpBase = val9;
		hpGrowth = val10;
		mpBase = val11;
		mpGrowth = val12;
		atkspdBase = val13;
		atkspdGrowth = val14;
	}
}
