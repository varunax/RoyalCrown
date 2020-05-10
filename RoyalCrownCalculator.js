var champion = {
	patk:0,matk:0,pdef:0,mdef:0,
	hp:0,mp:0,atkspd:0,critrate:0,
	cdred:0,hpregen:0,movspd:0,mpregen:0,
	ppen:0,ppenPercent:0,mpen:0,mpenPercent:0
};

function Equip(
val1, val2, val3, val4,
val5, val6, val7, val8,
val9, val10, val11, val12,
val13, val14, val15, val16){
	
	this.patk = val1;
	this.matk = val2;
	this.pdef = val3;
	this.mdef = val4;
	
	this.hp = val5;
	this.mp = val6;
	this.atkspd = val7;
	this.critrate = val8;
	
	this.cdred = val9;
	this.hpregen = val10;
	this.movspd = val11;
	this.mpregen = val12;
	
	this.ppen = val13;
	this.ppenPercent = val14;
	this.mpen = val15;
	this.mpenPercent = val16;
}
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
	
	if(championName == "none" || level == 0){ initStats();return;}
	
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
	
	var weaponName = document.getElementById("weapon").value;
	var weaponRarity = document.getElementById("weaponRarity").value;
	
	var weaponEquip = new Equip(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);
	
/* 	var weaponPatk = 0;
	var weaponMatk = 0;
	var weaponPdef = 0;
	var weaponMdef = 0;
	var weaponAtkspd = 0;
	var weaponMovspd = 0;
	var weaponPpen = 0;
	var weaponMpen = 0;
	var weaponCritrate = 0;
	var weaponCdRate = 0; */
	
	switch(weaponName){
		case "steelSword":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 20;
				weaponEquip.pdef = 18;
				weaponEquip.mdef = 18;
				break;
				
				case "rare":
				weaponEquip.patk = 30;
				weaponEquip.pdef = 24;
				weaponEquip.mdef = 24;
				break;
				
				case "epic":
				weaponPatk = 40;
				weaponPdef = 30;
				weaponMdef = 30;
				break;
			}
		break;
		
		case "crescentBlade":
			switch(weaponRarity){
				case "uncommon":
				weaponPatk = 25;
				weaponAtkspd = 10;
				weaponMovspd = 3;
				break;
				
				case "rare":
				weaponPatk = 37.5;
				weaponAtkspd = 15;
				weaponMovspd = 4;
				break;
				
				case "epic":
				weaponPatk = 50;
				weaponAtkspd = 20;
				weaponMovspd = 5;
				break;
			}
		break;
		
		case "heavyHammer":
			switch(weaponRarity){
				case "uncommon":
				weaponPatk = 25;
				weaponPpen = 5;
				break;
				
				case "rare":
				weaponPatk = 37.5;
				weaponPpen = 8;
				break;
				
				case "epic":
				weaponPatk = 50;
				weaponPpen = 10;
				break;
			}
		break;
		
		case "kaulsGreatsword":
			switch(weaponRarity){
				case "uncommon":
				weaponPatk = 30;
				break;
				
				case "rare":
				weaponPatk = 45;
				break;
				
				case "epic":
				weaponPatk = 60;
				break;
			}
		break;
		
		case "splitAxe":
			switch(weaponRarity){
				case "uncommon":
				weaponPatk = 25;
				weaponCritrate = 13;
				break;
				
				case "rare":
				weaponPatk = 37.5;
				weaponCritrate = 19;
				break;
				
				case "epic":
				weaponPatk = 50;
				weaponCritrate = 25;
				break;
			}
		break;
		
		case "etherStaff":
			switch(weaponRarity){
				case "uncommon":
				weaponMatk = 45;
				weaponMpen = 5;
				break;
				
				case "rare":
				weaponMatk = 67;
				weaponMpen = 8;
				break;
				
				case "epic":
				weaponMatk = 90;
				weaponMpen = 10;
				break;
			}
		break;
		
		case "knightsScepter":
			switch(weaponRarity){
				case "uncommon":
				weaponMatk = 30;
				weaponMpen = 5;
				break;
				
				case "rare":
				weaponMatk = 45;
				weaponMpen = 8;
				break;
				
				case "epic":
				weaponMatk = 60;
				weaponMpen = 10;
				break;
			}
		break;
		
		case "sagesStaff":
			switch(weaponRarity){
				case "uncommon":
				weaponMatk = 35;
				weaponCdRate = 5;
				break;
				
				case "rare":
				weaponMatk = 52;
				weaponCdRate = 8;
				break;
				
				case "epic":
				weaponMatk = 70;
				weaponCdRate = 10;
				break;
			}
		break;
		
	}
	
	var helmetName = document.getElementById("helmet").value;
	var helmetRarity = document.getElementById("helmetRarity").value;
	
	var helmetPatk = 0;
	var helmetMatk = 0;
	var helmetMatkPercent = 0;
	var helmetMaxHp = 0;
	var helmetCdRate = 0;
	var helmetPdef = 0;
	var helmetMdef = 0;
	var helmetMaxMp = 0;
	var helmetMregen = 0;
	var helmetAtkspd = 0;
	var helmetCritRate = 0;
	
	switch(helmetName){
		case "etherCrown":
			switch(helmetRarity){
				case "uncommon":
				helmetMatk = 15;
				helmetMatkPercent = 10;
				break;
				
				case "rare":
				helmetMatk = 22;
				helmetMatkPercent = 15;
				break;
				
				case "epic":
				helmetMatk = 30;
				helmetMatkPercent = 20;
				break;
			}
		break;
		
		case "giantsHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetMaxHp = 200;
				helmetCdRate = 5;
				break;
				
				case "rare":
				helmetMaxHp = 300;
				helmetCdRate = 8;
				break;
				
				case "epic":
				helmetMaxHp = 400;
				helmetCdRate = 10;
				break;
			}
		break;
		
		case "mithrilHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetMatk = 15;
				helmetPdef = 15;
				helmetMdef = 15;
				break;
				
				case "rare":
				helmetMatk = 22;
				helmetPdef = 22;
				helmetMdef = 22;
				break;
				
				case "epic":
				helmetMatk = 30;
				helmetPdef = 30;
				helmetMdef = 30;
				break;
			}
		break;
		
		case "sagesCrown":
			switch(helmetRarity){
				case "uncommon":
				helmetMatk = 20;
				helmetMaxMp = 100;
				helmetMregen = 1;
				break;
				
				case "rare":
				helmetMatk = 30;
				helmetMaxMp = 150;
				helmetMregen = 1.5;
				break;
				
				case "epic":
				helmetMatk = 40;
				helmetMaxMp = 200;
				helmetMregen = 2;
				break;
			}
		break;
		
		case "snipersHat":
			switch(helmetRarity){
				case "uncommon":
				helmetPatk = 10;
				helmetCritRate = 10;
				break;
				
				case "rare":
				helmetPatk = 15;
				helmetCritRate = 15;
				break;
				
				case "epic":
				helmetPatk = 20;
				helmetCritRate = 20;
				break;
			}
		break;
		
		case "steelHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetPdef = 20;
				helmetMdef = 20;
				helmetMaxhp = 100;
				break;
				
				case "rare":
				helmetPdef = 30;
				helmetMdef = 30;
				helmetMaxhp = 150;
				break;
				
				case "epic":
				helmetPdef = 40;
				helmetMdef = 40;
				helmetMaxhp = 200;
				break;
			}
		break;
		
	}
	var armorName = document.getElementById("armor").value;
	var armorRarity = document.getElementById("armorRarity").value;
	
	switch(armorName){
		case "etherRobe":
			switch(armorRarity){
				case "uncommon":
				armorMatk = 40;
				armorMatkPercent = 5;
				break;
				
				case "rare":
				armorMatk = 60;
				armorMatkPercent = 8;
				break;
				
				case "epic":
				armorMatk = 80;
				armorMatkPercent = 10;
				break;
			}
		break;
		
		case "giantsArmor":
			switch(armorRarity){
				case "uncommon":
				armorMaxHp = 275;
				armorCdRate = 5;
				break;
				
				case "rare":
				armorMaxHp = 412;
				armorCdRate = 8;
				break;
				
				case "epic":
				armorMaxHp = 550;
				armorCdRate = 10;
				break;
			}
		break;
	
	}
	
	var gloveName = document.getElementById("gloves").value;
	var gloveRarity = document.getElementById("gloveRarity").value;
	
	switch(gloveName){
		case "etherCrown":
			switch(helmetRarity){
				case "uncommon":
				//dostuff
				break;
				
				case "rare":
				//dostuff
				break;
				
				case "epic":
				//dostuff
				break;
			}
	}
	
	var bootName = document.getElementById("boots").value;
	var bootRarity = document.getElementById("bootRarity").value;
	
	switch(bootName){
		case "etherCrown":
			switch(helmetRarity){
				case "uncommon":
				//dostuff
				break;
				
				case "rare":
				//dostuff
				break;
				
				case "epic":
				//dostuff
				break;
			}
	}
	
	var accName = document.getElementById("accessory").value;
	var accRarity = document.getElementById("accRarity").value;
	
	switch(accName){
		case "etherCrown":
			switch(helmetRarity){
				case "uncommon":
				//dostuff
				break;
				
				case "rare":
				//dostuff
				break;
				
				case "epic":
				//dostuff
				break;
			}
	}
	
	champion.patk = (patkBase + patkGrowth*level-patkGrowth + weaponPatk + helmetPatk);
	champion.matk = (matkBase + weaponMatk) * (1 + helmetMatkPercent/100);
	champion.pdef = pdefBase + pdefGrowth*level-pdefGrowth + weaponPdef + helmetPdef;
	champion.mdef = mdefBase + mdefGrowth*level-mdefGrowth + weaponMdef + helmetMdef;
	
	champion.hp = hpBase + hpGrowth*level-hpGrowth + helmetMaxHp;
	champion.mp = mpBase + mpGrowth*level-mpGrowth + helmetMaxMp;
	champion.atkspd = atkspdBase + atkspdGrowth*level-atkspdGrowth + weaponAtkspd + helmetAtkspd;
	champion.critrate = weaponCritrate;
	
	champion.movspd = weaponMovspd;
	champion.ppenPercent = weaponPpen;
	champion.critrate = weaponCritrate + helmetCritRate;
	champion.cdred = weaponCdRate;
	
	var i = 0;
	var j = 0;
	var championStats = Object.values(champion);
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
