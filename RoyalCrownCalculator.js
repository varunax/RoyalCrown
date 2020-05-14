var champion = {
	patk:0,matk:0,pdef:0,mdef:0,
	hp:0,mp:0,atkspd:0,critrate:0,
	cdred:0,hpregen:0,movspd:0,mpregen:0,
	ppen:0,ppenPercent:0,mpen:0,mpenPercent:0
	};
	
var stats = [
	"patkStat","matkStat","pdefStat","mdefStat",
	"hpStat","mpStat","atkspdStat","critrateStat",
	"cdredStat","hpregenStat","movspdStat","mpregenStat",
	"ppenStat","ppenPercentStat","mpenStat","mpenPercentStat"
	];
	
function Equip(){
	this.patk = 0;
	this.matk = 0;
	this.pdef = 0;
	this.mdef = 0;
	
	this.hp = 0;
	this.mp = 0;
	this.atkspd = 0;
	this.critrate = 0;
	
	this.cdred = 0;
	this.hpregen = 0;
	this.movspd = 0;
	this.mpregen = 0;
	
	this.ppen = 0;
	this.ppenPercent = 0;
	this.mpen = 0;
	this.mpenPercent = 0;
}

function BaseStats(){
	this.patk = 0;
	this.patkGrowth = 0;
	this.matk = 0;
	this.matkGrowth = 0;
	this.pdef = 0;
	this.pdefGrowth = 0;
	this.mdef = 0;
	
	this.mdefGrowth = 0;
	this.hp = 0;
	this.hpGrowth = 0;
	this.mp = 0;
	this.mpGrowth = 0;
	this.mpregen = 0;
	this.atkspd = 0;
	this.atkspdGrowth = 0;
}

function initStats(){for(i in stats){document.getElementById(stats[i]).innerHTML = 0;}}

function calculate(){
	var championName = document.getElementById("champion").value;
	var level = Number(document.getElementById("level").value);
	var baseStat = new BaseStats();
	var equipStats = 0;
	
	if(championName == "none" || level == 0){initStats(); return;};
	
	switch(championName){
		case "leo":
		baseStat.patk = 130;
		baseStat.patkGrowth = 3;
		baseStat.pdef = 40;
		baseStat.pdefGrowth = 3.8;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 30;
		baseStat.mdefGrowth = 1;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "bella":
		baseStat.patk = 120;
		baseStat.patkGrowth = 2;
		baseStat.pdef = 20;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 20;
		baseStat.mdefGrowth = 0.5;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 2;
		break;
		
		case "morgan":
		baseStat.patk = 110;
		baseStat.patkGrowth = 3;
		baseStat.pdef = 40;
		baseStat.pdefGrowth = 3.8;
		baseStat.matk = 0;
		baseStat.matkGrowth = 2;
		baseStat.mdef = 30;
		baseStat.mdefGrowth = 1.25;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 100;
		baseStat.mp = 500;
		baseStat.mpGrowth = 50;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "violet":
		baseStat.patk = 130;
		baseStat.patkGrowth = 4;
		baseStat.pdef = 20;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 20;
		baseStat.mdefGrowth = 0.5;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "spark":
		baseStat.patk = 80;
		baseStat.patkGrowth = 1;
		baseStat.pdef = 20;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 4;
		baseStat.mdef = 20;
		baseStat.mdefGrowth = 0.5;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 50;
		baseStat.mp = 500;
		baseStat.mpGrowth = 50;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "stepan":
		baseStat.patk = 120;
		baseStat.patkGrowth = 3;
		baseStat.pdef = 20;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 20;
		baseStat.mdefGrowth = 1.25;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "cheff":
		baseStat.patk = 130;
		baseStat.patkGrowth = 2;
		baseStat.pdef = 30;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 30;
		baseStat.mdefGrowth = 0.5;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "selkie":
		baseStat.patk = 120;
		baseStat.patkGrowth = 2;
		baseStat.pdef = 20;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 20;
		baseStat.mdefGrowth = 0.5;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 2;
		break;
		
		case "alicia":
		baseStat.patk = 130;
		baseStat.patkGrowth = 3;
		baseStat.pdef = 25;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 25;
		baseStat.mdefGrowth = 1;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "odri":
		baseStat.patk = 100;
		baseStat.patkGrowth = 1;
		baseStat.pdef = 30;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 2;
		baseStat.mdef = 30;
		baseStat.mdefGrowth = 0.5;
		baseStat.hp = 1400;
		baseStat.hpGrowth = 70;
		baseStat.mp = 500;
		baseStat.mpGrowth = 60;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "nina":
		baseStat.patk = 100;
		baseStat.patkGrowth = 3;
		baseStat.pdef = 35;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 25;
		baseStat.mdefGrowth = 1.25;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "coric":
		baseStat.patk = 120;
		baseStat.patkGrowth = 4;
		baseStat.pdef = 40;
		baseStat.pdefGrowth = 3.8;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 40;
		baseStat.mdefGrowth = 1.25;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 120;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "bastine":
		baseStat.patk = 120;
		baseStat.patkGrowth = 3;
		baseStat.pdef = 40;
		baseStat.pdefGrowth = 3.8;
		baseStat.matk = 0;
		baseStat.matkGrowth = 2;
		baseStat.mdef = 40;
		baseStat.mdefGrowth = 2;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 100;
		baseStat.mp = 500;
		baseStat.mpGrowth = 50;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "sonya":
		baseStat.patk = 120;
		baseStat.patkGrowth = 3;
		baseStat.pdef = 30;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 30;
		baseStat.mdefGrowth = 1.25;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 40;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		case "rukh":
		baseStat.patk = 110;
		baseStat.patkGrowth = 4;
		baseStat.pdef = 20;
		baseStat.pdefGrowth = 3.5;
		baseStat.matk = 0;
		baseStat.matkGrowth = 0;
		baseStat.mdef = 20;
		baseStat.mdefGrowth = 0.5;
		baseStat.hp = 1500;
		baseStat.hpGrowth = 80;
		baseStat.mp = 500;
		baseStat.mpGrowth = 50;
		baseStat.mpregen = 2;
		baseStat.atkspd = 0;
		baseStat.atkspdGrowth = 1;
		break;
		
		default:
		initStats();
	}
	
	var weaponName = document.getElementById("weapon").value;
	var weaponRarity = document.getElementById("weaponRarity").value;
	var weaponEquip = new Equip();
	equipStats = "weaponStats";
	
	switch(weaponName){
		case "steelSword":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 20;
				weaponEquip.pdef = 18;
				weaponEquip.mdef = 18;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", PHY.DEF+" + weaponEquip.pdef +
				", MAG.DEF+" + weaponEquip.mdef;
				
				break;
				
				case "rare":
				weaponEquip.patk = 30;
				weaponEquip.pdef = 24;
				weaponEquip.mdef = 24;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", PHY.DEF+" + weaponEquip.pdef +
				", MAG.DEF+" + weaponEquip.mdef;
				break;
				
				case "epic":
				weaponEquip.patk = 40;
				weaponEquip.pdef = 30;
				weaponEquip.mdef = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", PHY.DEF+" + weaponEquip.pdef +
				", MAG.DEF+" + weaponEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "crescentBlade":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 25;
				weaponEquip.atkspd = 10;
				weaponEquip.movspd = 3;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", ATK.SPD+" + weaponEquip.atkspd + "%" +
				", MOV.SPD+" + weaponEquip.movspd + "%";
				
				break;
				
				case "rare":
				weaponEquip.patk = 37.5;
				weaponEquip.atkspd = 15;
				weaponEquip.movspd = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", ATK.SPD+" + weaponEquip.atkspd + "%" + 
				", MOV.SPD+" + weaponEquip.movspd + "%";
				break;
				
				case "epic":
				weaponEquip.patk = 50;
				weaponEquip.atkspd = 20;
				weaponEquip.movspd = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", ATK.SPD+" + weaponEquip.atkspd + "%" + 
				", MOV.SPD+" + weaponEquip.movspd + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "heavyHammer":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 25;
				weaponEquip.ppenPercent = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", PHY.PEN+" + weaponEquip.ppenPercent + "%";
				break;
				
				case "rare":
				weaponEquip.patk = 37.5;
				weaponEquip.ppenPercent = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", PHY.PEN+" + weaponEquip.ppenPercent + "%";
				break;
				
				case "epic":
				weaponEquip.patk = 50;
				weaponEquip.ppenPercent = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk + 
				", PHY.PEN+" + weaponEquip.ppenPercent + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "kaulsGreatsword":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk;
				break;
				
				case "rare":
				weaponEquip.patk = 45;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk;
				break;
				
				case "epic":
				weaponEquip.patk = 60;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "splitAxe":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 25;
				weaponEquip.critrate = 13;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk +
				", CRIT.RATE+" + weaponEquip.critrate + "%";
				break;
				
				case "rare":
				weaponEquip.patk = 37.5;
				weaponEquip.critrate = 19;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk +
				", CRIT.RATE+" + weaponEquip.critrate + "%";
				break;
				
				case "epic":
				weaponEquip.patk = 50;
				weaponEquip.critrate = 25;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponEquip.patk +
				", CRIT.RATE+" + weaponEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "etherStaff":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.matk = 45;
				weaponEquip.mpenPercent = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", MAG.PEN+" + weaponEquip.mpenPercent + "%";
				break;
				
				case "rare":
				weaponEquip.matk = 67;
				weaponEquip.mpenPercent = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", MAG.PEN+" + weaponEquip.mpenPercent + "%";
				break;
				
				case "epic":
				weaponEquip.matk = 90;
				weaponEquip.mpenPercent = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", MAG.PEN+" + weaponEquip.mpenPercent + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "knightsScepter":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.matk = 30;
				weaponEquip.pdef = 18;
				weaponEquip.mdef = 18;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", PHY.DEF+" + weaponEquip.pdef +
				", MAG.DEF+" + weaponEquip.mdef;
				break;
				
				case "rare":
				weaponEquip.matk = 45;
				weaponEquip.pdef = 24;
				weaponEquip.mdef = 24;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", PHY.DEF+" + weaponEquip.pdef +
				", MAG.DEF+" + weaponEquip.mdef;
				break;
				
				case "epic":
				weaponEquip.matk = 60;
				weaponEquip.pdef = 30;
				weaponEquip.mdef = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", PHY.DEF+" + weaponEquip.pdef +
				", MAG.DEF+" + weaponEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "sagesStaff":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.matk = 35;
				weaponEquip.cdred = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", CD.RED+" + weaponEquip.cdred + "%";
				break;
				
				case "rare":
				weaponEquip.matk = 52;
				weaponEquip.cdred = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", CD.RED+" + weaponEquip.cdred + "%";
				break;
				
				case "epic":
				weaponEquip.matk = 70;
				weaponEquip.cdred = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponEquip.matk +
				", CD.RED+" + weaponEquip.cdred + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
	}
	
	var helmetName = document.getElementById("helmet").value;
	var helmetRarity = document.getElementById("helmetRarity").value;
	var helmetEquip = new Equip();
	var helmetMatkPercent = 0;
	equipStats = "helmetStats";
	
	switch(helmetName){
		case "etherCrown":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.matk = 15;
				helmetMatkPercent = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", MAG.ATK+" + helmetMatkPercent +"%";
				break;
				
				case "rare":
				helmetEquip.matk = 22;
				helmetMatkPercent = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", MAG.ATK+" + helmetMatkPercent +"%";
				break;
				
				case "epic":
				helmetEquip.matk = 30;
				helmetMatkPercent = 20;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", MAG.ATK+" + helmetMatkPercent +"%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "giantsHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.hp = 200;
				helmetEquip.cdred = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + helmetEquip.hp + 
				", CD.RED+" + helmetEquip.cdred +"%";
				break;
				
				case "rare":
				helmetEquip.hp = 300;
				helmetEquip.cdred = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + helmetEquip.hp + 
				", CD.RED+" + helmetEquip.cdred +"%";
				break;
				
				case "epic":
				helmetEquip.hp = 400;
				helmetEquip.cdred = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + helmetEquip.hp + 
				", CD.RED+" + helmetEquip.cdred +"%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "mithrilHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.matk = 15;
				helmetEquip.pdef = 15;
				helmetEquip.mdef = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", PHY.DEF+" + helmetEquip.pdef +
				", MAG.DEF+" + helmetEquip.mdef;
				break;
				
				case "rare":
				helmetEquip.matk = 22;
				helmetEquip.pdef = 22;
				helmetEquip.mdef = 22;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", PHY.DEF+" + helmetEquip.pdef +
				", MAG.DEF+" + helmetEquip.mdef;
				break;
				
				case "epic":
				helmetEquip.matk = 30;
				helmetEquip.pdef = 30;
				helmetEquip.mdef = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", PHY.DEF+" + helmetEquip.pdef +
				", MAG.DEF+" + helmetEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "sagesCrown":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.matk = 20;
				helmetEquip.mp = 100;
				helmetEquip.mpregen = 1;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", MP+" + helmetEquip.mp +
				", MP.REGEN+" + helmetEquip.mpregen;
				break;
				
				case "rare":
				helmetEquip.matk = 30;
				helmetEquip.mp = 150;
				helmetEquip.mpregen = 1.5;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", MP+" + helmetEquip.mp +
				", MP.REGEN+" + helmetEquip.mpregen;
				break;
				
				case "epic":
				helmetEquip.matk = 40;
				helmetEquip.mp = 200;
				helmetEquip.mpregen = 2;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetEquip.matk + 
				", MP+" + helmetEquip.mp +
				", MP.REGEN+" + helmetEquip.mpregen;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "snipersHat":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.patk = 10;
				helmetEquip.critrate = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + helmetEquip.patk + 
				", CRIT.RATE+" + helmetEquip.critrate + "%";
				break;
				
				case "rare":
				helmetEquip.patk = 15;
				helmetEquip.critrate = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + helmetEquip.patk + 
				", CRIT.RATE+" + helmetEquip.critrate + "%";
				break;
				
				case "epic":
				helmetEquip.patk = 20;
				helmetEquip.critrate = 20;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + helmetEquip.patk + 
				", CRIT.RATE+" + helmetEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "steelHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.pdef = 20;
				helmetEquip.mdef = 20;
				helmetEquip.hp = 100;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + helmetEquip.pdef + 
				", MAG.DEF+" + helmetEquip.mdef +
				", HP+" + helmetEquip.hp;
				break;
				
				case "rare":
				helmetEquip.pdef = 30;
				helmetEquip.mdef = 30;
				helmetEquip.hp = 150;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + helmetEquip.pdef + 
				", MAG.DEF+" + helmetEquip.mdef +
				", HP+" + helmetEquip.hp;
				break;
				
				case "epic":
				helmetEquip.pdef = 40;
				helmetEquip.mdef = 40;
				helmetEquip.hp = 200;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + helmetEquip.pdef + 
				", MAG.DEF+" + helmetEquip.mdef +
				", HP+" + helmetEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
		
	}
	var armorName = document.getElementById("armor").value;
	var armorRarity = document.getElementById("armorRarity").value;
	var armorEquip = new Equip();
	var armorMatkPercent = 0;
	equipStats = "armorStats";
	
	switch(armorName){
		case "etherRobe":
			switch(armorRarity){
				case "uncommon":
				armorEquip.matk = 40;
				armorMatkPercent = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.matk + 
				", MAG.ATK+" + armorMatkPercent + "%";
				break;
				
				case "rare":
				armorEquip.matk = 60;
				armorMatkPercent = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.matk + 
				", MAG.ATK+" + armorMatkPercent + "%";
				break;
				
				case "epic":
				armorEquip.matk = 80;
				armorMatkPercent = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.matk + 
				", MAG.ATK+" + armorMatkPercent + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "giantsArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.hp = 275;
				armorEquip.cdred = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.hp + 
				", CD.RED+" + armorEquip.cdred + "%";
				break;
				
				case "rare":
				armorEquip.hp = 412;
				armorEquip.cdred = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.hp + 
				", CD.RED+" + armorEquip.cdred + "%";
				break;
				
				case "epic":
				armorEquip.hp = 550;
				armorEquip.cdred = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.hp + 
				", CD.RED+" + armorEquip.cdred + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "gladiatorsArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.patk = 22;
				armorEquip.pdef = 12;
				armorEquip.mdef = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", PHY.DEF+" + armorEquip.pdef +
				", MAG.DEF+" + armorEquip.mdef;
				break;
				
				case "rare":
				armorEquip.patk = 33;
				armorEquip.pdef = 18;
				armorEquip.mdef = 18;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", PHY.DEF+" + armorEquip.pdef +
				", MAG.DEF+" + armorEquip.mdef;
				break;
				
				case "epic":
				armorEquip.patk = 45;
				armorEquip.pdef = 25;
				armorEquip.mdef = 25;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", PHY.DEF+" + armorEquip.pdef +
				", MAG.DEF+" + armorEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "huntersArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.patk = 20;
				armorEquip.atkspd = 15;
				armorEquip.movspd = 3;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", ATK.SPD+" + armorEquip.atkspd + "%" +
				", MOV.SPD+" + armorEquip.movspd + "%";
				break;
				
				case "rare":
				armorEquip.patk = 30;
				armorEquip.atkspd = 23;
				armorEquip.movspd = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", ATK.SPD+" + armorEquip.atkspd + "%" +
				", MOV.SPD+" + armorEquip.movspd + "%";
				break;
				
				case "epic":
				armorEquip.patk = 40;
				armorEquip.atkspd = 30;
				armorEquip.movspd = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", ATK.SPD+" + armorEquip.atkspd + "%" +
				", MOV.SPD+" + armorEquip.movspd + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "sagesRobe":
			switch(armorRarity){
				case "uncommon":
				armorEquip.matk = 30;
				armorEquip.cdred = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.matk + 
				", CD.RED+" + armorEquip.cdred + "%";
				break;
				
				case "rare":
				armorEquip.matk = 45;
				armorEquip.cdred = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.matk + 
				", CD.RED+" + armorEquip.cdred + "%";
				break;
				
				case "epic":
				armorEquip.matk = 60;
				armorEquip.cdred = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorEquip.matk + 
				", CD.RED+" + armorEquip.cdred + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "snipersArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.patk = 20;
				armorEquip.movspd = 3;
				armorEquip.critrate = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", MOV.SPD+" + armorEquip.movspd + "%" +
				", CRIT.RATE+" + armorEquip.critrate + "%";
				break;
				
				case "rare":
				armorEquip.patk = 30;
				armorEquip.movspd = 4;
				armorEquip.critrate = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", MOV.SPD+" + armorEquip.movspd + "%" +
				", CRIT.RATE+" + armorEquip.critrate + "%";
				break;
				
				case "epic":
				armorEquip.patk = 40;
				armorEquip.movspd = 5;
				armorEquip.critrate = 20;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorEquip.patk + 
				", MOV.SPD+" + armorEquip.movspd + "%" +
				", CRIT.RATE+" + armorEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "steelArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.pdef = 36;
				armorEquip.mdef = 36;
				armorEquip.hp = 125;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + armorEquip.pdef + 
				", MAG.DEF+" + armorEquip.mdef +
				", HP+" + armorEquip.hp;
				break;
				
				case "rare":
				armorEquip.pdef = 48;
				armorEquip.mdef = 48;
				armorEquip.hp = 187;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + armorEquip.pdef + 
				", MAG.DEF+" + armorEquip.mdef +
				", HP+" + armorEquip.hp;
				break;
				
				case "epic":
				armorEquip.pdef = 60;
				armorEquip.mdef = 60;
				armorEquip.hp = 250;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + armorEquip.pdef + 
				", MAG.DEF+" + armorEquip.mdef +
				", HP+" + armorEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
	
	}
	
	var gloveName = document.getElementById("gloves").value;
	var gloveRarity = document.getElementById("gloveRarity").value;
	var gloveEquip = new Equip();
	equipStats = "gloveStats";
	
	switch(gloveName){
		case "bloodyGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", PHY.ABSORB+6%";
				
				break;
				
				case "rare":
				gloveEquip.patk = 22;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", PHY.ABSORB+9%";
				break;
				
				case "epic":
				gloveEquip.patk = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", PHY.ABSORB+12%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "gladiatorsGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 15;
				gloveEquip.pdef = 7;
				gloveEquip.mdef = 7;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", PHY.DEF+" + gloveEquip.pdef +
				", MAG.DEF+" + gloveEquip.mdef;
				break;
				
				case "rare":
				gloveEquip.patk = 22;
				gloveEquip.pdef = 11;
				gloveEquip.mdef = 11;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", PHY.DEF+" + gloveEquip.pdef +
				", MAG.DEF+" + gloveEquip.mdef;
				break;
				
				case "epic":
				gloveEquip.patk = 30;
				gloveEquip.pdef = 15;
				gloveEquip.mdef = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", PHY.DEF+" + gloveEquip.pdef +
				", MAG.DEF+" + gloveEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "huntersGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 10;
				gloveEquip.atkspd = 15;
				gloveEquip.movspd = 3;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", ATK.SPD+" + gloveEquip.atkspd + "%" +
				", MOV.SPD+" + gloveEquip.movspd + "%";
				break;
				
				case "rare":
				gloveEquip.patk = 15;
				gloveEquip.atkspd = 23;
				gloveEquip.movspd = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", ATK.SPD+" + gloveEquip.atkspd + "%" +
				", MOV.SPD+" + gloveEquip.movspd + "%";
				break;
				
				case "epic":
				gloveEquip.patk = 20;
				gloveEquip.atkspd = 30;
				gloveEquip.movspd = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", ATK.SPD+" + gloveEquip.atkspd + "%" +
				", MOV.SPD+" + gloveEquip.movspd + "%";
				break;
			}
		break;
		
		case "ironGauntlet":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.pdef = 15;
				gloveEquip.mdef = 15;
				gloveEquip.cdred = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + gloveEquip.pdef +
				", MAG.DEF+" + gloveEquip.mdef +
				", CD.RED+" + gloveEquip.cdred + "%";
				break;
				
				case "rare":
				gloveEquip.pdef = 22;
				gloveEquip.mdef = 22;
				gloveEquip.cdred = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + gloveEquip.pdef +
				", MAG.DEF+" + gloveEquip.mdef +
				", CD.RED+" + gloveEquip.cdred + "%";
				break;
				
				case "epic":
				gloveEquip.pdef = 30;
				gloveEquip.mdef = 30;
				gloveEquip.cdred = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + gloveEquip.pdef +
				", MAG.DEF+" + gloveEquip.mdef +
				", CD.RED+" + gloveEquip.cdred + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "magesGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.matk = 15;
				gloveEquip.mpenPercent = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveEquip.matk +
				", MAG.PEN+" + gloveEquip.mpenPercent + "%";
				break;
				
				case "rare":
				gloveEquip.matk = 22;
				gloveEquip.mpenPercent = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveEquip.matk +
				", MAG.PEN+" + gloveEquip.mpenPercent + "%";
				break;
				
				case "epic":
				gloveEquip.matk = 30;
				gloveEquip.mpenPercent = 20;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveEquip.matk +
				", MAG.PEN+" + gloveEquip.mpenPercent + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "sagesGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.matk = 15;
				gloveEquip.cdred = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveEquip.matk +
				", CD.RED+" + gloveEquip.cdred + "%";
				break;
				
				case "rare":
				gloveEquip.matk = 22;
				gloveEquip.cdred = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveEquip.matk +
				", CD.RED+" + gloveEquip.cdred + "%";
				break;
				
				case "epic":
				gloveEquip.matk = 30;
				gloveEquip.cdred = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveEquip.matk +
				", CD.RED+" + gloveEquip.cdred + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "snipersGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 10;
				gloveEquip.critrate = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", CRIT.RATE+" + gloveEquip.critrate + "%";
				break;
				
				case "rare":
				gloveEquip.patk = 15;
				gloveEquip.critrate = 23;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", CRIT.RATE+" + gloveEquip.critrate + "%";
				break;
				
				case "epic":
				gloveEquip.patk = 20;
				gloveEquip.critrate = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveEquip.patk +
				", CRIT.RATE+" + gloveEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
		
	}
	
	var bootName = document.getElementById("boots").value;
	var bootRarity = document.getElementById("bootRarity").value;
	var bootEquip = new Equip();
	equipStats = "bootStats";
	
	switch(bootName){
		case "etherBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.mpen = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", MAG.PEN+" + bootEquip.mpen;
				break;
				
				case "rare":
				bootEquip.movspd = 22;
				bootEquip.mpen = 18;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", MAG.PEN+" + bootEquip.mpen;
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.mpen = 25;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", MAG.PEN+" + bootEquip.mpen;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "huntersBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.atkspd = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", ATK.SPD+" + bootEquip.atkspd + "%";
				break;
				
				case "rare":
				bootEquip.movspd = 23;
				bootEquip.atkspd = 23;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", ATK.SPD+" + bootEquip.atkspd + "%";
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.atkspd = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", ATK.SPD+" + bootEquip.atkspd + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "sagesBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.cdred = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", CD.RED+" + bootEquip.cdred + "%";
				break;
				
				case "rare":
				bootEquip.movspd = 23;
				bootEquip.cdred = 11;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", CD.RED+" + bootEquip.cdred + "%";
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.cdred = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", CD.RED+" + bootEquip.cdred + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "steelBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.pdef = 15;
				bootEquip.mdef = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", PHY.DEF+" + bootEquip.pdef +
				", MAG.DEF+" + bootEquip.mdef;
				break;
				
				case "rare":
				bootEquip.movspd = 22;
				bootEquip.pdef = 22;
				bootEquip.mdef = 22;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", PHY.DEF+" + bootEquip.pdef +
				", MAG.DEF+" + bootEquip.mdef;
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.pdef = 30;
				bootEquip.mdef = 30;
				
				document.getElementById(equipStats).innerHTML = 
				"MOV.SPD+" + bootEquip.movspd + "%" + 
				", PHY.DEF+" + bootEquip.pdef +
				", MAG.DEF+" + bootEquip.mdef;
				break;
				default:
				
				document.getElementById(equipStats).innerHTML = ""
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = ""
	}
	
	var accName = document.getElementById("accessory").value;
	var accRarity = document.getElementById("accRarity").value;
	var accEquip = new Equip();
	equipStats = "accStats";
	
	switch(accName){
		case "runeStatue":
			switch(accRarity){
				case "uncommon":
				accEquip.hp = 250;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + accEquip.hp;
				break;
				
				case "rare":
				accEquip.hp = 375;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + accEquip.hp;
				break;
				
				case "epic":
				accEquip.hp = 500;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + accEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "jaggedAccessory":
			switch(accRarity){
				case "uncommon":
				accEquip.atkspd = 10;
				accEquip.movspd = 3;
				accEquip.critrate = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + accEquip.atkspd + "%" +
				", MOV.SPD+" + accEquip.movspd + "%" +
				", CRIT.RATE+" + accEquip.critrate + "%";
				break;
				
				case "rare":
				accEquip.atkspd = 15;
				accEquip.movspd = 4;
				accEquip.critrate = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + accEquip.atkspd + "%" +
				", MOV.SPD+" + accEquip.movspd + "%" +
				", CRIT.RATE+" + accEquip.critrate + "%";
				break;
				
				case "epic":
				accEquip.atkspd = 20;
				accEquip.movspd = 5;
				accEquip.critrate = 20;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + accEquip.atkspd + "%" +
				", MOV.SPD+" + accEquip.movspd + "%" +
				", CRIT.RATE+" + accEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "statueOfLife":
			switch(accRarity){
				case "uncommon":
				accEquip.hpregen = 6;
				accEquip.mpregen = 1;
				
				document.getElementById(equipStats).innerHTML = 
				"HP.REGEN+" + accEquip.hpregen +
				", MP.REGEN+" + accEquip.mpregen;
				break;
				
				case "rare":
				accEquip.hpregen = 9;
				accEquip.mpregen = 1.5;
				
				document.getElementById(equipStats).innerHTML = 
				"HP.REGEN+" + accEquip.hpregen +
				", MP.REGEN+" + accEquip.mpregen;
				break;
				
				case "epic":
				accEquip.hpregen = 10;
				accEquip.mpregen = 2;
				
				document.getElementById(equipStats).innerHTML = 
				"HP.REGEN+" + accEquip.hpregen +
				", MP.REGEN+" + accEquip.mpregen;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "theAwakening":
			switch(accRarity){
				case "uncommon":
				accEquip.cdred = 10;
				
				document.getElementById(equipStats).innerHTML = 
				"CD.RED+" + accEquip.cdred + "%";
				break;
				
				case "rare":
				accEquip.cdred = 15;
				
				document.getElementById(equipStats).innerHTML = 
				"CD.RED+" + accEquip.cdred + "%";
				break;
				
				case "epic":
				accEquip.cdred = 20;
				
				document.getElementById(equipStats).innerHTML = 
				"CD.RED+" + accEquip.cdred + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "voodooDoll":
			switch(accRarity){
				case "uncommon":
				accEquip.mpen = 25;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.PEN+" + accEquip.mpen;
				break;
				
				case "rare":
				accEquip.mpen = 37;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.PEN+" + accEquip.mpen;
				break;
				
				case "epic":
				accEquip.mpen = 50;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.PEN+" + accEquip.mpen;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "manaCrystal":
			switch(accRarity){
				case "uncommon":
				accEquip.matk = 30;
				accEquip.mp = 100;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + accEquip.matk +
				", MP+" + accEquip.mp;
				break;
				
				case "rare":
				accEquip.matk = 45;
				accEquip.mp = 150;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + accEquip.matk +
				", MP+" + accEquip.mp;
				break;
				
				case "epic":
				accEquip.matk = 60;
				accEquip.mp = 200;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + accEquip.matk +
				", MP+" + accEquip.mp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
	}
	
	var weaponRuneName = document.getElementById("weaponRune").value;
	var weaponRuneRarity = document.getElementById("weaponRuneRarity").value;
	var weaponRuneEquip = new Equip();
	equipStats = "weaponRuneStats";
	
	switch(weaponRuneName){
		case "powerRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.patk = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponRuneEquip.patk;
				break;
				
				case "rare":
				weaponRuneEquip.patk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponRuneEquip.patk;
				break;
				
				case "epic":
				weaponRuneEquip.patk = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + weaponRuneEquip.patk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "deathRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.critrate = 2;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + weaponRuneEquip.critrate + "%";
				break;
				
				case "rare":
				weaponRuneEquip.critrate = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + weaponRuneEquip.critrate + "%";
				break;
				
				case "epic":
				weaponRuneEquip.critrate = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + weaponRuneEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "speedRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.atkspd = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + weaponRuneEquip.atkspd + "%";
				break;
				
				case "rare":
				weaponRuneEquip.atkspd = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + weaponRuneEquip.atkspd + "%";
				break;
				
				case "epic":
				weaponRuneEquip.atkspd = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + weaponRuneEquip.atkspd + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "defenseRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.pdef = 6;
				weaponRuneEquip.mdef = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + weaponRuneEquip.pdef +
				", MAG.DEF+" + weaponRuneEquip.mdef;
				break;
				
				case "rare":
				weaponRuneEquip.pdef = 9;
				weaponRuneEquip.mdef = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + weaponRuneEquip.pdef +
				", MAG.DEF+" + weaponRuneEquip.mdef;
				break;
				
				case "epic":
				weaponRuneEquip.pdef = 12;
				weaponRuneEquip.mdef = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + weaponRuneEquip.pdef +
				", MAG.DEF+" + weaponRuneEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "healthRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.hp = 50;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + weaponRuneEquip.hp;
				break;
				
				case "rare":
				weaponRuneEquip.hp = 75;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + weaponRuneEquip.hp;
				break;
				
				case "epic":
				weaponRuneEquip.hp = 100;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + weaponRuneEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "manaRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.matk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponRuneEquip.matk;
				break;
				
				case "rare":
				weaponRuneEquip.matk = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponRuneEquip.matk;
				break;
				
				case "epic":
				weaponRuneEquip.matk = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + weaponRuneEquip.matk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
	}
	
	var helmetRuneName = document.getElementById("helmetRune").value;
	var helmetRuneRarity = document.getElementById("helmetRuneRarity").value;
	var helmetRuneEquip = new Equip();
	equipStats = "helmetRuneStats";
	
	switch(helmetRuneName){
		case "powerRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.patk = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + helmetRuneEquip.patk;
				break;
				
				case "rare":
				helmetRuneEquip.patk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + helmetRuneEquip.patk;
				break;
				
				case "epic":
				helmetRuneEquip.patk = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + helmetRuneEquip.patk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "deathRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.critrate = 2;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + helmetRuneEquip.critrate + "%";
				break;
				
				case "rare":
				helmetRuneEquip.critrate = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + helmetRuneEquip.critrate + "%";
				break;
				
				case "epic":
				helmetRuneEquip.critrate = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + helmetRuneEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "speedRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.atkspd = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + helmetRuneEquip.atkspd + "%";
				break;
				
				case "rare":
				helmetRuneEquip.atkspd = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + helmetRuneEquip.atkspd + "%";
				break;
				
				case "epic":
				helmetRuneEquip.atkspd = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + helmetRuneEquip.atkspd + "%";
				break;
			}
		break;
		
		case "defenseRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.pdef = 6;
				helmetRuneEquip.mdef = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + helmetRuneEquip.pdef +
				", MAG.DEF+" + helmetRuneEquip.mdef;
				break;
				
				case "rare":
				helmetRuneEquip.pdef = 9;
				helmetRuneEquip.mdef = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + helmetRuneEquip.pdef +
				", MAG.DEF+" + helmetRuneEquip.mdef;
				break;
				
				case "epic":
				helmetRuneEquip.pdef = 12;
				helmetRuneEquip.mdef = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + helmetRuneEquip.pdef +
				", MAG.DEF+" + helmetRuneEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "healthRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.hp = 50;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + helmetRuneEquip.hp;
				break;
				
				case "rare":
				helmetRuneEquip.hp = 75;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + helmetRuneEquip.hp;
				break;
				
				case "epic":
				helmetRuneEquip.hp = 100;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + helmetRuneEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "manaRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.matk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetRuneEquip.matk;
				break;
				
				case "rare":
				helmetRuneEquip.matk = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetRuneEquip.matk;
				break;
				
				case "epic":
				helmetRuneEquip.matk = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + helmetRuneEquip.matk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
	}
	
	var armorRuneName = document.getElementById("armorRune").value;
	var armorRuneRarity = document.getElementById("armorRuneRarity").value;
	var armorRuneEquip = new Equip();
	equipStats = "armorRuneStats";
	
	switch(armorRuneName){
		case "powerRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.patk = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorRuneEquip.patk;
				break;
				
				case "rare":
				armorRuneEquip.patk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorRuneEquip.patk;
				break;
				
				case "epic":
				armorRuneEquip.patk = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + armorRuneEquip.patk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "deathRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.critrate = 2;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + armorRuneEquip.critrate + "%";
				break;
				
				case "rare":
				armorRuneEquip.critrate = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + armorRuneEquip.critrate + "%";
				break;
				
				case "epic":
				armorRuneEquip.critrate = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + armorRuneEquip.critrate + "%";
				break;
			}
		break;
		
		case "speedRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.atkspd = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + armorRuneEquip.critrate + "%";
				break;
				
				case "rare":
				armorRuneEquip.atkspd = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + armorRuneEquip.critrate + "%";
				break;
				
				case "epic":
				armorRuneEquip.atkspd = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + armorRuneEquip.critrate + "%";
				break;
			}
		break;
		
		case "defenseRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.pdef = 6;
				armorRuneEquip.mdef = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + armorRuneEquip.pdef +
				", MAG.DEF+" + armorRuneEquip.mdef;
				break;
				
				case "rare":
				armorRuneEquip.pdef = 9;
				armorRuneEquip.mdef = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + armorRuneEquip.pdef +
				", MAG.DEF+" + armorRuneEquip.mdef;
				break;
				
				case "epic":
				armorRuneEquip.pdef = 12;
				armorRuneEquip.mdef = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + armorRuneEquip.pdef +
				", MAG.DEF+" + armorRuneEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "healthRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.hp = 50;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + armorRuneEquip.hp;
				break;
				
				case "rare":
				armorRuneEquip.hp = 75;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + armorRuneEquip.hp;
				break;
				
				case "epic":
				armorRuneEquip.hp = 100;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + armorRuneEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "manaRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.matk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorRuneEquip.matk;
				break;
				
				case "rare":
				armorRuneEquip.matk = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorRuneEquip.matk;
				break;
				
				case "epic":
				armorRuneEquip.matk = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + armorRuneEquip.matk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";'
	}
	
	var gloveRuneName = document.getElementById("gloveRune").value;
	var gloveRuneRarity = document.getElementById("gloveRuneRarity").value;
	var gloveRuneEquip = new Equip();
	equipStats = "gloveRuneStats";
	
	switch(gloveRuneName){
		case "powerRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.patk = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveRuneEquip.patk;
				break;
				
				case "rare":
				gloveRuneEquip.patk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveRuneEquip.patk;
				break;
				
				case "epic":
				gloveRuneEquip.patk = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + gloveRuneEquip.patk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
		
		case "deathRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.critrate = 2;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + gloveRuneEquip.critrate;
				break;
				
				case "rare":
				gloveRuneEquip.critrate = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + gloveRuneEquip.critrate;
				break;
				
				case "epic":
				gloveRuneEquip.critrate = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + gloveRuneEquip.critrate;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "speedRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.atkspd = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + gloveRuneEquip.atkspd;
				break;
				
				case "rare":
				gloveRuneEquip.atkspd = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + gloveRuneEquip.atkspd;
				break;
				
				case "epic":
				gloveRuneEquip.atkspd = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + gloveRuneEquip.atkspd;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "defenseRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.pdef = 6;
				gloveRuneEquip.mdef = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + gloveRuneEquip.pdef +
				"MAG.DEF+" + gloveRuneEquip.mdef;
				break;
				
				case "rare":
				gloveRuneEquip.pdef = 9;
				gloveRuneEquip.mdef = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + gloveRuneEquip.pdef +
				"MAG.DEF+" + gloveRuneEquip.mdef;
				break;
				
				case "epic":
				gloveRuneEquip.pdef = 12;
				gloveRuneEquip.mdef = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + gloveRuneEquip.pdef +
				"MAG.DEF+" + gloveRuneEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "healthRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.hp = 50;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + gloveRuneEquip.hp;
				break;
				
				case "rare":
				gloveRuneEquip.hp = 75;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + gloveRuneEquip.hp;
				break;
				
				case "epic":
				gloveRuneEquip.hp = 100;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + gloveRuneEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "manaRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.matk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveRuneEquip.matk;
				break;
				
				case "rare":
				gloveRuneEquip.matk = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveRuneEquip.matk;
				break;
				
				case "epic":
				gloveRuneEquip.matk = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + gloveRuneEquip.matk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
	}
	
	var bootRuneName = document.getElementById("bootRune").value;
	var bootRuneRarity = document.getElementById("bootRuneRarity").value;
	var bootRuneEquip = new Equip();
	equipStats = "bootRuneStats";
	
	switch(bootRuneName){
		case "powerRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.patk = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + bootRuneEquip.patk;
				break;
				
				case "rare":
				bootRuneEquip.patk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + bootRuneEquip.patk;
				break;
				
				case "epic":
				bootRuneEquip.patk = 8;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.ATK+" + bootRuneEquip.patk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "deathRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.critrate = 2;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + bootRuneEquip.critrate + "%";
				break;
				
				case "rare":
				bootRuneEquip.critrate = 4;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + bootRuneEquip.critrate + "%";
				break;
				
				case "epic":
				bootRuneEquip.critrate = 5;
				
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + bootRuneEquip.critrate + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = 
				"CRIT.RATE+" + bootRuneEquip.critrate + "%";
			}
		break;
		
		case "speedRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.atkspd = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + bootRuneEquip.atkspd + "%";
				break;
				
				case "rare":
				bootRuneEquip.atkspd = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + bootRuneEquip.atkspd + "%";
				break;
				
				case "epic":
				bootRuneEquip.atkspd = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"ATK.SPD+" + bootRuneEquip.atkspd + "%";
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "defenseRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.pdef = 6;
				bootRuneEquip.mdef = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + bootRuneEquip.pdef +
				", MAG.DEF+" + bootRuneEquip.mdef;
				break;
				
				case "rare":
				bootRuneEquip.pdef = 9;
				bootRuneEquip.mdef = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + bootRuneEquip.pdef +
				", MAG.DEF+" + bootRuneEquip.mdef;
				break;
				
				case "epic":
				bootRuneEquip.pdef = 12;
				bootRuneEquip.mdef = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"PHY.DEF+" + bootRuneEquip.pdef +
				", MAG.DEF+" + bootRuneEquip.mdef;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "healthRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.hp = 50;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + bootRuneEquip.hp;
				break;
				
				case "rare":
				bootRuneEquip.hp = 75;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + bootRuneEquip.hp;
				break;
				
				case "epic":
				bootRuneEquip.hp = 100;
				
				document.getElementById(equipStats).innerHTML = 
				"HP+" + bootRuneEquip.hp;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		case "manaRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.matk = 6;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + bootRuneEquip.matk;
				break;
				
				case "rare":
				bootRuneEquip.matk = 9;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + bootRuneEquip.matk;
				break;
				
				case "epic":
				bootRuneEquip.matk = 12;
				
				document.getElementById(equipStats).innerHTML = 
				"MAG.ATK+" + bootRuneEquip.matk;
				break;
				
				default:
				document.getElementById(equipStats).innerHTML = "";
			}
		break;
		
		default:
		document.getElementById(equipStats).innerHTML = "";
	}
	
	var equipList = [
	weaponEquip, helmetEquip, armorEquip, gloveEquip, bootEquip, accEquip,
	weaponRuneEquip, helmetRuneEquip, armorRuneEquip, gloveRuneEquip, bootRuneEquip
	];
	
	champion.patk = baseStat.patk + baseStat.patkGrowth*level-baseStat.patkGrowth;
	champion.matk = baseStat.matk + weaponEquip.matk;
	champion.pdef = baseStat.pdef + baseStat.pdefGrowth*level-baseStat.pdefGrowth;
	champion.mdef = baseStat.mdef + baseStat.mdefGrowth*level-baseStat.mdefGrowth;
	
	champion.hp = baseStat.hp + baseStat.hpGrowth*level-baseStat.hpGrowth;
	champion.mp = baseStat.mp + baseStat.mpGrowth*level-baseStat.mpGrowth;
	champion.atkspd = baseStat.atkspd + baseStat.atkspdGrowth*level-baseStat.atkspdGrowth;
	champion.critrate = 0;
	
	champion.cdred = 0;
	champion.hpregen = 0;
	champion.movspd = 0;
	champion.mpregen = baseStat.mpregen;
	
	champion.ppen = 0;
	champion.ppenPercent = 0;
	champion.mpen = 0;
	champion.mpenPercent = 0;
	
	for(i in equipList){
		champion.patk += equipList[i].patk;
		champion.matk += equipList[i].matk;
		champion.pdef += equipList[i].pdef;
		champion.mdef += equipList[i].mdef;
		
		champion.hp += equipList[i].hp;
		champion.mp += equipList[i].mp;
		champion.atkspd += equipList[i].atkspd;
		champion.critrate += equipList[i].critrate;
		
		champion.cdred += equipList[i].cdred;
		champion.hpregen += equipList[i].hpregen;
		champion.movspd += equipList[i].movspd;
		champion.mpregen += equipList[i].mpregen;
		
		champion.ppen += equipList[i].ppen;
		champion.ppenPercent += equipList[i].ppenPercent;
		champion.mpen += equipList[i].mpen;
		champion.mpenPercent += equipList[i].mpenPercent;
	}
	
	champion.matk *= (1 + (armorMatkPercent/100 + helmetMatkPercent/100));
	
	var i = 0;
	var j = 0;
	var championStats = Object.values(champion);
	for(j in championStats){document.getElementById(stats[i++]).innerHTML = championStats[j].toFixed(1);}
}
