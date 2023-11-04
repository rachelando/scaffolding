# EarlyAccess

To view the scaffolding, open **build/html/0a-intro.html** in a browser.

To render all pages, run: `bash doall`.

To log activities and run the OLM, navigate to the directory **server**, and run `node server.js`.
The server uses http://localhost:3000.

- Logged data is saved locally in **ScaffoldingLoggedData.csv**. 
- The OLM is saved locally in **olm.json**.

In **olm-presets/olm-reset.json**, all self-ratings and MCQs are set to "not-started".
In **olm-presets/olm-sample.json**, self-ratings and MCQs are set to sample values that simulate a person in mid-use of the tool. 
