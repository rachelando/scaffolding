
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "in-practice" } 
   </script>


2️⃣ Accessibility in practice
::::::::::::::::::::::::::::::::

------------------------
Current design practices
------------------------

Despite the availability of guidelines and resources on accessibility, **accessibility is not prioritised highly enough in practice**.
In fact, of the top one million home pages, 96.3% had WCAG failures [#]_.
One of the key reasons for this is that accessibility is **not incorporated early enough into the web design process**.
Deadlines and a lack of resources mean that accessibility is often only lightly considered at the end of the process or not considered at all.
By incorporating accessibility from the very beginning of web design:

- the needs of people with disabilities are continually considered,

- it is less costly to fix accessibility problems, and

- better accessibility is good for everyone.

So what exactly is involved in the early stages of web design?
Web designers create a draft version of the website that is not fully functional, called a prototype.
They use design tools such as **Figma**, which is the tool that you will use shortly.

Designs are then sent on to developers who write the actual code for the website based on the designs.

.. raw:: html


		  <div class="admonition attention">
          <div class="mcq">
		  <p class="admonition-title">MCQ</p>
                <p>Which of the below statements is NOT true about web design?</p>
		<form name=Q1 id="Q1" data-component="in-practice">
		<input type="checkbox" id="Q1A1" value=""><label for="Q1A1">Currently, most websites have accessibility problems</label> <span id="Q1A1-feedback"> </span><br> 		<input type="checkbox" id="Q1A2" value=""><label for="Q1A2">Fixing accessibility problems early saves money and time</label> <span id="Q1A2-feedback"> </span><br> 		<input type="checkbox" id="Q1A3" value="correct"><label for="Q1A3">Ideally, accessibility should be incorporated after the design phase</label> <span id="Q1A3-feedback"> </span><br> 		<input type="checkbox" id="Q1A4" value=""><label for="Q1A4">Accessibility is not considered enough due to deadlines and a lack of resources</label> <span id="Q1A4-feedback"> </span><br> 
                <input type="button" value="Check" onclick="sendmcq('Q1')"><br>
		</form>
		<script id="Q1-answers" type="application/json"> 
		[ 	{ "ansid":"Q1A1", "answer": "Currently, most websites have accessibility problems", "feedback": "Incorrect. That IS true about web design.", "result": ""  } ,	{ "ansid":"Q1A2", "answer": "Fixing accessibility problems early saves money and time", "feedback": "Incorrect. That IS true about web design.", "result": ""  } ,	{ "ansid":"Q1A3", "answer": "Ideally, accessibility should be incorporated after the design phase", "feedback": "That's right! It should be incorporated DURING the design phase.", "result": "correct"  } ,	{ "ansid":"Q1A4", "answer": "Accessibility is not considered enough due to deadlines and a lack of resources", "feedback": "Incorrect. That IS true about web design.", "result": ""  } 
	]
	</script>

	</div>
	</div>

---------------------------------
Accessible design tools like Adee
---------------------------------

.. image:: Images/Adee-logo.png
   :alt: Adee logo
   :width: 4cm
   :align: center

Accessibility experts recommend that accessibility support is **incorporated into the tools that web designers use daily**.
There are many requirements for designers to consider while designing including the design brief itself, aesthetics, company branding, marketing requirements, and many more.
And accessibility is another crucial requirement to juggle.
However, having in-built accessibility support in design tools helps with this.
It helps designers to easily integrate accessibility and have access to feedback and resources without having to leave the tool and manually check WCAG requirements.
One such accessibility tool is **Adee** which you will also use shortly.

Adee also makes it easy for designers to report how well they are following accessibility guidelines.
The "Generate" button in Adee generates a report that can be shown to managers or colleagues.

.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   How well do you understand accessibility in design practice?
   <form id = "C2" data-component="in-practice">
      Never heard of it
   <input type="radio" name="C2" id="C2A1">
   <input type="radio" name="C2" id="C2A2">
   <input type="radio" name="C2" id="C2A3">
   <input type="radio" name="C2" id="C2A4">
   <input type="radio" name="C2" id="C2A5">
   Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C2','in-practice')"><br>
   </form>
   </div>
   </div>


.. [#] `WebAIM (2023) <https://webaim.org/projects/million/>`_