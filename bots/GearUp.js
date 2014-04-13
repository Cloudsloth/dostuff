function GearUp() {
	
	var 
		head,
		body,
		weap,
		shield,
		belt,
		gloves,
		boots,
		amu,
		ring1,
		ring2,
		weap2,
		shield2,
		mercweap,
		mercarmor,
		merchead,
		itamz = 0,
		
		gothead = false,
		gotbody = false,
		gotweap = false,
		gotshield = false,
		gotbelt = false,
		gotgloves = false,
		gotboots = false,
		gotamu = false,
		gotring1 = false,
		gotring2 = false,
		gotweap2 = false,
		gotshield2 = false,
		gotmercweap = false,
		gotmercarmor = false,
		gotmerchead = false;
		
		clickItem(4, 1);
		delay(100);
		clickMap(0,0,me.x,me.y);
		delay(100);
		clickItem(4, 3);
		delay(100);
		clickMap(0,0,me.x,me.y);
		delay(100);
		
		
		while(itamz < 2) {
		
			// shako
			if (!gothead) {
				if (getUnit(4,422)) {
					Pickit.pickItem(getUnit(4,422));
					if  (getUnit(4,422)) {
						getUnit(4,422).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 1);
							gothead = true;
							say("Got Head!");
							itamz++;
							break;
							}
						}
					}
				}
				
			// breast plate
			if (!gotbody) {
				if (getUnit(4,320)) {
					Pickit.pickItem(getUnit(4,320));
					if  (getUnit(4,320)) {
						getUnit(4,320).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 3);
							gotbody = true;
							say("Got body!");
							itamz++;
							break;
							}
						}
					}
				}	
				
			// flail
			if (!gotweap) {
				if (getUnit(4,21)) {
					Pickit.pickItem(getUnit(4,21));
					if  (getUnit(4,21)) {
						getUnit(4,21).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 4);
							gotweap = true;
							say("Got weap!");
							itamz++;
							break;
							}
						}
					}
				}
			
			// sacred targe
			if (!gotshield) {
				if (getUnit(4,498)) {
					Pickit.pickItem(getUnit(4,498));
					if  (getUnit(4,498)) {
						getUnit(4,498).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 5);
							gotshield = true;
							say("Got shield!");
							itamz++;
							break;
							}
						}
					}
				}	
				
			// mithril coil
			if (!gotbelt) {
				if (getUnit(4,462)) {
					Pickit.pickItem(getUnit(4,462));
					if  (getUnit(4,462)) {
						getUnit(4,462).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 8);
							gotbelt = true;
							say("Got belt!");
							itamz++;
							break;
							}
						}
					}
				}
			
			// chain gloves (chance)
			if (!gotgloves) {
				if (getUnit(4,336)) {
					Pickit.pickItem(getUnit(4,336));
					if  (getUnit(4,336)) {
						getUnit(4,336).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 10);
							gotgloves = true;
							say("Got gloves!");
							itamz++;
							break;
							}
						}
					}
				}	
				
			// sharkskin boots (ww)
			if (!gotboots) {
				if (getUnit(4,386)) {
					Pickit.pickItem(getUnit(4,386));
					if  (getUnit(4,386)) {
						getUnit(4,386).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 9);
							gotboots = true;
							say("Got boots!");
							itamz++;
							break;
							}
						}
					}
				}
				
			if (!gotamu) {
				if (getUnit(4,12)) {
					Pickit.pickItem(getUnit(4,12));
					if  (getUnit(4,12)) {
						getUnit(4,12).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 2);
							gotamu = true;
							say("Got amulet!");
							itamz++;
							break;
							}
						}
					}
				}	
				
			if (!gotring1) {
				if (getUnit(4,10)) {
					Pickit.pickItem(getUnit(4,10));
					if  (getUnit(4,10)) {
						getUnit(4,10).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 7);
							gotring1 = true;
							say("Got ring one!");
							itamz++;
							break;
							}
						}
					}
				}	
			if (gotamu && !gotring2) {
				if (getUnit(4,10)) {
					Pickit.pickItem(getUnit(4,10));
					if  (getUnit(4,10)) {
						getUnit(4,10).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 7);
							gotring2 = true;
							say("Got ring2!");
							itamz++;
							break;
							}
						}
					}
				}	
				
			// double axe (cta)
			if (!gotweap2) {
				if (getUnit(4,2)) {
					Pickit.pickItem(getUnit(4,2));
					if  (getUnit(4,2)) {
						getUnit(4,2).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 11);
							gotweap2 = true;
							say("Got cta!");
							itamz++;
							break;
							}
						}
					}
				}	
			
			// targe (spirit)
			if (!gotshield2) {
				if (getUnit(4,408)) {
					Pickit.pickItem(getUnit(4,408));
					if  (getUnit(4,408)) {
						getUnit(4,408).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 12);
							gotshield2 = true;
							say("Got bo spirit!");
							itamz++;
							break;
							}
						}
					}
				}
			
			// rondache (spirit)
			if (!gotshield2) {
				if (getUnit(4,409)) {
					Pickit.pickItem(getUnit(4,409));
					if  (getUnit(4,409)) {
						getUnit(4,409).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 12);
							gotshield2 = true;
							say("Got bo spirit!");
							itamz++;
							break;
							}
						}
					}
				}
			
			// crown (spirit)
			if (!gotshield2) {
				if (getUnit(4,412)) {
					Pickit.pickItem(getUnit(4,412));
					if  (getUnit(4,412)) {
						getUnit(4,412).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(0, 12);
							gotshield2 = true;
							say("Got bo spirit!");
							itamz++;
							break;
							}
						}
					}
				}
			
			// colossus voulge (insight)
			if (!gotmercweap) {
				if (getUnit(4,254)) {
					Pickit.pickItem(getUnit(4,254));
					if  (getUnit(4,254)) {
						getUnit(4,254).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(4, 4);
							gotmercweap = true;
							say("Got merc weapon!");
							itamz++;
							break;
							}
						}
					}
				}
			
			// cryptic axe (insight)
			if (!gotmercweap) {
				if (getUnit(4,255)) {
					Pickit.pickItem(getUnit(4,255));
					if  (getUnit(4,255)) {
						getUnit(4,255).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(4, 4);
							gotmercweap = true;
							say("Got merc weapon!");
							itamz++;
							break;
							}
						}
					}
				}

			// thresher (insight)
			if (!gotmercweap) {
				if (getUnit(4,256)) {
					Pickit.pickItem(getUnit(4,256));
					if  (getUnit(4,256)) {
						getUnit(4,256).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(4, 4);
							gotmercweap = true;
							say("Got merc weapon!");
							itamz++;
							break;
							}
						}
					}
				}
				
			// grim helm (vgaze)
			if (!gotmerchead) {
				if (getUnit(4,395)) {
					Pickit.pickItem(getUnit(4,395));
					if  (getUnit(4,395)) {
						getUnit(4,395).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(4, 1);
							gotmerchead = true;
							say("Got merc hat!");
							itamz++;
							break;
							}
						}
					}
				}
				
			// demonhead (andy)
			if (!gotmerchead) {
				if (getUnit(4,417)) {
					Pickit.pickItem(getUnit(4,417));
					if  (getUnit(4,417)) {
						getUnit(4,417).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(4, 1);
							gotmerchead = true;
							say("Got merc hat!");
							itamz++;
							break;
							}
						}
					}
				}
				
				
			// archon plate (fortitude)
			if (!gotmercarmor) {
				if (getUnit(4,443)) {
					Pickit.pickItem(getUnit(4,443));
					if  (getUnit(4,443)) {
						getUnit(4,443).toCursor();
						delay(500);
						while(me.itemoncursor){
							clickItem(4, 3);
							gotmercarmor = true;
							say("Got merc armor!");
							itamz++;
							break;
							}
						}
					}
				}
				
				
			
		
		
			
			delay (5000);
		}
			
			
			
	



	
	say("Itamz Acquired!");
	delay (200000);
	return true;
}

/*
clickItem(4, 1);
delay(100);
clickMap(0,0,me.x,me.y);
delay(100);
clickItem(4, 3);
delay(100);
clickMap(0,0,me.x,me.y);
delay(100);



The equipped location of the item.

0 - Not equipped

1 - Helmet

2 - Amulet

3 - Armor

4 - Right hand slot 1

5 - Left hand slot 1

6 - Right ring

7 - Left ring

8 - Belt

9 - Boots

10 - Gloves

11 - Right hand slot 2

12 - Left hand slot 2

*/