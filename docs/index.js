
function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener(
	'load',
	async function() {
		console.log("waitin for 3 secs..");
		$("cw_m").innerHTML = "Connecting.. Please wait."
		setTimeout(async () => { await basetrip(); }, 3000);
	},
	false
);


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    //window.location = "#"+tabName;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('tablinks')[0].click();
});


async function basetrip()
{
	dexstats();
	return;

	if(!(window.ethereum)){$("cw_m").innerHTML = "Wallet wasn't detected!";console.log("Wallet wasn't detected!");notice("<h3>Wallet wasn't detected!</h3>Please make sure that your device and browser have an active Web3 wallet like MetaMask installed and running.<br><br>Visit <a href='https://metamask.io' target='_blank'>metamask.io</a> to install MetaMask wallet.");provider = new ethers.providers.JsonRpcProvider(RPC_URL); await dexstats();return}
	else if(!Number(window.ethereum.chainId)==CHAINID){$("cw_m").innerHTML = "Wrong network! Please Switch to "+CHAINID;provider = new ethers.providers.Web3Provider(window.ethereum);await dexstats();notice("<h3>Wrong network!</h3>Please Switch to Chain #"+CHAINID+"<btr"+ CHAIN_NAME+ "</u> Blockchain.");}
	else if(//typeOf window.ethereum == Object &&Number(window.ethereum.chainId)
		Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Recognized Ethereum Chain:", window.ethereum.chainId,CHAINID);
		provider = new ethers.providers.Web3Provider(window.ethereum)
		signer = provider.getSigner();
		if(!(window.ethereum.selectedAddress==null)){console.log("Found old wallet:", window.ethereum.selectedAddress);cw();}
		else{console.log("Didnt find a connected wallet!");cw();}
		//chkAppr(tokes[1][0])
	}
	else //if(Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Couldn't find Ethereum Provider - ",CHAINID,window.ethereum.chainId)
		if((typeof Number(window.ethereum.chainId) == "number")){$("cw_m").innerHTML = "Wrong network! Switch from " + Number(window.ethereum.chainId)+" to "+CHAINID}
		provider = new ethers.providers.JsonRpcProvider(RPC_URL);
		signer = provider.getSigner()
		$("connect").innerHTML=`Wallet not found.<br><br><button onclick="window.location.reload()" id="btn-connect">Retry?</button>`;
	}
	if(Number(window.ethereum.chainId) != null &&(window.ethereum.chainId!=CHAINID))
	{
		await window.ethereum.request({
    		method: "wallet_addEthereumChain",
    		params: [{
        		chainId: "0x"+(CHAINID).toString(16),
        		rpcUrls: [RPC_URL],
        		chainName: CHAIN_NAME,
        		nativeCurrency: {
            		name: CHAIN_GAS,
            		symbol: CHAIN_GAS,
            		decimals: 18
        		},
        		blockExplorerUrls: [EXPLORE]
    		}]
		});
		window.location.reload()
	}
	//DrefreshFarm()
	//arf()
	cw()
	dexstats()
}



/*
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Qt."}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Qd."}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Tn."}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Bn."}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Mn."}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Th."}
	else if(_n>0){n_=(_n/1e0).toFixed(5)+""}
	return(n_);
}
*/
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(3)+"Qt"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(3)+"Qd"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(3)+"T"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(3)+"B"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(3)+"M"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(3)+"K"}
	else if(_n>1e0){n_=(_n/1e0).toFixed(5)+""}
	else if(_n>0.0){n_=(_n/1e0).toFixed(8)+""}
	return(n_);
}

async function cw()
{
	let cs = await cw2(); cs?console.log("Good to Transact"):cw2();
	cw2();
}
async function cw2()
{
	if(!(window.ethereum)){$("cw_m").innerHTML="Metamask not detected! Trying a refresh";console.log("Metamask not found!");window.location.reload();return(0)}
	if(!(Number(window.ethereum.chainId)==CHAINID)){$("cw_m").innerHTML="Wrong network detected! Please switch to chain ID", CHAINID, "and refresh this page.";return(0)}
	if(typeof provider == "undefined"){$("cw_m").innerHTML="Provider not detected! Trying a refresh";console.log("Provider not found!");window.location.reload();return(0)}
	/*
	if(!
		(isFinite(Number(accounts[0])))
		|| (isFinite(Number(window.ethereum.selectedAddress)))
	){console.log("NAAAAAAAAAAAAAAAAA");window.location.reload();}
	*/

	//004
	window.ethereum
	.request({ method: 'eth_requestAccounts' })
	.then(r=>{console.log("004: Success:",r);})	//re-curse to end curse, maybe..
	.catch((error) => {	console.error("004 - Failure", r, error); });


	//005
	const accounts = await window.ethereum.request({ method: 'eth_accounts' });
	if(Number(accounts[0])>0){console.log("005: Success - ", accounts)}
	else{console.log("005: Failure", accounts)}


	/*006
	const en6 = await window.ethereum.enable()
	if(Number(en6[0]) > 0){console.log("006 - Success",en6)}
	else{console.log("006 - Failure", en6)}
	*/


	/*003
	try {
      console.log("attempting cw()")
      const addresses = await provider.request({ method: "eth_requestAccounts" });
      console.log("addresses:",addresses)
    } catch (e) {
      console.log("error in request", e);
      window.location.reload(true);
    }
    */

    //002
    //try{await provider.send("eth_requestAccounts", []);console.log("CWE:",e);}//await window.ethereum.enable();
	//catch(e){console.log("CWE:",e);window.location.reload(true)}
	console.log("doing the paints")
	$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);
	if(window.ethereum.chainId==250) (new ethers.Contract("0x14ffd1fa75491595c6fd22de8218738525892101",["function getNames(address) public view returns(string[] memory)"],provider)).getNames(window.ethereum.selectedAddress).then(rn=>{if(rn.length>0){$("cw").innerHTML="hi, <span style='/*font-family:bold;font-size:1.337em*/'>"+rn[0]+"</span> 👋"}else{$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);}})
	$("cw_m").innerHTML=""
	$("connect").style.display="none";
	$("switch").style.display="block";
	//farm_1_f_chappro()
	gubs();
	return(1);
}


function fornum2(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Quintillion"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Quadrillion"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Trillion"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Billion"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Million"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Thousand"}
	else if(_n>1e0){n_=(_n/1e0).toFixed(4)+""}
	else if(_n>0){n_=(_n).toFixed(8)+""}
	return(n_);
}


function notice(c) {
	window.location = "#note"
	$("content1").innerHTML = c
	console.log(c)
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const timeFormat = (timestamp) => {const seconds = Math.floor((Date.now() - timestamp) / 1000);const prefix = seconds < 0 ? "For the next " : "Expired ";const absSeconds = Math.abs(seconds);return prefix + (absSeconds < 60 ? absSeconds + " seconds" : absSeconds < 3600 ? Math.floor(absSeconds / 60) + " minutes" : absSeconds < 86400 ? Math.floor(absSeconds / 3600) + " hours" : absSeconds < 2592000 ? Math.floor(absSeconds / 86400) + " days" : absSeconds < 31536000 ? Math.floor(absSeconds / 2592000) + " months" : Math.floor(absSeconds / 31536000) + " years") + (seconds < 0 ? "" : " ago");};


async function dexstats() {

	// Reduce ELITE component from all positions.

	TADATA = [
		// [ wen, marketPrice, classA, classB, classC ]
		[ "2022-11-05",	  678/300_000,       24_000,        19_000,         98_500 ],
		[ "2023-06-07",	 1010/300_000,      160_000,        85_000,        245_000 ],
		[ "2023-10-09",	  784/300_000,      102_500,        97_000,        235_000 ],		// count 800k ELR @ $0.015
		[ "2024-03-19",	 2080/300_000,      336_000,       215_000,      1_234_000 ],
		[ "2024-05-26",	 3692/300_000,      640_000,     1_075_000,        255_000 ],
		[ "2024-08-05",	 1174/300_000,	    970_000,       302_000,        101_000 ],
		[ "2024-11-07",	 2500/300_000,	  1_074_000,       529_000,        107_000 ],
		[ "2025-02-28",	  957/300_000,	    900_000,       100_000,         50_000 ],
		[ "2025-04-05",	     0.002647,	    769_000,       300_000,         33_000 ],
	]


for(i=0;i<TADATA.length;i++) {
	let ri = document.createElement("h3");
	ri.innerHTML =	`
		<h3><a target="_blank" href="https://ftm.guru/docs/treasury/${TADATA[i][0]}/">${TADATA[i][0]}</h3>
	`;
	$("reportslist").appendChild(ri)
}



	// ECharts option object

option = {
  backgroundColor: '#07f3',
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: TADATA.map(i=>i[0])
    }
  ],
  yAxis: [ // 2 y axes
  	{ splitLine: { show: false } },
  	{ splitLine: { show: false } }
  ],
  legend : {
    selected: {
      'ELITE Market Price' : true,
      'Fully Diluted Valuation' : true,
    }
  },
  series: [
    {
      name: 'ELITE Market Price',
      type: 'line',
      yAxisIndex: 1,
      emphasis: { focus: 'series' },
      data: TADATA.map(i=>i[1].toPrecision(6)),
      label: {
        show: false,
        position: 'bottom',
        textStyle: {
          fontSize: 20,
          color: '#fff'
        }
      },
      lineStyle : { width: 4 },
    },
    {
      name: 'Class A',
      type: 'bar',
      stack: 'Assets',
      emphasis: { focus: 'series' },
      data: TADATA.map(i=>i[2])
    },
    {
      name: 'Class B',
      type: 'bar',
      stack: 'Assets',
      emphasis: { focus: 'series' },
      data: TADATA.map(i=>i[3])
    },
    {
      name: 'Class C',
      type: 'bar',
      stack: 'Assets',
      emphasis: { focus: 'series' },
      data: TADATA.map(i=>i[4])
    },
    {
      name: 'Total A+B+C',
      type: 'scatter',
      emphasis: { focus: 'series' },
      data: TADATA.map(i=>i[2]+i[3]+i[4]),
      color: '#fff',
    },
    {
      name: 'Fully Diluted Valuation',
      type: 'scatter',
      stack: 'Market Capitalizations',
      emphasis: { focus: 'series' },
      data: TADATA.map(i=> Math.floor(i[1]*400_000_000)),
      //barWidth: 20,
    },
    {
      name: 'Treasury per ELITE',
      type: 'line',
      yAxisIndex: 1,
      emphasis: { focus: 'series' },
      data: TADATA.map(i=> ((i[2]+i[3]+i[4]) / (400_000_000)).toPrecision(6) ),
      label: {
        show: false,
        position: 'bottom',
        textStyle: {
          fontSize: 20,
          color: '#fff'
        }
      },
      lineStyle : { width: 4 },
    },
  ]
};


	echart1 = echarts.init(document.getElementById('chart1'),'dark');
	echartOption1 = option;
	echart1.setOption(echartOption1);

	let tot_1 = TADATA[TADATA.length-1][2] + TADATA[TADATA.length-1][3] + TADATA[TADATA.length-1][4];
	let tot_2 = TADATA[TADATA.length-2][2] + TADATA[TADATA.length-2][3] + TADATA[TADATA.length-2][4];
	$("topstat-date").innerHTML = (new Date(TADATA[TADATA.length-1][0])).toDateString()
	$("topstat-total").innerHTML = "$" + (tot_1).toLocaleString()
	$("topstat-change").innerHTML = ( ( tot_1 - tot_2 ) / tot_2 * 100 ).toFixed(2) + "%"

	return;

}

async function gubs() {
	return;
}

async function quote() {
	return;
}


