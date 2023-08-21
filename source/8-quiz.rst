
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "quiz" } 
   </script>


Quiz
::::::::::::::::::::::::

.. raw:: html


          <div class="fitb">
                <p>1. What is accessibility? <input type="text" id="Q1" data-component="colour-blindness"></p>
                <button type="button" onclick="sendfitb('Q1')">Check</button>
		<script id="Q1-answers" type="application/json">
		[

        { "regex": "x", "feedback": " ", "result": "correct"  }         ]
	</script>
	<p id="Q1-feedback"> <p>

	</div>

.. raw:: html


          <div class="mcq">
                <p>Making web content accessible helps:</p>
		<form name=Q2 id="Q2" data-component="quiz">
		<input type="checkbox" id="Q2A1" value=""><label for="Q2A1">People living in remote areas</label> <span id="Q2A1-feedback"> </span><br> 		<input type="checkbox" id="Q2A2" value=""><label for="Q2A2">People with disabilities</label> <span id="Q2A2-feedback"> </span><br> 		<input type="checkbox" id="Q2A3" value=""><label for="Q2A3">People with poor internet connection</label> <span id="Q2A3-feedback"> </span><br> 		<input type="checkbox" id="Q2A4" value="correct"><label for="Q2A4">Everyone</label> <span id="Q2A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q2')"><br>
		</form>
		<script id="Q2-answers" type="application/json"> 
		[ 	{ "ansid":"Q2A1", "answer": "People living in remote areas", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q2A2", "answer": "People with disabilities", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q2A3", "answer": "People with poor internet connection", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q2A4", "answer": "Everyone", "feedback": "That's right!", "result": "correct"  } 
	]
	</script>

	</div>

.. raw:: html


          <div class="mcq">
                <p>When should accessibility be introduced into the web development process?</p>
		<form name=Q3 id="Q3" data-component="quiz">
		<input type="checkbox" id="Q3A1" value="correct"><label for="Q3A1">Design phase</label> <span id="Q3A1-feedback"> </span><br> 		<input type="checkbox" id="Q3A2" value=""><label for="Q3A2">Development phase</label> <span id="Q3A2-feedback"> </span><br> 		<input type="checkbox" id="Q3A3" value=""><label for="Q3A3">Testing phase</label> <span id="Q3A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q3')"><br>
		</form>
		<script id="Q3-answers" type="application/json"> 
		[ 	{ "ansid":"Q3A1", "answer": "Design phase", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q3A2", "answer": "Development phase", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q3A3", "answer": "Testing phase", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>

TODO fix

.. raw:: html
     Statement 2 - they help evaluate whether a website is accessible or not
     Statement 3 - they help designers account for the needs of users with different disabilities
     Statement 4 - following them is a legal requirement for almost all websites

     :Statement 1:Incorrect.
     :Statement 2:Incorrect.
     :Statement 3:Incorrect.
     correct:Statement 4:That's right!

.. raw:: html


          <div class="mcq">
                <p>Sufficient touch target sizes particularly help users who:</p>
		<form name=Q5 id="Q5" data-component="quiz">
		<input type="checkbox" id="Q5A1" value=""><label for="Q5A1">Have low vision</label> <span id="Q5A1-feedback"> </span><br> 		<input type="checkbox" id="Q5A2" value=""><label for="Q5A2">Are blind</label> <span id="Q5A2-feedback"> </span><br> 		<input type="checkbox" id="Q5A3" value="correct"><label for="Q5A3">Have limited dexterity or are using a small handheld device</label> <span id="Q5A3-feedback"> </span><br> 		<input type="checkbox" id="Q5A4" value=""><label for="Q5A4">Are colour blind</label> <span id="Q5A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q5')"><br>
		</form>
		<script id="Q5-answers" type="application/json"> 
		[ 	{ "ansid":"Q5A1", "answer": "Have low vision", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q5A2", "answer": "Are blind", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q5A3", "answer": "Have limited dexterity or are using a small handheld device", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q5A4", "answer": "Are colour blind", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>

.. raw:: html


          <div class="mcq">
                <p>Using alt text particularly helps users who:</p>
		<form name=Q6 id="Q6" data-component="quiz">
		<input type="checkbox" id="Q6A1" value=""><label for="Q6A1">Have low vision</label> <span id="Q6A1-feedback"> </span><br> 		<input type="checkbox" id="Q6A2" value="correct"><label for="Q6A2">Are blind</label> <span id="Q6A2-feedback"> </span><br> 		<input type="checkbox" id="Q6A3" value=""><label for="Q6A3">Have limited dexterity or are using a small handheld device</label> <span id="Q6A3-feedback"> </span><br> 		<input type="checkbox" id="Q6A4" value=""><label for="Q6A4">Are colour blind</label> <span id="Q6A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q6')"><br>
		</form>
		<script id="Q6-answers" type="application/json"> 
		[ 	{ "ansid":"Q6A1", "answer": "Have low vision", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q6A2", "answer": "Are blind", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q6A3", "answer": "Have limited dexterity or are using a small handheld device", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q6A4", "answer": "Are colour blind", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>

.. raw:: html


          <div class="mcq">
                <p>Being mindful of colour hues in a design particularly helps users who:</p>
		<form name=Q7 id="Q7" data-component="quiz">
		<input type="checkbox" id="Q7A1" value=""><label for="Q7A1">Have low vision</label> <span id="Q7A1-feedback"> </span><br> 		<input type="checkbox" id="Q7A2" value=""><label for="Q7A2">Are blind</label> <span id="Q7A2-feedback"> </span><br> 		<input type="checkbox" id="Q7A3" value=""><label for="Q7A3">Have limited dexterity or are using a small handheld device</label> <span id="Q7A3-feedback"> </span><br> 		<input type="checkbox" id="Q7A4" value="correct"><label for="Q7A4">Are colour blind</label> <span id="Q7A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q7')"><br>
		</form>
		<script id="Q7-answers" type="application/json"> 
		[ 	{ "ansid":"Q7A1", "answer": "Have low vision", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q7A2", "answer": "Are blind", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q7A3", "answer": "Have limited dexterity or are using a small handheld device", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q7A4", "answer": "Are colour blind", "feedback": "That's right!", "result": "correct"  } 
	]
	</script>

	</div>

.. raw:: html


          <div class="mcq">
                <p>Being mindful of colour contrast particularly helps users who:</p>
		<form name=Q8 id="Q8" data-component="quiz">
		<input type="checkbox" id="Q8A1" value="correct"><label for="Q8A1">Have low vision</label> <span id="Q8A1-feedback"> </span><br> 		<input type="checkbox" id="Q8A2" value=""><label for="Q8A2">Are blind</label> <span id="Q8A2-feedback"> </span><br> 		<input type="checkbox" id="Q8A3" value=""><label for="Q8A3">Have limited dexterity or are using a small handheld device</label> <span id="Q8A3-feedback"> </span><br> 		<input type="checkbox" id="Q8A4" value=""><label for="Q8A4">Are colour blind</label> <span id="Q8A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q8')"><br>
		</form>
		<script id="Q8-answers" type="application/json"> 
		[ 	{ "ansid":"Q8A1", "answer": "Have low vision", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q8A2", "answer": "Are blind", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q8A3", "answer": "Have limited dexterity or are using a small handheld device", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q8A4", "answer": "Are colour blind", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>

