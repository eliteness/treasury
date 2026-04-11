function $(_) {return document.getElementById(_);}

let provider= {};
let signer= {};

function toLocaleStringFD(min,max, n) {
	return Number(n).toLocaleString(undefined,{ minimumFractionDigits:min, maximumFractionDigits:max})
}
function toLocaleStringPD(p, n) {
	return toLocaleStringFD(
		Math.max(0, p - Math.floor(Math.log10(n))),
		Math.max(0, p - Math.floor(Math.log10(n))),
		n
	)
}

window.addEventListener(
	'load',
	async function() {
		console.log("waitin for 3 secs..");
		$("cw_m").innerHTML = "Connecting.. Please wait."
		setTimeout(async () => { await basetrip(); }, 100);
	},
	false
);

async function basetrip() {
	dexstats();
	return;
}



async function dexstats() {

	ALL_TREASURY_PROJECTS = [
		ELITE,
		SCALE,
		ELITERINGSSCUSD,
		ELITERINGSSCETH,
		TRENCHES,
		THESTRAT,
	]




	for(i=ALL_TREASURY_PROJECTS.length-1; i >= 0; i--) {
		let tri = document.createElement("tr");
		let lastTadata = ALL_TREASURY_PROJECTS[i].TADATA[ ALL_TREASURY_PROJECTS[i].TADATA.length-1 ]
		tri.innerHTML =	`
			<td>${ ALL_TREASURY_PROJECTS[i].TREASURY_TOKEN_LONGNAME }</td>
			<td>${ ALL_TREASURY_PROJECTS[i].TREASURY_TOKEN_TICKER }</td>
			<td>$${ toLocaleStringPD(3, lastTadata[2]+lastTadata[3]+lastTadata[4]) }</td>
			<td>$${ toLocaleStringPD(3, lastTadata[1] * lastTadata[5]) }</td>
			<td>${ toLocaleStringFD(2, 2, (lastTadata[2]+lastTadata[3]+lastTadata[4])/(lastTadata[1]*lastTadata[5])*100 ) }%</td>
			<td>${ lastTadata[0] }</td>
		`;
		tri.setAttribute("onclick","window.location=./"+ ALL_TREASURY_PROJECTS[i].TREASURY_TOKEN_TICKER.toLowerCase() )
		$("reports-tabulated-tbody").appendChild(tri)
	}
}