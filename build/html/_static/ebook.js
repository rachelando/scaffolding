
var eBookdata = {}
eBookdata.EBlogin = "bob";
eBookdata.EBtopic = "eBook";
eBookdata.mqttuser = "bob";
eBookdata.mqttpwd = "mqtt-red-node";

for (x in eBookdata)
{
	localStorage.setItem(x, eBookdata[x]);
}

console.log("eBook Starting....");

/*
// Create a client instance
//client = new Paho.MQTT.Client("192.168.87.29", 1884, "/", "");
client = new Paho.MQTT.Client("127.0.0.1", 1884, "/", "");
console.log("connected to localhost");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect, useSSL: false, userName:"bob", password:"mqtt-red-node"});

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect: "+document.baseURI);
  client.subscribe("eBook");
  client.subscribe("OLM");
  client.subscribe("UPDATE");
  var pageobj = JSON.parse(document.getElementById("pagemeta").innerHTML);
  var evidence = {
		qid: "connect", 
		qtype: "page",
		value: document.baseURI
		};
  var msg = {
		login: localStorage.getItem("EBlogin"),
		ebook: pageobj.ebook,
		cmd: "tell",
		component: pageobj.component,
		evidence: JSON.stringify(evidence)
            };
  var msgJSON = JSON.stringify(msg);
  message = new Paho.MQTT.Message(msgJSON);
  message.destinationName = "eBook";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) 
{
  if (responseObject.errorCode !== 0) 
  {
    console.log("onConnectionLost:"+responseObject.errorMessage);
    console.log("reconnecting...");
    client.connect({onSuccess:onConnect, useSSL: false, userName:"bob", password:"mqtt-red-node"});
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.topic+"::"+message.payloadString);
  if (message.topic == "OLM")
  {
    olmobj = JSON.parse(message.payloadString);
    console.log("componentid: "+olmobj.componentid);
    console.log("now: "+olmobj.now);
    console.log("previous: "+olmobj.previous);
    try {
        document.getElementById(olmobj.componentid).style = "background-color:"+olmobj.now+";"
        document.getElementById(olmobj.componentid+"-prev").style = "background-color:"+olmobj.prev+";"
    }
    catch(err) {
        console.log("Error name: "+err.name+", Msg: "+err.message);
    } 
  }
  else if (message.topic == "UPDATE")
  {
    olmobj = JSON.parse(message.payloadString);
    console.log("component: "+olmobj.component);
    console.log("display: "+olmobj.display);
    try {
        document.getElementById(olmobj.component).style = "display: "+olmobj.display+";";
    }
    catch(err) {
        console.log("Error name: "+err.name+", Msg: "+err.message);
    } 
  }

}
*/

// RACHEL Send data to server
async function sendData(jsonData, path) {
  try {
    const response = await fetch('http://localhost:3000' + path, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonData)
    });
    const fetchResult = await response.json();
    console.log(fetchResult);
    // Update nav if OLM update
    if (path == '/olm') {
      updateNav(fetchResult);
    }
    return fetchResult;
  } catch (err) {
    console.error(err);
  }
}

// RACHEL Get OLM data and update nav menu
window.onload = async function () {
  try {
    const response = await fetch('http://localhost:3000/olm');
    const olmData = await response.json();
    updateNav(olmData);
  } catch (err) {
    console.error(err);
  }
}

// RACHEL Update nav items given in json format
function updateNav(data) {
  // Sample test data
  const testData = {
    "target-size": {
      "full-name": "Touch target size",
      "self-rating": "3️⃣",
      "mcq": "🟧"
    },
    "alt-text": {
      "full-name": "Alternative (alt) text",
      "mcq": "✅",
    }
  };
  // data = testData;
  console.log(data);

  navTags = document.getElementsByClassName("toctree-l1");
  for (let navTag of navTags) {
    var currentNavTitle = navTag.firstChild.textContent;
    for (let heading in data) {
      // Find which heading
      var fullHeadingName = data[heading]["full-name"];
      // console.log(heading);
      // console.log(fullHeadingName);
      if (currentNavTitle.includes(fullHeadingName)) {
        var newNavTitle = "";
        // Self-rating
        if ("self-rating" in data[heading]) {
          if (currentNavTitle[0] != fullHeadingName[0]) { // rating already set
            newNavTitle = data[heading]["self-rating"] + currentNavTitle.slice(1); // leave 1 whitespace
          } else { // rating not set yet
            newNavTitle = data[heading]["self-rating"] + " " + currentNavTitle;
          }
          currentNavTitle = newNavTitle; // update current title
        }
        // MCQ
        if ("mcq" in data[heading]) {
          if (currentNavTitle.slice(-1) != fullHeadingName.slice(-1)) { // if rating already set
            newNavTitle = currentNavTitle.slice(0, currentNavTitle.length - 1) + data[heading]["mcq"]; // leave 1 whitespace
          } else {
            newNavTitle = currentNavTitle + " " + data[heading]["mcq"];
          }
        }
        // Update nav title
        console.log(newNavTitle);
        navTag.firstChild.textContent = newNavTitle;
      }
    }
  }
}

function checkans(qid)
{
        var ansid = qid+"-answers";
        var ansval = document.getElementById(qid).value;
        var fbackid = qid+"-feedback";
        var ansobj = JSON.parse(document.getElementById(ansid).innerHTML);

        for (ans in ansobj)
        {
                rx = ansobj[ans].regex;
                if (rx == "x") // x means nothing matches
                {
                        document.getElementById(fbackid).innerHTML = ansobj[ans].feedback;
                        return ansobj[ans].result;
                }

                if (ansval.indexOf(rx) == 0)
                {
                        document.getElementById(fbackid).innerHTML = ansobj[ans].feedback;
                        return ansobj[ans].result;
                }
        }
        document.getElementById(fbackid).innerHTML = "Not correct";
	return ansobj[ans].result;
}


function sendfitb(ansid)
{
  /*
  var evidence = {
		qid: ansid, 
		qtype: "fitb",
		extra: document.getElementById(ansid).value,
		value: checkans(ansid)
		};
		
  var msg = {
		login: localStorage.getItem("EBlogin"),
		ebook: "B2A",
		cmd: "tell",
		component: document.getElementById(ansid).getAttribute("data-component"), 
		evidence: JSON.stringify(evidence)
            };
  var msgJSON = JSON.stringify(msg);
  message = new Paho.MQTT.Message(msgJSON);
  message.destinationName = eBookdata.EBtopic;
  client.send(message);
  console.log("sendfitb: "+msgJSON);
  */
}

function sendlik(cid, componentid)
{
  var value = "error";
  var answers = ["1","2","3","4","5"];

  for (let ans in answers)
  {
	ansid = cid+"A"+answers[ans];
	//console.log("sendlik "+ansid);
	if (document.getElementById(ansid).checked)
	{
		//console.log("sendlik answer "+ansid)
		value = ans; // 0 to 4

    // RACHEL update OLM
    sendData({
      "component": componentid,
      "type": "self-rating",
      "value": parseInt(answers[ans])
    }, '/olm');

    // RACHEL Create log json data
    const logJsonData = {
      DateTime: Date(),
      Activity: "Self-rating",
      Section: componentid,
      QuestionID: cid,
      GivenAnswer: answers[ans],
      Result: ''
    };
    sendData(logJsonData, '/log');

		break;
	}
  }

  /*
  var evidence = {
		qid: cid, 
		componentid: componentid,
		qtype: "likert",
		value: value
		};
  var msg = {
                login: localStorage.getItem("EBlogin"),
                ebook: "B2A",
		cmd: "tell",
		qtype: "likert",
                component: document.getElementById(cid).getAttribute("data-component"),
                evidence: JSON.stringify(evidence)
            };
  var msgJSON = JSON.stringify(msg);
  message = new Paho.MQTT.Message(msgJSON);
  message.destinationName = eBookdata.EBtopic;
  client.send(message);
  console.log("sendlik: "+msgJSON);
  */
}

function sendlikseven(cid, componentid)
{
  var value = "error";
  var answers = ["1","2","3","4","5","6","7"];

  for (let ans in answers)
  {
	ansid = cid+"A"+answers[ans];
	//console.log("sendlik "+ansid);
	if (document.getElementById(ansid).checked)
	{
		//console.log("sendlik answer "+ansid)
		value = ans; // 0 to 6

    // RACHEL Create log json data
    const logJsonData = {
      DateTime: Date(),
      Activity: "Adee-SEQ",
      Section: componentid,
      QuestionID: cid,
      GivenAnswer: answers[ans],
      Result: ''
    };
    sendData(logJsonData, '/log');

		break;
	}
  }

  /*
  var evidence = {
		qid: cid, 
		componentid: componentid,
		qtype: "likert",
		value: value
		};
  var msg = {
                login: localStorage.getItem("EBlogin"),
                ebook: "B2A",
		cmd: "tell",
		qtype: "likert",
                component: document.getElementById(cid).getAttribute("data-component"),
                evidence: JSON.stringify(evidence)
            };
  var msgJSON = JSON.stringify(msg);
  message = new Paho.MQTT.Message(msgJSON);
  message.destinationName = eBookdata.EBtopic;
  client.send(message);
  console.log("sendlik: "+msgJSON);
  */
}


function sendmcq(qid)
{
        var ansid = qid+"-answers";
        var ansval = document.getElementById(qid).value;
        var ansobjTag = document.getElementById(ansid);
        var ansobj = JSON.parse(ansobjTag.textContent);

        for (ans in ansobj)
        {
		ansid = ansobj[ans].ansid;
		fbackid = ansid+"-feedback";
		checked = document.getElementById(ansid).checked;
		//alert(ansid+" : "+checked);
                if (checked) 
                {
    
    // RACHEL Set variables
    var result = ansobj[ans].result; // 'correct' if correct, blank if incorrect
    var givenAns = ansobj[ans].answer // '<given answer>'
    if (result == '') {
      result = 'incorrect'
    }
    const componentid = document.getElementById(qid).dataset.component;

    // RACHEL update OLM
    sendData({
      "component": componentid,
      "type": "mcq",
      "value": result,
      "question": qid
    }, '/olm');

    // RACHEL send log data to server
    const logJsonData = {
      DateTime: Date(),
      Activity: "MCQ",
      Section: componentid,
      QuestionID: qid,
      GivenAnswer: givenAns,
      Result: result
    }
    sendData(logJsonData, '/log');

    document.getElementById(fbackid).innerHTML = " : "+ansobj[ans].feedback;
    // sendmcqmsg(qid, ansid, ansobj[ans].feedback);
    break;
                }
		else
                {
                        document.getElementById(fbackid).innerHTML = " ";
                }
        }
}

function sendmcqmsg(qid, ansid, feedback)
{
  /*
  var evidence = {
		qid: qid, 
		qtype: "mcq",
		ansid: ansid,
		extra: feedback,
		value: document.getElementById(ansid).value
		};
		
  var msg = {
		login: localStorage.getItem("EBlogin"),
		ebook: "B2A",
		cmd: "tell",
		component: document.getElementById(qid).getAttribute("data-component"), 
		evidence: JSON.stringify(evidence)
            };
  var msgJSON = JSON.stringify(msg);
  message = new Paho.MQTT.Message(msgJSON);
  message.destinationName = eBookdata.EBtopic;
  client.send(message);
  console.log("sendmcq: "+msgJSON);
  */
}

function dolog(component, evidence)
{
  /*
  console.log("dolog: "+document.baseURI);
  var msg = {
		login: localStorage.getItem("EBlogin"),
		qtype: "login",
		component: component,
		evidence: evidence
            };
  var msgJSON = JSON.stringify(msg);
  console.log("dolog:"+msgJSON);
  message = new Paho.MQTT.Message(msgJSON);
  message.destinationName = eBookdata.EBtopic;
  client.send(message);
  */
}

function checkid()
{
  // console.log("clientid: "+client.clientId);
}

