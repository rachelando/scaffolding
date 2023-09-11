
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "cvd" } 
   </script>


🥳 Colour vision deficiency ❓
::::::::::::::::::::::::::::::

---------------------------------------
What is colour vision deficiency (CVD)?
---------------------------------------

Colour vision deficiency (CVD) is also known as colour blindness.
People with CVD are either unable or have a decreased ability to see some colours or distinguish between some colours.
Since very few people are strictly colour *blind*, colour vision deficiency is a better term.
Around 1 in 12 men and 1 in 200 women in Australia have CVD [#]_.
The cause of colour blindness is usually genetic although some diseases or drugs can also be causes.

---------------
Types of CVD ❓
---------------

There are **different types** of CVD.
Have a look at the following image.

.. image:: Images/normal-vision.jpeg
   :alt: Several silver bowls filled with powders of different bright colours
   :width: 10cm
   :align: center

Below shows how people with different types of colour blindness would perceive the same image.

.. image:: Images/colour-blindness.png
   :alt: Four CVD types' perception of several silver bowls filled with powders of different bright colours
   :width: 20cm
   :align: center

From left to right, the corresponding CVD types are: deuteranopia, protoanopia, tritanopia, and achromatopsia.
We will learn more about each of these and more shortly.

TODO: Have a look at the different colour blind modes in Adee's colour blindness simulator.

.. raw:: html


          <div class="fitb">
                <p>Not including "Normal", how many types of CVD/colour blindness can you choose from in Adee? (Please enter as a single digit e.g., 1) <input type="text" id="Q1" data-component="cvd"></p>
                <button type="button" onclick="sendfitb('Q1')">Check</button>
		<script id="Q1-answers" type="application/json">
		[

        { "regex": "8", "feedback": " Correct!", "result": "correct"  } ,
        { "regex": "x", "feedback": " Incorrect, have another look.", "result": "incorrect"  }         ]
	</script>
	<p id="Q1-feedback"> <p>

	</div>

From this number, there are 4 types of CVD that are **relatively mild**:

:Deuteranomaly:
    Type of **red-green** colour vision deficiency.
    **Most common** form of CVD.
:Protanomaly:
    Another type of **red-green** colour vision deficiency.
:Tritanomaly:
    Type of **blue-yellow** colour vision deficiency.
    Less common than the above two red-green CVD types.
:Achromatomaly:
    Some deficiency in **all colours**.
    Rarest type of CVD.

You might notice that the remaining 4 types are related to each of these milder forms.
The remaining 4 types have the suffix "-opia" or "-opsia" instead of "-omaly".
These remaining types are complete deficiencies.
So, people with deuteranopia and protoanopia have complete red-green colour blindness so they cannot tell the difference between those colours at all.
People with tritanopia have complete blue-yellow colour blindness so they cannot tell the difference between blue and green, purple and red, and yellow and pink.
People with achromatopsia/monochromacy are unable to see any colour at all.
Achromatopsia is extremely rare.

.. raw:: html


          <div class="mcq">
                <p>To test a web design for the most common type of colour blindness, I would test for...</p>
		<form name=Q2 id="Q2" data-component="cvd">
		<input type="checkbox" id="Q2A1" value=""><label for="Q2A1">Tritanomaly, a type of red-green colour blindness.</label> <span id="Q2A1-feedback"> </span><br> 		<input type="checkbox" id="Q2A2" value="correct"><label for="Q2A2">Deuteranomaly, a type of red-green colour blindness.</label> <span id="Q2A2-feedback"> </span><br> 		<input type="checkbox" id="Q2A3" value=""><label for="Q2A3">Tritanomaly, a type of blue-yellow colour blindness.</label> <span id="Q2A3-feedback"> </span><br> 		<input type="checkbox" id="Q2A4" value=""><label for="Q2A4">Deuteranomaly, a type of blue-yellow colour blindness.</label> <span id="Q2A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q2')"><br>
		</form>
		<script id="Q2-answers" type="application/json"> 
		[ 	{ "ansid":"Q2A1", "answer": "Tritanomaly, a type of red-green colour blindness.", "feedback": "Incorrect, tritanomaly is a type of blue-yellow colour blindness and it's not most common.", "result": ""  } ,	{ "ansid":"Q2A2", "answer": "Deuteranomaly, a type of red-green colour blindness.", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q2A3", "answer": "Tritanomaly, a type of blue-yellow colour blindness.", "feedback": "Incorrect, tritanomaly is a type of blue-yellow colour blindness but it's not most common.", "result": ""  } ,	{ "ansid":"Q2A4", "answer": "Deuteranomaly, a type of blue-yellow colour blindness.", "feedback": "Incorrect, deuteranomaly is most common but it's not a type of blue-yellow colour blindness.", "result": ""  } 
	]
	</script>

	</div>

-----------------
CVD in web design
-----------------

As mentioned previously, it's important to not only use colour to communicate key information.
Otherwise people with CVD miss this information.
An example [#]_ of this is below.
Notice how people with deuteranopia would find it difficult to use the key and only see 4 categories in the chart rather than 6.

.. image:: Images/poor-colour.png
   :alt: Fictional pie chart showcasing poor accessible design for people with CVD
   :width: 15cm
   :align: center

But this doesn't mean that colour must be avoided entirely.
Instead, use other indicators as well as colour such as spacing, borders, patterns, and labels.
Below is an improved version of the same chart.

.. image:: Images/good-colour.png
   :alt: Fictional pie chart showcasing good accessible design for people with CVD
   :width: 15cm
   :align: center

.. raw:: html


          <div class="mcq">
                <p>How has this second pie chart been improved in terms of CVD accessibility?</p>
		<form name=Q3 id="Q3" data-component="cvd">
		<input type="checkbox" id="Q3A1" value="correct"><label for="Q3A1">Labels and spacing as additional cues</label> <span id="Q3A1-feedback"> </span><br> 		<input type="checkbox" id="Q3A2" value=""><label for="Q3A2">Spacing and patterns as additional cues</label> <span id="Q3A2-feedback"> </span><br> 		<input type="checkbox" id="Q3A3" value=""><label for="Q3A3">Labels and patterns as additional cues</label> <span id="Q3A3-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q3')"><br>
		</form>
		<script id="Q3-answers" type="application/json"> 
		[ 	{ "ansid":"Q3A1", "answer": "Labels and spacing as additional cues", "feedback": "That's right!", "result": "correct"  } ,	{ "ansid":"Q3A2", "answer": "Spacing and patterns as additional cues", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q3A3", "answer": "Labels and patterns as additional cues", "feedback": "Incorrect.", "result": ""  } 
	]
	</script>

	</div>

.. admonition:: Adee task 4

     Check the accessibility of a chart for colour vision deficiency.

     1. Select the chart image under Task 4
     2. Open the Adee plugin to "Colorblind Simulator tool"
     3. Check the chart image's colour against the "Tritanopia" colour blind type
     4. Explain how a designer should improve the chart based on the simulation results
     5. Close the plugin

.. raw:: html

   <div class="likert"><br>
   Rate the difficulty of Adee task 4
   <form id = "C4" data-component="cvd">
      Extremely difficult
   <input type="radio" name="C4" id="C4A1">
   <input type="radio" name="C4" id="C4A2">
   <input type="radio" name="C4" id="C4A3">
   <input type="radio" name="C4" id="C4A4">
   <input type="radio" name="C4" id="C4A5">
   Extremely easy
   <input type="button" value="Submit" onclick="sendlik('C4','cvd')"><br>
   </form>
   </div>


.. raw:: html

   <div class="likert"><br>
   How well do you understand colour vision deficiency?
   <form id = "C5" data-component="cvd">
      Never heard of it
   <input type="radio" name="C5" id="C5A1">
   <input type="radio" name="C5" id="C5A2">
   <input type="radio" name="C5" id="C5A3">
   <input type="radio" name="C5" id="C5A4">
   <input type="radio" name="C5" id="C5A5">
   Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C5','cvd')"><br>
   </form>
   </div>


.. [#] Simunovic, M. Colour vision deficiency. (2010). *Eye*. 24, 747–755. `<https://doi.org/10.1038/eye.2009.251>`_
.. [#] `Crux Collaborative (2018) <https://cruxcollaborative.com/insights/understanding-color-blindness-guide-to-accessible-design>`_
