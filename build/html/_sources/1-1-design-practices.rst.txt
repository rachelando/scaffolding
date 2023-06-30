
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "design-practices" } 
   </script>


Design practices
::::::::::::::::::::::::

.. raw:: html


          <div class="fitb">
                <p>The number 101 in binary is <input type="text" id="Q1" data-component="design-practices"> in decimal.</p>
                <button type="button" onclick="sendfitb('Q1')">Check</button>
		<script id="Q1-answers" type="application/json">
		[

        { "regex": "5", "feedback": " Correct!", "result": "correct"  } ,
        { "regex": "x", "feedback": " Oops... wrong.  Convert using powers of 2 for each position. Start with the rightmost digit times 1 (which is :math:`2^0`), next digit times :math:`2^1`, next times :math:`2^2` etc.", "result": "incorrect"  }         ]
	</script>
	<p id="Q1-feedback"> <p>

	</div>

.. raw:: html


          <div class="mcq">
                <p>The decimal number 15 in binary is:</p>
		<form name=Q2 id="Q2" data-component="design-practices">
		<input type="checkbox" id="Q2A1" value=""><label for="Q2A1">1101</label> <span id="Q2A1-feedback"> </span><br> 		<input type="checkbox" id="Q2A2" value="correct"><label for="Q2A2">1111</label> <span id="Q2A2-feedback"> </span><br> 		<input type="checkbox" id="Q2A3" value=""><label for="Q2A3">11111</label> <span id="Q2A3-feedback"> </span><br> 		<input type="checkbox" id="Q2A4" value=""><label for="Q2A4">11110</label> <span id="Q2A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q2')"><br>
		</form>
		<script id="Q2-answers" type="application/json"> 
		[ 	{ "ansid":"Q2A1", "answer": "1101", "feedback": "Wrong.", "result": ""  } ,	{ "ansid":"Q2A2", "answer": "1111", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q2A3", "answer": "11111", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q2A4", "answer": "11110", "feedback": "Wrong.", "result": ""  } 
	]
	</script>

	</div>

An estimated **1.3 billion people** globally experience a significant disability (WHO).
But 96.3% of the top 1,000,000 home pages have accessibility failures.

One cause: *accessibility is not integrated early enough in the web development process*.

Adee is one solution to this problem.

.. image:: Images/Adee-logo.png
   :width: 5cm
   :align: center

This is an example of scaffolding, in this case used to teach incorporating accessibility into the web design process.

.. note:: Scaffolds are tools, strategies, and guides used by human and computer tutors, teachers, and animated pedagogical agents during learning to enable them to develop understandings beyond their immediate grasp

          (Azevedo, Hadwin, 2005)

.. raw:: html

   <div class="likert"><br>
   How confident are you that you understand binary?
   <form id = "C3" data-component="binary">
      Not confident
   <input type="radio" name="C3" id="C3A1">
   <input type="radio" name="C3" id="C3A2">
   <input type="radio" name="C3" id="C3A3">
   <input type="radio" name="C3" id="C3A4">
   <input type="radio" name="C3" id="C3A5">
   Very confident
   <input type="button" value="Submit" onclick="sendlik('C3','binary')"><br>
   </form>
   </div>


.. raw:: html

      <div>   <iframe align="left" width="500" height="281" src="https://www.youtube.com/embed/5mbpnES7Q1c" frameborder="0"  allowfullscreen></iframe>
 </div><br> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>

`Back to the main page <index.html>`_
