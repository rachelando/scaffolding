
.. raw:: html

   <script id="pagemeta" type="application/json">
     { "ebook": "scaffolding", "component": "initial-ratings" } 
   </script>


Knowledge self-ratings
:::::::::::::::::::::::::::::::

Please fill out the all the ratings below.
This is only used to gauge your understanding of accessibility and it's not at all a test so please answer as honestly as possible.
Don't forget to submit each of your answers.

    Confidence self-ratings:

    :1️⃣: Never heard of it
    :2️⃣: Know very little
    :3️⃣: Know a fair amount
    :4️⃣: Know/understand quite well
    :5️⃣: Could explain it to a friend

.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   1. How well do you understand the basics of what accessibility is and why it's important?
   <form id = "C1" data-component="accessibility-intro">
      Never heard of it 1️⃣
   <input type="radio" name="C1" id="C1A1">
   <input type="radio" name="C1" id="C1A2">
   <input type="radio" name="C1" id="C1A3">
   <input type="radio" name="C1" id="C1A4">
   <input type="radio" name="C1" id="C1A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C1','accessibility-intro')"><br>
   <p class="likert-feedback" id="C1-feedback"></p>
   </form>
   </div>
   </div>


.. Tip:: Did you notice the self-rating symbol change on the left menu after you pressed submit?

.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   2. How well do you understand the WCAG?
   <form id = "C2" data-component="wcag">
      Never heard of it 1️⃣
   <input type="radio" name="C2" id="C2A1">
   <input type="radio" name="C2" id="C2A2">
   <input type="radio" name="C2" id="C2A3">
   <input type="radio" name="C2" id="C2A4">
   <input type="radio" name="C2" id="C2A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C2','wcag')"><br>
   <p class="likert-feedback" id="C2-feedback"></p>
   </form>
   </div>
   </div>


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   3. How well do you understand accessibility in design practice?
   <form id = "C3" data-component="in-practice">
      Never heard of it 1️⃣
   <input type="radio" name="C3" id="C3A1">
   <input type="radio" name="C3" id="C3A2">
   <input type="radio" name="C3" id="C3A3">
   <input type="radio" name="C3" id="C3A4">
   <input type="radio" name="C3" id="C3A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C3','in-practice')"><br>
   <p class="likert-feedback" id="C3-feedback"></p>
   </form>
   </div>
   </div>


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   4. How well do you understand target size?
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


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   5. How well do you understand alt text?
   <form id = "C5" data-component="alt-text">
      Never heard of it 1️⃣
   <input type="radio" name="C5" id="C5A1">
   <input type="radio" name="C5" id="C5A2">
   <input type="radio" name="C5" id="C5A3">
   <input type="radio" name="C5" id="C5A4">
   <input type="radio" name="C5" id="C5A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C5','alt-text')"><br>
   <p class="likert-feedback" id="C5-feedback"></p>
   </form>
   </div>
   </div>


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   6. How well do you understand general principles about colour and accessibility?
   <form id = "C6" data-component="colour-general">
      Never heard of it 1️⃣
   <input type="radio" name="C6" id="C6A1">
   <input type="radio" name="C6" id="C6A2">
   <input type="radio" name="C6" id="C6A3">
   <input type="radio" name="C6" id="C6A4">
   <input type="radio" name="C6" id="C6A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C6','colour-general')"><br>
   <p class="likert-feedback" id="C6-feedback"></p>
   </form>
   </div>
   </div>


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   7. How well do you understand colour vision deficiency?
   <form id = "C7" data-component="cvd">
      Never heard of it 1️⃣
   <input type="radio" name="C7" id="C7A1">
   <input type="radio" name="C7" id="C7A2">
   <input type="radio" name="C7" id="C7A3">
   <input type="radio" name="C7" id="C7A4">
   <input type="radio" name="C7" id="C7A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C7','cvd')"><br>
   <p class="likert-feedback" id="C7-feedback"></p>
   </form>
   </div>
   </div>


.. raw:: html

   <div class="admonition caution"><br>
   <div class="likert">
   <p class="admonition-title">Knowledge self-rating</p>
   8. How well do you understand colour contrast?
   <form id = "C8" data-component="colour-contrast">
      Never heard of it 1️⃣
   <input type="radio" name="C8" id="C8A1">
   <input type="radio" name="C8" id="C8A2">
   <input type="radio" name="C8" id="C8A3">
   <input type="radio" name="C8" id="C8A4">
   <input type="radio" name="C8" id="C8A5">
   5️⃣ Could explain it to a friend
   <input type="button" value="Submit" onclick="sendlik('C8','colour-contrast')"><br>
   <p class="likert-feedback" id="C8-feedback"></p>
   </form>
   </div>
   </div>

