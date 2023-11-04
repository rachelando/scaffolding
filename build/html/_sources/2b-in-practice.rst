
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "in-practice" } 
   </script>


Accessibility in practice
:::::::::::::::::::::::::::::::::

------------------------
Current design practices
------------------------

Despite the availability of guidelines and resources on accessibility, **accessibility is not prioritised highly enough in practice**.
In fact, of the top one million home pages, 96.3% had WCAG failures [#]_.
One of the key reasons for this is that accessibility is **not incorporated early enough into the web design process**.
Deadlines and a lack of resources mean that accessibility is often only lightly considered at the end of the process or not at all.

By incorporating accessibility from the very beginning of web design:

- the needs of people with disabilities are continually considered,

- it is less costly to fix accessibility problems, and

- better accessibility is good for everyone.

So what is involved in the early stages of web design?
Web designers create a draft version of the website that is not fully functional, called a prototype.
They use design tools such as **Figma**, which is the tool that you will use shortly.
Designs are then sent on to developers who write the actual code for the website based on the designs.

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>Which of the below statements is <b>NOT</b> true about web design?</p>
		<form name=Q1 id="Q1" data-component="in-practice">
		<input type="radio" name="Q1" id="Q1A1">	<label for="Q1A1">Currently, most websites have accessibility problems</label> <span id="Q1A1-feedback"> </span><br> 		<input type="radio" name="Q1" id="Q1A2">	<label for="Q1A2">Fixing accessibility problems early saves money and time</label> <span id="Q1A2-feedback"> </span><br> 		<input type="radio" name="Q1" id="Q1A3">	<label for="Q1A3">Ideally, accessibility should be incorporated after the design phase</label> <span id="Q1A3-feedback"> </span><br> 		<input type="radio" name="Q1" id="Q1A4">	<label for="Q1A4">Accessibility is not considered enough due to deadlines and a lack of resources</label> <span id="Q1A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q1')"><br>
		</form>
		<script id="Q1-answers" type="application/json"> 
		[ 	{ "ansid":"Q1A1", "answer": "Currently, most websites have accessibility problems", "feedback": "Incorrect. That IS true about web design.", "result": ""  } ,	{ "ansid":"Q1A2", "answer": "Fixing accessibility problems early saves money and time", "feedback": "Incorrect. That IS true about web design.", "result": ""  } ,	{ "ansid":"Q1A3", "answer": "Ideally, accessibility should be incorporated after the design phase", "feedback": "That's right! 🎉 It should be incorporated DURING the design phase.", "result": "correct"  } ,	{ "ansid":"Q1A4", "answer": "Accessibility is not considered enough due to deadlines and a lack of resources", "feedback": "Incorrect. That IS true about web design.", "result": ""  } 
	]
	</script>

	</div>
	</div>

---------------------------------
Accessible design tools like Adee
---------------------------------

.. image:: Images/Adee-logo.png
    :alt: Adee logo
    :width: 3cm
    :align: center

Accessibility support should be **incorporated into the tools that web designers use daily**.
There are many requirements for designers to consider while designing including the design brief itself, aesthetics, company branding, marketing requirements, and many more.
And accessibility is another crucial requirement to juggle.
However, in-built accessibility support in design tools helps designers to easily integrate accessibility.
They can access feedback and resources without having to leave the design tool and manually check WCAG requirements.
One such accessibility tool is **Adee** which you will also use shortly.

Adee also makes it easy for designers to report how well they are following accessibility guidelines.
The "Generate" button in Adee generates a report that can be shown to managers or colleagues.

-------------
Starting Adee
-------------

.. admonition:: Starting Adee

    Starting Adee in Figma.

    1. Open Figma resources from the top bar with the icon matching the image below. Alternatively, the keyboard shortcut for Figma resources is Shift + i

    .. image:: Images/figma-plug-ins.png
        :alt: Figma menu bar with resources icon indicated
        :width: 10cm
        :align: center

    2. Go to the "plugins" tab
    3. Search for "Adee"
    4. Hover over "Adee Comprehensive Accessibility Tool" and click "Run"
    5. Here you will see Adee's 4 functionalities. Choose one to click and start Adee
    6. Close the plugin

    We will come back to Adee soon.

--------------------
Ability-based design
--------------------

While designing for accessibility it is better not to have in mind, "What disability does a person have?" but rather, **"What can a person do?"**
This is known as **ability-based design** [#]_.
In ability-based design, computer systems are made to fit whoever uses them, rather than the other way round.
Shifting our thinking away from disability to *ability* helps us see the **wide range** of abilities, needs and preferences we get to design for.
Only designing with a user like yourself in mind ultimately means your design won't be helpful for many people.

.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   How well do you understand accessibility in design practice?
   <form id = "C2" data-component="in-practice">
      Never heard of it 1️⃣
   <input type="radio" name="C2" id="C2A1">
   <input type="radio" name="C2" id="C2A2">
   <input type="radio" name="C2" id="C2A3">
   <input type="radio" name="C2" id="C2A4">
   <input type="radio" name="C2" id="C2A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C2','in-practice')"><br>
   <p class="likert-feedback" id="C2-feedback"></p>
   </form>
   </div>
   </div>


.. [#] `WebAIM (2023) <https://webaim.org/projects/million/>`_
.. [#] `Wobbrock, Kane, Gajos, Harada, & Froehlich. 2011. Ability-Based Design: Concept, Principles and Examples. ACM Trans. Access. Comput. <https://doi.org/10.1145/1952383.1952384>`_
