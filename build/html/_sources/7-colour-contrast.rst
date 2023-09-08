
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "colour-contrast" } 
   </script>


😕 Colour contrast ✴️
::::::::::::::::::::::::

-------------------------------------
Colour contrast and its importance ✅
-------------------------------------

Put simply, colour contrast is how different one colour is from another colour.
Measuring colour contrast requires **2 colours** to be compared against each other.
Colour contrast is particularly important for text and other essential elements.

.. image:: Images/contrast-quiz.png
   :alt: Two pale yellow rectangles with text, the left with light coloured text and the right with darker coloured text
   :width: 15cm
   :align: center

.. raw:: html


          <div class="mcq">
                <p>Which of these colour pairings has higher colour contrast?</p>
		<form name=Q1 id="Q1" data-component="colour-contrast">
		<input type="checkbox" id="Q1A1" value=""><label for="Q1A1">Image 1</label> <span id="Q1A1-feedback"> </span><br> 		<input type="checkbox" id="Q1A2" value="correct"><label for="Q1A2">Image 2</label> <span id="Q1A2-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q1')"><br>
		</form>
		<script id="Q1-answers" type="application/json"> 
		[ 	{ "ansid":"Q1A1", "answer": "Image 1", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q1A2", "answer": "Image 2", "feedback": "That's right!", "result": "correct"  } 
	]
	</script>

	</div>

Why do we need to ensure sufficient colour contrast? Examples of poor contrast; who it helps
Having good colour contrast ensures that people with **low vision** are able to see elements clearly.
It also helps when viewing a screen in bright sunlight.
This is a good example of accessibility helping everyone, not just people with disabilities.

-----------------------------
Colour ratios and the WCAG ❓
-----------------------------

.. TODO Look at Adee task, what is the colour ratio?

What are the WCAG guidelines on colour contrast?
Recommendations from the WCAG for colour contrast differ for AA and AAA levels.
Remember that AAA level requirements are stricter than AA level requirements.
Read the following WCAG excerpt *Success Criterion 1.4.3 Contrast (Minimum) (Level AA)*:

    The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

    :Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

    ...

Read the following WCAG excerpt *Success Criterion 1.4.4 Contrast (Enhanced) (Level AAA)*:

    The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:

    :Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;

    ...

From the two excerpts, please answer the following questions:

.. raw:: html


          <div class="mcq">
                <p>From the WCAG, 3:1 is the minimum colour ratio requirement for:</p>
		<form name=Q2 id="Q2" data-component="colour-contrast">
		<input type="checkbox" id="Q2A1" value="correct"><label for="Q2A1">Large text (level AA)</label> <span id="Q2A1-feedback"> </span><br> 		<input type="checkbox" id="Q2A2" value=""><label for="Q2A2">Normal text (level AAA)</label> <span id="Q2A2-feedback"> </span><br> 		<input type="checkbox" id="Q2A3" value=""><label for="Q2A3">Normal text (level AA) and large text (level AAA)</label> <span id="Q2A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q2')"><br>
		</form>
		<script id="Q2-answers" type="application/json"> 
		[ 	{ "ansid":"Q2A1", "answer": "Large text (level AA)", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q2A2", "answer": "Normal text (level AAA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q2A3", "answer": "Normal text (level AA) and large text (level AAA)", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>

.. raw:: html


          <div class="mcq">
                <p>From the WCAG, 4.5:1 is the minimum colour ratio requirement for:</p>
		<form name=Q3 id="Q3" data-component="colour-contrast">
		<input type="checkbox" id="Q3A1" value=""><label for="Q3A1">Large text (level AA)</label> <span id="Q3A1-feedback"> </span><br> 		<input type="checkbox" id="Q3A2" value=""><label for="Q3A2">Normal text (level AAA)</label> <span id="Q3A2-feedback"> </span><br> 		<input type="checkbox" id="Q3A3" value="correct"><label for="Q3A3">Normal text (level AA) and large text (level AAA)</label> <span id="Q3A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q3')"><br>
		</form>
		<script id="Q3-answers" type="application/json"> 
		[ 	{ "ansid":"Q3A1", "answer": "Large text (level AA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q3A2", "answer": "Normal text (level AAA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q3A3", "answer": "Normal text (level AA) and large text (level AAA)", "feedback": "That's right!", "result": "correct"  } 
	]
	</script>

	</div>

.. raw:: html


          <div class="mcq">
                <p>From the WCAG, 7:1 is the minimum colour ratio requirement for:</p>
		<form name=Q4 id="Q4" data-component="colour-contrast">
		<input type="checkbox" id="Q4A1" value=""><label for="Q4A1">Large text (level AA)</label> <span id="Q4A1-feedback"> </span><br> 		<input type="checkbox" id="Q4A2" value="correct"><label for="Q4A2">Normal text (level AAA)</label> <span id="Q4A2-feedback"> </span><br> 		<input type="checkbox" id="Q4A3" value=""><label for="Q4A3">Normal text (level AA) and large text (level AAA)</label> <span id="Q4A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q4')"><br>
		</form>
		<script id="Q4-answers" type="application/json"> 
		[ 	{ "ansid":"Q4A1", "answer": "Large text (level AA)", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q4A2", "answer": "Normal text (level AAA)", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q4A3", "answer": "Normal text (level AA) and large text (level AAA)", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>

Important non-text information such as **graphics** have the same WCAG contrast requirements as large text.
That is, graphics should have a contrast ratio of 3:1 for level AA and 4.5:1 for level AAA.

-----------------------------------
Colour contrast vs colour blindness
-----------------------------------

It is easy to get confused between colour blindness and colour contrast since they are both related to colour.
But it's important to remember colour blindness is related to the **hues** of colours (e.g., red, yellow) and colour contrast is related to the **luminance** (or brightness of colours).
For example, the image below is accessible in terms of colour blindness, since it is only in black and white.

.. image:: Images/dark-text.png
   :alt: Grey text "Some text on a dark background" on a darker grey background
   :width: 7cm
   :align: center

However, it is still hard to read because of insufficient colour *contrast*.
Its colour ratio is around 1.7:1 which is below the WCAG requirements.

.. raw:: html

   <div class="likert"><br>
   How well do you understand colour contrast?
   <form id = "C5" data-component="colour-contrast">
      Never heard of it
   <input type="radio" name="C5" id="C5A1">
   <input type="radio" name="C5" id="C5A2">
   <input type="radio" name="C5" id="C5A3">
   <input type="radio" name="C5" id="C5A4">
   <input type="radio" name="C5" id="C5A5">
   Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C5','colour-contrast')"><br>
   </form>
   </div>

