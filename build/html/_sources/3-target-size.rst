
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "target-size" } 
   </script>


Touch target size
::::::::::::::::::::::::::::::::

--------------------------
What is touch target size?
--------------------------

Target size refers to **how large or small buttons or other clickable/touchable targets are** on a website.

.. image:: Images/touch-targets.png
   :alt: A row of four 24dp icons and one 40dp icon
   :width: 18cm
   :align: center

.. Note:: This is our first module about one of Adee's 4 functionalities. You will use this knowledge in action with Adee shortly.

---------------------------------
Touch target size in the WCAG
---------------------------------

The following excerpt is from WCAG 2.1 Success Criterion 2.5.5: Target Size (Level AAA).

    The size of the target for pointer inputs is at least 44 by 44 CSS pixels...

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>Generally, what is the minimum target size from the WCAG?</p>
		<form name=Q1 id="Q1" data-component="target-size">
		<input type="radio" name="Q1" id="Q1A1">	<label for="Q1A1">At least 44 mm in height</label> <span id="Q1A1-feedback"> </span><br> 		<input type="radio" name="Q1" id="Q1A2">	<label for="Q1A2">At least 44 CSS pixels in width</label> <span id="Q1A2-feedback"> </span><br> 		<input type="radio" name="Q1" id="Q1A3">	<label for="Q1A3">44 by 44 mm</label> <span id="Q1A3-feedback"> </span><br> 		<input type="radio" name="Q1" id="Q1A4">	<label for="Q1A4">44 by 44 CSS pixels.</label> <span id="Q1A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q1')"><br>
		</form>
		<script id="Q1-answers" type="application/json"> 
		[ 	{ "ansid":"Q1A1", "answer": "At least 44 mm in height", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q1A2", "answer": "At least 44 CSS pixels in width", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q1A3", "answer": "44 by 44 mm", "feedback": "Incorrect.", "result": ""  } ,	{ "ansid":"Q1A4", "answer": "44 by 44 CSS pixels.", "feedback": "That's right! 🎉", "result": "correct"  } 
	]
	</script>

	</div>
	</div>

---------------------------------------------
Why does touch target size matter? (optional)
---------------------------------------------

.. Note:: This subsection is optional. Feel free to skip to the `next subheading <#different-target-size-standards>`_.

Here is another excerpt from WCAG 2.1 Success Criterion 2.5.5: Target Size (Level AAA).

    The intent of this success criteria is to ensure that target sizes are large enough for users to easily activate them, even if the user is accessing content on a small handheld touch screen device, has limited dexterity, or has trouble activating small targets for other reasons.
    For instance, mice and similar pointing devices can be hard to use for these users, and a larger target will help them activate the target.

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>From this excerpt, why is it important to have large enough target sizes?</p>
		<form name=Q2 id="Q2" data-component="target-size">
		<input type="radio" name="Q2" id="Q2A1">	<label for="Q2A1">Some devices have small screens</label> <span id="Q2A1-feedback"> </span><br> 		<input type="radio" name="Q2" id="Q2A2">	<label for="Q2A2">Some users have limited dexterity</label> <span id="Q2A2-feedback"> </span><br> 		<input type="radio" name="Q2" id="Q2A3">	<label for="Q2A3">Larger targets help users who find mice hard to use</label> <span id="Q2A3-feedback"> </span><br> 		<input type="radio" name="Q2" id="Q2A4">	<label for="Q2A4">All of the above</label> <span id="Q2A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q2')"><br>
		</form>
		<script id="Q2-answers" type="application/json"> 
		[ 	{ "ansid":"Q2A1", "answer": "Some devices have small screens", "feedback": "That's true but there is a more correct answer.", "result": ""  } ,	{ "ansid":"Q2A2", "answer": "Some users have limited dexterity", "feedback": "That's true but there is a more correct answer.", "result": ""  } ,	{ "ansid":"Q2A3", "answer": "Larger targets help users who find mice hard to use", "feedback": "That's true but there is a more correct answer.", "result": ""  } ,	{ "ansid":"Q2A4", "answer": "All of the above", "feedback": "That's right! 🎉", "result": "correct"  } 
	]
	</script>

	</div>
	</div>

-------------------------------
Different target size standards
-------------------------------

As well as the WCAG, there are **other important standards** for touch target size including Apple, Android and the Nielsen group.
However, these standards are all slightly different and in different units which makes it difficult to check if all of them are fulfilled.

:Apple: 44 x 44 pt
:Android: 48 x 48 dp
:Nielsen: 1 x 1 cm
:WCAG: 44 x 44 CSS pixels

Adee simplifies these by converting the standards to the **same unit**, px.
Adee also helps designers check whether all the standards are fulfilled **all at one glance**.

.. image:: Images/target-size-tables.png
   :alt: Target size standards tables from the Adee interface
   :width: 9cm
   :align: center

Above is a screenshot from the Adee interface.
The upper table shows the size of the selected target in pixels and whether it meets each of the 4 accessibility standards for the device type selected.
The lower table shows the minimum height and width needed for the button depending on the device type selected (covered below).

-----------
Device size
-----------

Minimum touch target size **depends on the device** displaying the interface.
Adee **automatically calculates** the minimum touch size depending on which device you select.
It is important to check that a design fulfils the required standards for a range of devices.

-----------
Adee task 1
-----------

Now we will put all our new knowledge about touch target size into practice with Adee...

.. Tip:: For elements to be shown in Adee, they must be selected in Figma. Either click or drag-select over elements to select them in Figma.

.. admonition:: Adee task 1

     Check the target size of a button against accessibility standards.

     1. Select the button under Task 1
     2. Open the Adee plugin to "Touch Size Checker tool"
     3. Test the size of the button if an iPhone Mini device was used
     4. Based on the results, explain how a designer should improve the button size for better accessibility
     5. Close the plugin

.. raw:: html

   <div class="admonition-adee-task-likert admonition"><br>
   <div class="likert">
   <p class="admonition-title">Adee task rating</p>
   Rate the difficulty of Adee task 1
   <form id = "C3" data-component="target-size">
      Extremely difficult 1
   <input type="radio" name="C3" id="C3A1">
   <input type="radio" name="C3" id="C3A2">
   <input type="radio" name="C3" id="C3A3">
   <input type="radio" name="C3" id="C3A4">
   <input type="radio" name="C3" id="C3A5">
   <input type="radio" name="C3" id="C3A6">
   <input type="radio" name="C3" id="C3A7">
   7 Extremely easy
   <input type="button" value="Submit" onclick="sendlikseven('C3','target-size')"><br>
   <p id="C3-feedback"></p>
   </form>
   </div>
   </div>


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   How well do you understand target size?
   <form id = "C4" data-component="target-size">
      Never heard of it 1️⃣
   <input type="radio" name="C4" id="C4A1">
   <input type="radio" name="C4" id="C4A2">
   <input type="radio" name="C4" id="C4A3">
   <input type="radio" name="C4" id="C4A4">
   <input type="radio" name="C4" id="C4A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C4','target-size')"><br>
   <p class="likert-feedback" id="C4-feedback"></p>
   </form>
   </div>
   </div>

