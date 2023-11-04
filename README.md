# EarlyAccess

## Running EarlyAccess

To view the scaffolding, open **build/html/0a-intro.html** in a browser.

To render all pages, run: `bash doall`.

To log activities and run the OLM, navigate to the directory *server*, and run `node server.js`.
The server uses http://localhost:3000.

In **olm-presets/olm-reset.json**, all self-ratings and MCQs are set to "not-started".
In **olm-presets/olm-sample.json**, self-ratings and MCQs are set to sample values that simulate a person in mid-use of the tool. 

## Key code for EarlyAccess

- **doall** is a simple bash script that outputs all pages. This was written by Professor Bob Kummerfeld.
- ERST files are in the *source* directory.
- **preprst** is a Python script that parses ERST files and outputs corresponding RST files. This was written by Professor Bob Kummerfeld and has some minor extensions for EarlyAccess including facilitating Adee task SEQs and adding HTML tags for formatting with the Book theme.
- RST files are parsed by Sphinx and the resulting HTML files are in *build/html*.
- The *server* directory contains the Node.js server (consisting of **server.js** and **olmmodel.js**). These facilitate OLM and logged data storage and is an addition for EarlyAccess.
    - Logged data is saved locally in **ScaffoldingLoggedData.csv**. 
    - The OLM is saved locally in **olm.json**.
- **build/html/_static/ebook.js** facilitates dynamic content: MCQs, topic self-ratings, and Adee SEQs. This was primarily written by Professor Bob Kummerfeld and was extended to use APIs defined in the Node.js server for EarlyAccess.
- **source/conf.py** is the Sphinx configuration file. Here, the Book theme was configured for use for EarlyAccess. 

EarlyAccess makes use of the [Book theme](https://sphinx-themes.org/sample-sites/sphinx-book-theme/) from [sphinx-themes.org].
