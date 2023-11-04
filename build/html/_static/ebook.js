
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
  // Sample test data MUST HAVE ALL FIELDS if appropriate
  const testData = {
    "target-size": {
      "full-name": "Touch target size",
      "self-rating": "3️⃣",
      "mcq": "🟧"
    },
    "alt-text": {
      "full-name": "Alternative (alt) text",
      "self-rating": "3️⃣",
      "mcq": "✅"
    }
  };

  navTags = document.getElementsByClassName("toctree-l1");
  for (let navTag of navTags) {
    var currentNavTitle = navTag.firstChild.textContent;
    for (let heading in data) {
      // Find which heading
      var fullHeadingName = data[heading]["full-name"];
      if (currentNavTitle.includes(fullHeadingName)) {
        var newNavTitle = data[heading]["full-name"];
        if ("self-rating" in data[heading]) {
          newNavTitle += (" " + data[heading]["self-rating"]);
        }
        if ("mcq" in data[heading]) {
          newNavTitle += " " + data[heading]["mcq"];
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
}

function sendlik(cid, componentid)
{
  var value = "error";
  var answers = ["1","2","3","4","5"];

  // RACHEL add feedback
    document.getElementById(cid + "-feedback").innerText = "Submitted!";

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
}

function sendlikseven(cid, componentid)
{
  var value = "error";
  var answers = ["1","2","3","4","5","6","7"];

  // RACHEL add feedback
  document.getElementById(cid + "-feedback").innerText = "Submitted!";

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
}

function dolog(component, evidence)
{

}

function checkid()
{
}

