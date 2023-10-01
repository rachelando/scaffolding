
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "accessibility-intro" } 
   </script>


Accessibility introduction
::::::::::::::::::::::::::::::::

----------------------
What is accessibility?
----------------------

Web accessibility means that websites, tools, and technologies are designed and developed **so that people with disabilities can use them** [#]_.
This includes questions like, "How would someone with blindness or low vision understand the content of this webpage?" or "Is this button large enough for someone with low motor skills to be able to click it easily?"

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>Which of these user groups is NOT related to accessibility?</p>
		<form name=Q1 id="Q1" data-component="accessibility-intro">
		<input type="checkbox" id="Q1A1" value=""><label for="Q1A1">People with low vision</label> <span id="Q1A1-feedback"> </span><br> 		<input type="checkbox" id="Q1A2" value=""><label for="Q1A2">People with cognitive impairments</label> <span id="Q1A2-feedback"> </span><br> 		<input type="checkbox" id="Q1A3" value="correct"><label for="Q1A3">People in remote locations</label> <span id="Q1A3-feedback"> </span><br> 		<input type="checkbox" id="Q1A4" value=""><label for="Q1A4">People with hearing impairments</label> <span id="Q1A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q1')"><br>
		</form>
		<script id="Q1-answers" type="application/json"> 
		[ 	{ "ansid":"Q1A1", "answer": "People with low vision", "feedback": "Incorrect, that IS related to accessibility.", "result": ""  } ,	{ "ansid":"Q1A2", "answer": "People with cognitive impairments", "feedback": "Incorrect, that IS related to accessibility.", "result": ""  } ,	{ "ansid":"Q1A3", "answer": "People in remote locations", "feedback": "That's right! That is NOT related to accessibility.", "result": "correct"  } ,	{ "ansid":"Q1A4", "answer": "People with hearing impairments", "feedback": "Incorrect, that IS related to accessibility.", "result": ""  } 
	]
	</script>

	</div>
	</div>

It can be easy to think that not many people have disabilities and therefore accessibility is not a large concern.
However, **1.3 billion people** globally experience a significant disability [#]_.
That's around 16% of the global population.

-------------------------------
Why is accessibility important?
-------------------------------

As well as helping people with disabilities, accessibility helps **everyone**.
For example, poor vision may be simply caused by direct sunlight to a laptop rather than a disability.

Accessibility can also benefit **other groups of users** other than just those with disabilities.
Many elderly people have poor vision and motor skills due to age rather than a disability.
Some people prefer to navigate websites with the keyboard rather than a mouse for efficiency.
Allowing this helps those users as well as people with low dexterity who cannot use a mouse due to accessibility.

Accessibility also helps businesses generate more profit in the long term.
From the above, accessibility helps generate more customers as more user groups are able to use accessible websites (and not just people with disabilities).
Accessibility also drives innovation (Apple and Google are examples of this) and minimises legal risks.
Therefore, accessibility is worth pursuing from **both ethical and practical viewpoints**.

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>Which of the below statements is NOT a motivation for accessibility?</p>
		<form name=Q2 id="Q2" data-component="accessibility-intro">
		<input type="checkbox" id="Q2A1" value=""><label for="Q2A1">Accessibility also helps other user groups</label> <span id="Q2A1-feedback"> </span><br> 		<input type="checkbox" id="Q2A2" value=""><label for="Q2A2">Accessibility has a good business case</label> <span id="Q2A2-feedback"> </span><br> 		<input type="checkbox" id="Q2A3" value=""><label for="Q2A3">Accessibility helps everyone</label> <span id="Q2A3-feedback"> </span><br> 		<input type="checkbox" id="Q2A4" value="correct"><label for="Q2A4">Accessibility is unnecessary from an ethical standpoint</label> <span id="Q2A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q2')"><br>
		</form>
		<script id="Q2-answers" type="application/json"> 
		[ 	{ "ansid":"Q2A1", "answer": "Accessibility also helps other user groups", "feedback": "Incorrect, that IS a motivation.", "result": ""  } ,	{ "ansid":"Q2A2", "answer": "Accessibility has a good business case", "feedback": "Incorrect, that IS a motivation.", "result": ""  } ,	{ "ansid":"Q2A3", "answer": "Accessibility helps everyone", "feedback": "Incorrect, that IS a motivation.", "result": ""  } ,	{ "ansid":"Q2A4", "answer": "Accessibility is unnecessary from an ethical standpoint", "feedback": "That's right! That is NOT a motivation.", "result": "correct"  } 
	]
	</script>

	</div>
	</div>

.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   How well do you understand what accessibility is and why it's important?
   <form id = "C3" data-component="accessibility-intro">
      Never heard of it
   <input type="radio" name="C3" id="C3A1">
   <input type="radio" name="C3" id="C3A2">
   <input type="radio" name="C3" id="C3A3">
   <input type="radio" name="C3" id="C3A4">
   <input type="radio" name="C3" id="C3A5">
   Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C3','accessibility-intro')"><br>
   </form>
   </div>
   </div>


.. [#] `WAI (2022) <https://www.w3.org/WAI/fundamentals/accessibility-intro/>`_
.. [#] `WHO <https://www.who.int/health-topics/disability>`_
