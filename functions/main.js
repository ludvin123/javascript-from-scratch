 function processStudent (student) {
 	function calcFinalNote() {
 		console.log("Nota final: ", ( student.ep1 + student.ep2) / 2 );
 	}
 	return calcFinalNote();
 }
processStudent ({ name: "Eli", lastname: "manrique", ep1: 15, ep2: 16 })

function sumatoria (n) { 
	if (n == 1) {
		return 1; 
	}

	return sumatoria(n - 1) + n; 
}

 console.log(sumatoria(5));

 function sumatoria (n) {

 }
 


 function approveStudent (student) {
 	var minimumNote = 13;

 	if (student.note > minimunNote) {
 		console.log("Felicidades,estás aprobado");
 	}
 }

 approveStudent ( { name:"Eli", lastname: "Manrique", note: 12} );

 try {
 	console.log(minimunNote);
 } catch (e) {
 	console.log("Hubo un error", e);
 }

