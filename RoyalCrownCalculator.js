var champion = {
	patk:0,matk:0,pdef:0,mdef:0,
	hp:0,mp:0,atkspd:0,critrate:0,
	cdred:0,hpregen:0,movspd:0,mpregen:0,
	ppen:0,ppenPercent:0,mpen:0,mpenPercent:0
};

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

function initStats(){
	var stats = [
	"patkStat","matkStat","pdefStat","mdefStat",
	"hpStat","mpStat","atkspdStat","critrateStat",
	"cdredStat","hpregenStat","movspdStat","mpregenStat",
	"ppenStat","ppenPercentStat","mpenStat","mpenPercentStat"
	];
	for(i in stats){document.getElementById(stats[i]).innerHTML = 0;}
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
	var baseStat = new BaseStats();
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
				weaponEquip.patk = 40;
				weaponEquip.pdef = 30;
				weaponEquip.mdef = 30;
				break;
			}
		break;
		
		case "crescentBlade":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 25;
				weaponEquip.atkspd = 10;
				weaponEquip.movspd = 3;
				break;
				
				case "rare":
				weaponEquip.patk = 37.5;
				weaponEquip.atkspd = 15;
				weaponEquip.movspd = 4;
				break;
				
				case "epic":
				weaponEquip.patk = 50;
				weaponEquip.atkspd = 20;
				weaponEquip.movspd = 5;
				break;
			}
		break;
		
		case "heavyHammer":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 25;
				weaponEquip.ppenPercent = 5;
				break;
				
				case "rare":
				weaponEquip.patk = 37.5;
				weaponEquip.ppenPercent = 8;
				break;
				
				case "epic":
				weaponEquip.patk = 50;
				weaponEquip.ppenPercent = 10;
				break;
			}
		break;
		
		case "kaulsGreatsword":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 30;
				break;
				
				case "rare":
				weaponEquip.patk = 45;
				break;
				
				case "epic":
				weaponEquip.patk = 60;
				break;
			}
		break;
		
		case "splitAxe":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.patk = 25;
				weaponEquip.critrate = 13;
				break;
				
				case "rare":
				weaponEquip.patk = 37.5;
				weaponEquip.critrate = 19;
				break;
				
				case "epic":
				weaponEquip.patk = 50;
				weaponEquip.critrate = 25;
				break;
			}
		break;
		
		case "etherStaff":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.matk = 45;
				weaponEquip.mpenPercent = 5;
				break;
				
				case "rare":
				weaponEquip.matk = 67;
				weaponEquip.mpenPercent = 8;
				break;
				
				case "epic":
				weaponEquip.matk = 90;
				weaponEquip.mpenPercent = 10;
				break;
			}
		break;
		
		case "knightsScepter":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.matk = 30;
				weaponEquip.pdef = 18;
				weaponEquip.mdef = 18;
				break;
				
				case "rare":
				weaponEquip.matk = 45;
				weaponEquip.pdef = 24;
				weaponEquip.mdef = 24;
				break;
				
				case "epic":
				weaponEquip.matk = 60;
				weaponEquip.pdef = 30;
				weaponEquip.mdef = 30;
				break;
			}
		break;
		
		case "sagesStaff":
			switch(weaponRarity){
				case "uncommon":
				weaponEquip.matk = 35;
				weaponEquip.cdred = 5;
				break;
				
				case "rare":
				weaponEquip.matk = 52;
				weaponEquip.cdred = 8;
				break;
				
				case "epic":
				weaponEquip.matk = 70;
				weaponEquip.cdred = 10;
				break;
			}
		break;
		
	}
	
	var helmetName = document.getElementById("helmet").value;
	var helmetRarity = document.getElementById("helmetRarity").value;
	var helmetEquip = new Equip();
	var helmetMatkPercent = 0;
	
	switch(helmetName){
		case "etherCrown":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.matk = 15;
				helmetMatkPercent = 10;
				break;
				
				case "rare":
				helmetEquip.matk = 22;
				helmetMatkPercent = 15;
				break;
				
				case "epic":
				helmetEquip.matk = 30;
				helmetMatkPercent = 20;
				break;
			}
		break;
		
		case "giantsHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.hp = 200;
				helmetEquip.cdred = 5;
				break;
				
				case "rare":
				helmetEquip.hp = 300;
				helmetEquip.cdred = 8;
				break;
				
				case "epic":
				helmetEquip.hp = 400;
				helmetEquip.cdred = 10;
				break;
			}
		break;
		
		case "mithrilHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.matk = 15;
				helmetEquip.pdef = 15;
				helmetEquip.mdef = 15;
				break;
				
				case "rare":
				helmetEquip.matk = 22;
				helmetEquip.pdef = 22;
				helmetEquip.mdef = 22;
				break;
				
				case "epic":
				helmetEquip.matk = 30;
				helmetEquip.pdef = 30;
				helmetEquip.mdef = 30;
				break;
			}
		break;
		
		case "sagesCrown":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.matk = 20;
				helmetEquip.mp = 100;
				helmetEquip.mpregen = 1;
				break;
				
				case "rare":
				helmetEquip.matk = 30;
				helmetEquip.mp = 150;
				helmetEquip.mpregen = 1.5;
				break;
				
				case "epic":
				helmetEquip.matk = 40;
				helmetEquip.mp = 200;
				helmetEquip.mpregen = 2;
				break;
			}
		break;
		
		case "snipersHat":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.patk = 10;
				helmetEquip.critrate = 10;
				break;
				
				case "rare":
				helmetEquip.patk = 15;
				helmetEquip.critrate = 15;
				break;
				
				case "epic":
				helmetEquip.patk = 20;
				helmetEquip.critrate = 20;
				break;
			}
		break;
		
		case "steelHelm":
			switch(helmetRarity){
				case "uncommon":
				helmetEquip.pdef = 20;
				helmetEquip.mdef = 20;
				helmetEquip.hp = 100;
				break;
				
				case "rare":
				helmetEquip.pdef = 30;
				helmetEquip.mdef = 30;
				helmetEquip.hp = 150;
				break;
				
				case "epic":
				helmetEquip.pdef = 40;
				helmetEquip.mdef = 40;
				helmetEquip.hp = 200;
				break;
			}
		break;
		
	}
	var armorName = document.getElementById("armor").value;
	var armorRarity = document.getElementById("armorRarity").value;
	var armorEquip = new Equip();
	var armorMatkPercent = 0;
	
	switch(armorName){
		case "etherRobe":
			switch(armorRarity){
				case "uncommon":
				armorEquip.matk = 40;
				armorMatkPercent = 5;
				break;
				
				case "rare":
				armorEquip.matk = 60;
				armorMatkPercent = 8;
				break;
				
				case "epic":
				armorEquip.matk = 80;
				armorMatkPercent = 10;
				break;
			}
		break;
		
		case "giantsArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.hp = 275;
				armorEquip.cdred = 5;
				break;
				
				case "rare":
				armorEquip.hp = 412;
				armorEquip.cdred = 8;
				break;
				
				case "epic":
				armorEquip.hp = 550;
				armorEquip.cdred = 10;
				break;
			}
		break;
		
		case "gladiatorsArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.patk = 22;
				armorEquip.pdef = 12;
				armorEquip.mdef = 12;
				break;
				
				case "rare":
				armorEquip.patk = 33;
				armorEquip.pdef = 18;
				armorEquip.mdef = 18;
				break;
				
				case "epic":
				armorEquip.patk = 45;
				armorEquip.pdef = 25;
				armorEquip.mdef = 25;
				break;
			}
		break;
		
		case "huntersArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.patk = 20;
				armorEquip.atkspd = 15;
				armorEquip.movspd = 3;
				break;
				
				case "rare":
				armorEquip.patk = 30;
				armorEquip.atkspd = 23;
				armorEquip.movspd = 4;
				break;
				
				case "epic":
				armorEquip.patk = 40;
				armorEquip.atkspd = 30;
				armorEquip.movspd = 5;
				break;
			}
		break;
		
		case "sagesRobe":
			switch(armorRarity){
				case "uncommon":
				armorEquip.matk = 30;
				armorEquip.cdred = 5;
				break;
				
				case "rare":
				armorEquip.matk = 45;
				armorEquip.cdred = 8;
				break;
				
				case "epic":
				armorEquip.matk = 60;
				armorEquip.cdred = 10;
				break;
			}
		break;
		
		case "snipersArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.patk = 20;
				armorEquip.movspd = 3;
				armorEquip.critrate = 10;
				break;
				
				case "rare":
				armorEquip.patk = 30;
				armorEquip.movspd = 4;
				armorEquip.critrate = 15;
				break;
				
				case "epic":
				armorEquip.patk = 40;
				armorEquip.movspd = 5;
				armorEquip.critrate = 20;
				break;
			}
		break;
		
		case "steelArmor":
			switch(armorRarity){
				case "uncommon":
				armorEquip.pdef = 36;
				armorEquip.mdef = 36;
				armorEquip.hp = 125;
				break;
				
				case "rare":
				armorEquip.pdef = 48;
				armorEquip.mdef = 48;
				armorEquip.hp = 187;
				break;
				
				case "epic":
				armorEquip.pdef = 60;
				armorEquip.mdef = 60;
				armorEquip.hp = 250;
				break;
			}
		break;
	
	}
	
	var gloveName = document.getElementById("gloves").value;
	var gloveRarity = document.getElementById("gloveRarity").value;
	var gloveEquip = new Equip();
	
	switch(gloveName){
		case "bloodyGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 15;
				break;
				
				case "rare":
				gloveEquip.patk = 22;
				break;
				
				case "epic":
				gloveEquip.patk = 30;
				break;
			}
		break;
		
		case "gladiatorsGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 15;
				gloveEquip.pdef = 7;
				gloveEquip.mdef = 7;
				break;
				
				case "rare":
				gloveEquip.patk = 22;
				gloveEquip.pdef = 11;
				gloveEquip.mdef = 11;
				break;
				
				case "epic":
				gloveEquip.patk = 30;
				gloveEquip.pdef = 15;
				gloveEquip.mdef = 15;
				break;
			}
		break;
		
		case "huntersGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 10;
				gloveEquip.atkspd = 15;
				gloveEquip.movspd = 3;
				break;
				
				case "rare":
				gloveEquip.patk = 15;
				gloveEquip.atkspd = 23;
				gloveEquip.movspd = 4;
				break;
				
				case "epic":
				gloveEquip.patk = 20;
				gloveEquip.atkspd = 30;
				gloveEquip.movspd = 5;
				break;
			}
		break;
		
		case "ironGauntlet":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.pdef = 15;
				gloveEquip.mdef = 15;
				gloveEquip.cdred = 5;
				break;
				
				case "rare":
				gloveEquip.pdef = 22;
				gloveEquip.mdef = 22;
				gloveEquip.cdred = 8;
				break;
				
				case "epic":
				gloveEquip.pdef = 30;
				gloveEquip.mdef = 30;
				gloveEquip.cdred = 10;
				break;
			}
		break;
		
		case "magesGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.matk = 15;
				gloveEquip.mpenPercent = 10;
				break;
				
				case "rare":
				gloveEquip.matk = 22;
				gloveEquip.mpenPercent = 15;
				break;
				
				case "epic":
				gloveEquip.matk = 30;
				gloveEquip.mpenPercent = 20;
				break;
			}
		break;
		
		case "sagesGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.matk = 15;
				gloveEquip.cdred = 5;
				break;
				
				case "rare":
				gloveEquip.matk = 22;
				gloveEquip.cdred = 8;
				break;
				
				case "epic":
				gloveEquip.matk = 30;
				gloveEquip.cdred = 10;
				break;
			}
		break;
		
		case "snipersGloves":
			switch(gloveRarity){
				case "uncommon":
				gloveEquip.patk = 10;
				gloveEquip.critrate = 15;
				break;
				
				case "rare":
				gloveEquip.patk = 15;
				gloveEquip.critrate = 23;
				break;
				
				case "epic":
				gloveEquip.patk = 20;
				gloveEquip.critrate = 30;
				break;
			}
		break;
		
	}
	
	var bootName = document.getElementById("boots").value;
	var bootRarity = document.getElementById("bootRarity").value;
	var bootEquip = new Equip();
	
	switch(bootName){
		case "etherBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.mpen = 12;
				break;
				
				case "rare":
				bootEquip.movspd = 22;
				bootEquip.mpen = 18;
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.mpen = 25;
				break;
			}
		break;
		
		case "huntersBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.atkspd = 15;
				break;
				
				case "rare":
				bootEquip.movspd = 23;
				bootEquip.atkspd = 23;
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.atkspd = 30;
				break;
			}
		break;
		
		case "sagesBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.cdred = 8;
				break;
				
				case "rare":
				bootEquip.movspd = 23;
				bootEquip.cdred = 11;
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.cdred = 15;
				break;
			}
		break;
		
		case "steelBoots":
			switch(bootRarity){
				case "uncommon":
				bootEquip.movspd = 15;
				bootEquip.pdef = 15;
				bootEquip.mdef = 15;
				break;
				
				case "rare":
				bootEquip.movspd = 22;
				bootEquip.pdef = 22;
				bootEquip.mdef = 22;
				break;
				
				case "epic":
				bootEquip.movspd = 30;
				bootEquip.pdef = 30;
				bootEquip.mdef = 30;
				break;
			}
		break;
	}
	
	var accName = document.getElementById("accessory").value;
	var accRarity = document.getElementById("accRarity").value;
	var accEquip = new Equip();
	
	switch(accName){
		case "runeStatue":
			switch(accRarity){
				case "uncommon":
				accEquip.hp = 250;
				break;
				
				case "rare":
				accEquip.hp = 375;
				break;
				
				case "epic":
				accEquip.hp = 500;
				break;
			}
		break;
		
		case "jaggedAccessory":
			switch(accRarity){
				case "uncommon":
				accEquip.atkspd = 10;
				accEquip.movspd = 3;
				accEquip.critrate = 10;
				break;
				
				case "rare":
				accEquip.atkspd = 15;
				accEquip.movspd = 4;
				accEquip.critrate = 15;
				break;
				
				case "epic":
				accEquip.atkspd = 20;
				accEquip.movspd = 5;
				accEquip.critrate = 20;
				break;
			}
		break;
		
		case "statueOfLife":
			switch(accRarity){
				case "uncommon":
				accEquip.hpregen = 6;
				accEquip.mpregen = 1;
				break;
				
				case "rare":
				accEquip.hpregen = 9;
				accEquip.mpregen = 1.5;
				break;
				
				case "epic":
				accEquip.hpregen = 10;
				accEquip.mpregen = 2;
				break;
			}
		break;
		
		case "theAwakening":
			switch(accRarity){
				case "uncommon":
				accEquip.cdred = 10;
				break;
				
				case "rare":
				accEquip.cdred = 15;
				break;
				
				case "epic":
				accEquip.cdred = 20;
				break;
			}
		break;
		
		case "voodooDoll":
			switch(accRarity){
				case "uncommon":
				accEquip.mpen = 25;
				break;
				
				case "rare":
				accEquip.mpen = 37;
				break;
				
				case "epic":
				accEquip.mpen = 50;
				break;
			}
		break;
		
		case "manaCrystal":
			switch(accRarity){
				case "uncommon":
				accEquip.matk = 30;
				accEquip.mp = 100;
				break;
				
				case "rare":
				accEquip.matk = 45;
				accEquip.mp = 150;
				break;
				
				case "epic":
				accEquip.matk = 60;
				accEquip.mp = 200;
				break;
			}
		break;
	}
	
	var weaponRuneName = document.getElementById("weaponRune").value;
	var weaponRuneRarity = document.getElementById("weaponRuneRarity").value;
	var weaponRuneEquip = new Equip();
	
	switch(weaponRuneName){
		case "powerRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.patk = 4;
				break;
				
				case "rare":
				weaponRuneEquip.patk = 6;
				break;
				
				case "epic":
				weaponRuneEquip.patk = 8;
				break;
			}
		break;
		
		case "deathRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.critrate = 2;
				break;
				
				case "rare":
				weaponRuneEquip.critrate = 4;
				break;
				
				case "epic":
				weaponRuneEquip.critrate = 5;
				break;
			}
		break;
		
		case "speedRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.atkspd = 6;
				break;
				
				case "rare":
				weaponRuneEquip.atkspd = 9;
				break;
				
				case "epic":
				weaponRuneEquip.atkspd = 12;
				break;
			}
		break;
		
		case "defenseRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.pdef = 6;
				weaponRuneEquip.mdef = 6;
				break;
				
				case "rare":
				weaponRuneEquip.pdef = 9;
				weaponRuneEquip.mdef = 9;
				break;
				
				case "epic":
				weaponRuneEquip.pdef = 12;
				weaponRuneEquip.mdef = 12;
				break;
			}
		break;
		
		case "healthRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.hp = 50;
				break;
				
				case "rare":
				weaponRuneEquip.hp = 75;
				break;
				
				case "epic":
				weaponRuneEquip.hp = 100;
				break;
			}
		break;
		
		case "manaRune":
			switch(weaponRuneRarity){
				case "uncommon":
				weaponRuneEquip.matk = 6;
				break;
				
				case "rare":
				weaponRuneEquip.matk = 9;
				break;
				
				case "epic":
				weaponRuneEquip.matk = 12;
				break;
			}
		break;
	}
	
	var helmetRuneName = document.getElementById("helmetRune").value;
	var helmetRuneRarity = document.getElementById("helmetRuneRarity").value;
	var helmetRuneEquip = new Equip();
	
	switch(helmetRuneName){
		case "powerRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.patk = 4;
				break;
				
				case "rare":
				helmetRuneEquip.patk = 6;
				break;
				
				case "epic":
				helmetRuneEquip.patk = 8;
				break;
			}
		break;
		
		case "deathRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.critrate = 2;
				break;
				
				case "rare":
				helmetRuneEquip.critrate = 4;
				break;
				
				case "epic":
				helmetRuneEquip.critrate = 5;
				break;
			}
		break;
		
		case "speedRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.atkspd = 6;
				break;
				
				case "rare":
				helmetRuneEquip.atkspd = 9;
				break;
				
				case "epic":
				helmetRuneEquip.atkspd = 12;
				break;
			}
		break;
		
		case "defenseRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.pdef = 6;
				helmetRuneEquip.mdef = 6;
				break;
				
				case "rare":
				helmetRuneEquip.pdef = 9;
				helmetRuneEquip.mdef = 9;
				break;
				
				case "epic":
				helmetRuneEquip.pdef = 12;
				helmetRuneEquip.mdef = 12;
				break;
			}
		break;
		
		case "healthRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.hp = 50;
				break;
				
				case "rare":
				helmetRuneEquip.hp = 75;
				break;
				
				case "epic":
				helmetRuneEquip.hp = 100;
				break;
			}
		break;
		
		case "manaRune":
			switch(helmetRuneRarity){
				case "uncommon":
				helmetRuneEquip.matk = 6;
				break;
				
				case "rare":
				helmetRuneEquip.matk = 9;
				break;
				
				case "epic":
				helmetRuneEquip.matk = 12;
				break;
			}
		break;
	}
	
	var armorRuneName = document.getElementById("armorRune").value;
	var armorRuneRarity = document.getElementById("armorRuneRarity").value;
	var armorRuneEquip = new Equip();
	
	switch(armorRuneName){
		case "powerRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.patk = 4;
				break;
				
				case "rare":
				armorRuneEquip.patk = 6;
				break;
				
				case "epic":
				armorRuneEquip.patk = 8;
				break;
			}
		break;
		
		case "deathRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.critrate = 2;
				break;
				
				case "rare":
				armorRuneEquip.critrate = 4;
				break;
				
				case "epic":
				armorRuneEquip.critrate = 5;
				break;
			}
		break;
		
		case "speedRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.atkspd = 6;
				break;
				
				case "rare":
				armorRuneEquip.atkspd = 9;
				break;
				
				case "epic":
				armorRuneEquip.atkspd = 12;
				break;
			}
		break;
		
		case "defenseRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.pdef = 6;
				armorRuneEquip.mdef = 6;
				break;
				
				case "rare":
				armorRuneEquip.pdef = 9;
				armorRuneEquip.mdef = 9;
				break;
				
				case "epic":
				armorRuneEquip.pdef = 12;
				armorRuneEquip.mdef = 12;
				break;
			}
		break;
		
		case "healthRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.hp = 50;
				break;
				
				case "rare":
				armorRuneEquip.hp = 75;
				break;
				
				case "epic":
				armorRuneEquip.hp = 100;
				break;
			}
		break;
		
		case "manaRune":
			switch(armorRuneRarity){
				case "uncommon":
				armorRuneEquip.matk = 6;
				break;
				
				case "rare":
				armorRuneEquip.matk = 9;
				break;
				
				case "epic":
				armorRuneEquip.matk = 12;
				break;
			}
		break;
	}
	
	var gloveRuneName = document.getElementById("gloveRune").value;
	var gloveRuneRarity = document.getElementById("gloveRuneRarity").value;
	var gloveRuneEquip = new Equip();
	
	switch(gloveRuneName){
		case "powerRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.patk = 4;
				break;
				
				case "rare":
				gloveRuneEquip.patk = 6;
				break;
				
				case "epic":
				gloveRuneEquip.patk = 8;
				break;
			}
		break;
		
		case "deathRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.critrate = 2;
				break;
				
				case "rare":
				gloveRuneEquip.critrate = 4;
				break;
				
				case "epic":
				gloveRuneEquip.critrate = 5;
				break;
			}
		break;
		
		case "speedRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.atkspd = 6;
				break;
				
				case "rare":
				gloveRuneEquip.atkspd = 9;
				break;
				
				case "epic":
				gloveRuneEquip.atkspd = 12;
				break;
			}
		break;
		
		case "defenseRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.pdef = 6;
				gloveRuneEquip.mdef = 6;
				break;
				
				case "rare":
				gloveRuneEquip.pdef = 9;
				gloveRuneEquip.mdef = 9;
				break;
				
				case "epic":
				gloveRuneEquip.pdef = 12;
				gloveRuneEquip.mdef = 12;
				break;
			}
		break;
		
		case "healthRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.hp = 50;
				break;
				
				case "rare":
				gloveRuneEquip.hp = 75;
				break;
				
				case "epic":
				gloveRuneEquip.hp = 100;
				break;
			}
		break;
		
		case "manaRune":
			switch(gloveRuneRarity){
				case "uncommon":
				gloveRuneEquip.matk = 6;
				break;
				
				case "rare":
				gloveRuneEquip.matk = 9;
				break;
				
				case "epic":
				gloveRuneEquip.matk = 12;
				break;
			}
		break;
	}
	
	var bootRuneName = document.getElementById("bootRune").value;
	var bootRuneRarity = document.getElementById("bootRuneRarity").value;
	var bootRuneEquip = new Equip();
	
	switch(bootRuneName){
		case "powerRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.patk = 4;
				break;
				
				case "rare":
				bootRuneEquip.patk = 6;
				break;
				
				case "epic":
				bootRuneEquip.patk = 8;
				break;
			}
		break;
		
		case "deathRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.critrate = 2;
				break;
				
				case "rare":
				bootRuneEquip.critrate = 4;
				break;
				
				case "epic":
				bootRuneEquip.critrate = 5;
				break;
			}
		break;
		
		case "speedRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.atkspd = 6;
				break;
				
				case "rare":
				bootRuneEquip.atkspd = 9;
				break;
				
				case "epic":
				bootRuneEquip.atkspd = 12;
				break;
			}
		break;
		
		case "defenseRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.pdef = 6;
				bootRuneEquip.mdef = 6;
				break;
				
				case "rare":
				bootRuneEquip.pdef = 9;
				bootRuneEquip.mdef = 9;
				break;
				
				case "epic":
				bootRuneEquip.pdef = 12;
				bootRuneEquip.mdef = 12;
				break;
			}
		break;
		
		case "healthRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.hp = 50;
				break;
				
				case "rare":
				bootRuneEquip.hp = 75;
				break;
				
				case "epic":
				bootRuneEquip.hp = 100;
				break;
			}
		break;
		
		case "manaRune":
			switch(bootRuneRarity){
				case "uncommon":
				bootRuneEquip.matk = 6;
				break;
				
				case "rare":
				bootRuneEquip.matk = 9;
				break;
				
				case "epic":
				bootRuneEquip.matk = 12;
				break;
			}
		break;
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
