
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "colour-contrast" } 
   </script>


Colour contrast
::::::::::::::::::::::::::::::::

-------------------------------------
Colour contrast and its importance
-------------------------------------

Put simply, colour contrast is **how different one colour is from another colour**.
Measuring colour contrast requires **2 colours** to be compared against each other.
Colour contrast is particularly important for text and other essential elements.

.. image:: Images/contrast-quiz.png
   :alt: Two pale yellow rectangles with text, the left with light coloured text and the right with darker coloured text
   :width: 15cm
   :align: center

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>Which of these colour pairings has higher colour contrast?</p>
		<form name=Q1 id="Q1" data-component="colour-contrast">
		<input type="radio" name="Q1" id="Q1A1">	<label for="Q1A1">Image 1</label> <span id="Q1A1-feedback"> </span><br> 		<input type="radio" name="Q1" id="Q1A2">	<label for="Q1A2">Image 2</label> <span id="Q1A2-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q1')"><br>
		</form>
		<script id="Q1-answers" type="application/json"> 
		[ 	{ "ansid":"Q1A1", "answer": "Image 1", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q1A2", "answer": "Image 2", "feedback": "That's right! 🎉", "result": "correct"  } 
	]
	</script>

	</div>
	</div>

Having good colour contrast ensures that people with **low vision** are able to see elements clearly.

The W3C video below further shows the importance of good colour contrast.

.. raw:: html

      <div>   <iframe align="left" width="500" height="281" src="https://www.youtube.com/embed/Hui87z2Vx8o" frameborder="0"  allowfullscreen></iframe>
 </div><br> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>

-----------------------------
Colour ratios and the WCAG
-----------------------------

Recommendations from the WCAG for colour contrast differ for AA and AAA levels.
Remember that AAA level requirements are stricter than AA level requirements.
Read the following excerpt from WCAG *Success Criterion 1.4.3 Contrast (Minimum) (Level AA)*:

    The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

    :Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

    ...

Read the following WCAG excerpt *Success Criterion 1.4.4 Contrast (Enhanced) (Level AAA)*:

    The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:

    :Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;

    ...

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>From the WCAG, 3:1 is the minimum colour ratio requirement for:</p>
		<form name=Q2 id="Q2" data-component="colour-contrast">
		<input type="radio" name="Q2" id="Q2A1">	<label for="Q2A1">Large text (level AA)</label> <span id="Q2A1-feedback"> </span><br> 		<input type="radio" name="Q2" id="Q2A2">	<label for="Q2A2">Normal text (level AAA)</label> <span id="Q2A2-feedback"> </span><br> 		<input type="radio" name="Q2" id="Q2A3">	<label for="Q2A3">Normal text (level AA) and large text (level AAA)</label> <span id="Q2A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q2')"><br>
		</form>
		<script id="Q2-answers" type="application/json"> 
		[ 	{ "ansid":"Q2A1", "answer": "Large text (level AA)", "feedback": "That's right! 🎉", "result": "correct"  } ,	{ "ansid":"Q2A2", "answer": "Normal text (level AAA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q2A3", "answer": "Normal text (level AA) and large text (level AAA)", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>
	</div>

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>From the WCAG, 4.5:1 is the minimum colour ratio requirement for:</p>
		<form name=Q3 id="Q3" data-component="colour-contrast">
		<input type="radio" name="Q3" id="Q3A1">	<label for="Q3A1">Large text (level AA)</label> <span id="Q3A1-feedback"> </span><br> 		<input type="radio" name="Q3" id="Q3A2">	<label for="Q3A2">Normal text (level AAA)</label> <span id="Q3A2-feedback"> </span><br> 		<input type="radio" name="Q3" id="Q3A3">	<label for="Q3A3">Normal text (level AA) and large text (level AAA)</label> <span id="Q3A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q3')"><br>
		</form>
		<script id="Q3-answers" type="application/json"> 
		[ 	{ "ansid":"Q3A1", "answer": "Large text (level AA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q3A2", "answer": "Normal text (level AAA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q3A3", "answer": "Normal text (level AA) and large text (level AAA)", "feedback": "That's right! 🎉", "result": "correct"  } 
	]
	</script>

	</div>
	</div>

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>From the WCAG, 7:1 is the minimum colour ratio requirement for:</p>
		<form name=Q4 id="Q4" data-component="colour-contrast">
		<input type="radio" name="Q4" id="Q4A1">	<label for="Q4A1">Large text (level AA)</label> <span id="Q4A1-feedback"> </span><br> 		<input type="radio" name="Q4" id="Q4A2">	<label for="Q4A2">Normal text (level AAA)</label> <span id="Q4A2-feedback"> </span><br> 		<input type="radio" name="Q4" id="Q4A3">	<label for="Q4A3">Normal text (level AA) and large text (level AAA)</label> <span id="Q4A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q4')"><br>
		</form>
		<script id="Q4-answers" type="application/json"> 
		[ 	{ "ansid":"Q4A1", "answer": "Large text (level AA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q4A2", "answer": "Normal text (level AAA)", "feedback": "That's right! 🎉", "result": "correct"  } ,	{ "ansid":"Q4A3", "answer": "Normal text (level AA) and large text (level AAA)", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>
	</div>

Important non-text information such as **graphics** have the same WCAG contrast requirements as large text.
That is, graphics should have a contrast ratio of 3:1 for level AA and 4.5:1 for level AAA.

----------------------------------------------
Colour contrast vs colour blindness (optional)
----------------------------------------------

.. Note:: This subsection is optional. Feel free to skip to the `next subheading <#colour-contrast-in-adee>`_.

It is easy to get confused between colour blindness and colour contrast since they are both related to colour.
But it's important to remember colour blindness is related to the **hues** of colours (e.g., red, yellow) and colour contrast is related to the **luminance** (or brightness of colours).
For example, the image below is accessible in terms of colour blindness, since it is only in black and white.

.. image:: Images/dark-text.png
   :alt: Grey text "Some text on a dark background" on a darker grey background
   :width: 7cm
   :align: center

However, it is still hard to read because of insufficient colour *contrast*.
Its colour ratio is around 1.7:1 which is below the WCAG requirements.

------------------------
Colour contrast in Adee
------------------------

Adee allows you to modify either of the two selected colours on the spot and immediately see if the contrast standards are met.
Selecting the "Apply" button saves the changes in Adee to the actual Figma object.

.. Tip:: Don't forget colour contrast must be between TWO colours.
     Unlike Adee's other functionalities, two elements must be selected in Figma.
     Either click and drag over both elements or whilst holding shift, click one then the other.

-----------
Adee task 6
-----------

.. admonition:: Adee task 6

     Check the colour contrast of a button.

     1. Select the text and its background in task 6
     2. Open the Adee plugin to "Contrast Checker tool"
     3. Check the contrast of the button text and its background
     4. Adjust the colours to meet AAA level standards
     5. Close the plugin

.. raw:: html

   <div class="admonition-adee-task-likert admonition"><br>
   <div class="likert">
   <p class="admonition-title">Adee task rating</p>
   Rate the difficulty of Adee task 6
   <form id = "C5" data-component="colour-contrast">
      Extremely difficult 1
   <input type="radio" name="C5" id="C5A1">
   <input type="radio" name="C5" id="C5A2">
   <input type="radio" name="C5" id="C5A3">
   <input type="radio" name="C5" id="C5A4">
   <input type="radio" name="C5" id="C5A5">
   <input type="radio" name="C5" id="C5A6">
   <input type="radio" name="C5" id="C5A7">
   7 Extremely easy
   <input type="button" value="Submit" onclick="sendlikseven('C5','colour-contrast')"><br>
   <p id="C5-feedback"></p>
   </form>
   </div>
   </div>


-----------
Adee task 7
-----------

.. admonition:: Adee task 7

     Check the colour contrast in a chart.

     Suppose you want to determine if the colour contrast between the two colours used in the bar graph under task 7 meet AA level standards.
     How would you do that?

.. raw:: html

   <div class="admonition-adee-task-likert admonition"><br>
   <div class="likert">
   <p class="admonition-title">Adee task rating</p>
   Rate the difficulty of Adee task 7
   <form id = "C6" data-component="colour-contrast">
      Extremely difficult 1
   <input type="radio" name="C6" id="C6A1">
   <input type="radio" name="C6" id="C6A2">
   <input type="radio" name="C6" id="C6A3">
   <input type="radio" name="C6" id="C6A4">
   <input type="radio" name="C6" id="C6A5">
   <input type="radio" name="C6" id="C6A6">
   <input type="radio" name="C6" id="C6A7">
   7 Extremely easy
   <input type="button" value="Submit" onclick="sendlikseven('C6','colour-contrast')"><br>
   <p id="C6-feedback"></p>
   </form>
   </div>
   </div>


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   How well do you understand colour contrast?
   <form id = "C7" data-component="colour-contrast">
      Never heard of it 1️⃣
   <input type="radio" name="C7" id="C7A1">
   <input type="radio" name="C7" id="C7A2">
   <input type="radio" name="C7" id="C7A3">
   <input type="radio" name="C7" id="C7A4">
   <input type="radio" name="C7" id="C7A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C7','colour-contrast')"><br>
   <p class="likert-feedback" id="C7-feedback"></p>
   </form>
   </div>
   </div>

