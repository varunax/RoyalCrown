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
	var helmetEquip = new Equip(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);
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
	var armorEquip = new Equip(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);
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
	var gloveEquip = new Equip(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);
	
	switch(gloveName){
		case "bloodyGloves":
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
	
	champion.patk = (patkBase + patkGrowth*level-patkGrowth + weaponEquip.patk + helmetEquip.patk);
	champion.matk = (matkBase + weaponEquip.matk) * (1 + helmetMatkPercent/100);
	champion.pdef = pdefBase + pdefGrowth*level-pdefGrowth + weaponEquip.pdef + helmetEquip.pdef;
	champion.mdef = mdefBase + mdefGrowth*level-mdefGrowth + weaponEquip.mdef + helmetEquip.mdef;
	
	champion.hp = hpBase + hpGrowth*level-hpGrowth + helmetEquip.hp;
	champion.mp = mpBase + mpGrowth*level-mpGrowth + helmetEquip.mp;
	champion.atkspd = atkspdBase + atkspdGrowth*level-atkspdGrowth + weaponEquip.atkspd + helmetEquip.atkspd;
	champion.critrate = weaponEquip.critrate + helmetEquip.critrate;
	
	champion.movspd = weaponEquip.movspd;
	champion.ppenPercent = weaponEquip.ppenPercent;
	champion.cdred = weaponEquip.cdred;
	
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
