const fs = require('fs');
const { head } = require('./server');

const olmFileName = "../olm.json";

const headingFullNameDict = {
    "accessibility-intro": "Accessibility introduction",
    "wcag": "Accessibility guidelines",
    "in-practice": "Accessibility in practice",
    "target-size": "Touch target size",
    "alt-text": "Alternative (alt) text",
    "colour-general": "Designing with colour",
    "cvd": "Colour vision deficiency",
    "colour-contrast": "Colour contrast",
    "quiz": "Quiz"
};

const ratingDict = {
    "not-started": "#️⃣",
    1: "1️⃣",
    2: "2️⃣",
    3: "3️⃣",
    4: "4️⃣",
    5: "5️⃣"
};

getMcqOverall = function(mcqObj) {
    var foundNotStarted = false;
    var foundWrong = false;
    var foundRight = false;
    for (let question in mcqObj) {
        if (mcqObj[question] == "not-started") {
            foundNotStarted = true;
        } else if (mcqObj[question] === true) {
            foundRight = true;
        } else if (mcqObj[question] === false) {
            foundWrong = true;
        }
    }
    if (foundNotStarted && !foundWrong && !foundRight) {
        return "❓";
    } else if (foundRight && !foundNotStarted && !foundWrong) {
        return "✅";
    } else if (foundWrong && !foundRight) {
        return "❌";
    } else if (foundRight && (foundWrong || foundNotStarted)) {
        return "🟧";
    }
}

module.exports = {
    getFullOLM: function() {
        var olmObj = JSON.parse(fs.readFileSync(olmFileName, 'utf8'));
        var retOlmObj = {};
        for (let heading in olmObj) {
            var headingObj = {
                "full-name": headingFullNameDict[heading],
                "self-rating": ratingDict[olmObj[heading]["self-rating"]],
                "mcq": getMcqOverall(olmObj[heading]["mcq"])
            };
            retOlmObj[heading] = headingObj;
        }
        return retOlmObj;
    },

    updateOLM: function(data) {
        // Sample test data structures
        const dataMcq = {
            "component": "target-size",
            "type": "mcq",
            "value": "incorrect",
            "question": "Q1"
        };
        const dataRating = {
            "component": "target-size",
            "type": "self-rating",
            "value": 5,
        };
        // data = dataRating;

        var retNavJson = {};

        // Read OLM and update object
        // Incomplete data-checking done too
        var olmObj = JSON.parse(fs.readFileSync(olmFileName, 'utf8'));
        const component = data["component"];
        if (!(component in olmObj)) {
            return {error: "Invalid component"};
        }
        // Self-rating
        if (data["type"] == "self-rating") {
            olmObj[component]["self-rating"] = data["value"];
            // Set values to return
            retNavJson[component] = {
                "full-name": headingFullNameDict[component],
                "self-rating": ratingDict[data["value"]],
            };
        }
        // MCQ
        else if (data["type"] == "mcq") {
            if (data["value"] == "correct") {
                olmObj[component]["mcq"][data["question"]] = true;
            } else if (data["value"] == "incorrect") {
                olmObj[component]["mcq"][data["question"]] = false;
            } else {
                return {error: "Invalid mcq value"};
            }
            // Set values to return
            retNavJson[component] = {
                "full-name": headingFullNameDict[component],
                "mcq": getMcqOverall(olmObj[component]["mcq"])
            };
        } else {
            return {error: "Invalid type"};
        }
        // Write change to file
        fs.writeFileSync(olmFileName, JSON.stringify(olmObj, null, "\t"));
        // Return nav update in json format
        return retNavJson;
    }
};
