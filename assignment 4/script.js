var names=new Array();
names[0]="Yaakov";
names[1]="sam";
names[2]="ton";
names[3]="Juveyy";
names[4]="shawn";
names[5]="paul";
names[6]="davis";
names[7]="alvin";
names[8]="Jason";
names[9]="jack";


for (var i = 0 ; i < names.length; i++) {
	if(names[i].charAt(0)=='J'|| names[i].charAt(0)=='j'){
		console.log("Goodbye" + names[i]);

	}
	else{
		console.log("Hello" + names[i]);
	}
	
}
