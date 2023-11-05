// script.js
function calculateScore() {
    let overallDescriptionScore = 0;

    let checkedCount = document.querySelectorAll('#overall-description input[type="checkbox"]:checked').length;

    switch (checkedCount) {
        case 6:
            overallDescriptionScore = 50; // Best
            break;
        case 5:
            overallDescriptionScore = 45; // Better
            break;
        case 4:
            overallDescriptionScore = 40; // Good
            break;
        case 3:
            overallDescriptionScore = 35; // Average
            break;
        default:
            overallDescriptionScore = 30; // Below Average
            break;
    }


    let codeReviewScore = 0;

    let checkedCodeReviewCount = document.querySelectorAll('#code-review input[type="checkbox"]:checked').length;

    switch (checkedCodeReviewCount) {
        case 4:
            codeReviewScore = 10;
            break;
        case 3:
            codeReviewScore = 8;
            break;
        default:
            codeReviewScore = 5;
            break;
    }

    let presentationScore = 0;
    
    if (document.getElementById('cover-page').checked) {
        presentationScore += 5;
    }
    
    if (document.getElementById('graphs-figures').checked) {
        presentationScore += 10;
    }
    
    let formattingChecked = document.getElementById('formatting').checked;
    let punctuationTyposChecked = document.getElementById('punctuation-typos').checked;

    if (formattingChecked && punctuationTyposChecked) {
        presentationScore += 5;
    } else if (formattingChecked || punctuationTyposChecked) {
        presentationScore += 3;
    }
    
    let challengesDiscussionScore = 0;
    
    let validChallengesChecked = document.getElementById('valid-challenges').checked;
    let overcomeChallengesChecked = document.getElementById('overcome-challenges').checked;
    let logicalDiscussionChecked = document.getElementById('logical-discussion').checked;

    if (validChallengesChecked && overcomeChallengesChecked && logicalDiscussionChecked) {
        challengesDiscussionScore = 20;
    } else if (validChallengesChecked && overcomeChallengesChecked) {
        challengesDiscussionScore = 15;
    } else if ((validChallengesChecked && logicalDiscussionChecked) || (overcomeChallengesChecked && logicalDiscussionChecked)) {
        challengesDiscussionScore = 18;
    } else if (validChallengesChecked) {
        challengesDiscussionScore = 10;
    }

    
    document.getElementById('total-score').innerText = 
        "Total Score for Overall Description: " + overallDescriptionScore +
        "\nTotal Score for Code Review: " + codeReviewScore +
        "\nTotal Score for Presentation: " + presentationScore +
        "\nTotal Score for Challenges & Discussion: " + challengesDiscussionScore;


    let comments = [];

    // Define the addCommentIfUnchecked function within the scope of calculateScore
    function addCommentIfUnchecked(checkboxId, checkboxName) {
        if (!document.getElementById(checkboxId).checked) {
            comments.push(checkboxName);
        }
    }

    // Check each section's criteria and add comments if unchecked
    addCommentIfUnchecked('intro', "Introduction");
    addCommentIfUnchecked('comparisons', "Comparisons, Swaps & Run Time");
    addCommentIfUnchecked('justification', "Justification for Choosing Final Sorting Algorithms");
    addCommentIfUnchecked('challenges-en', "Challenges Encountered");
    addCommentIfUnchecked('method-by-method', "Method by Method Implementation");
    addCommentIfUnchecked('conclusion', "Conclusion");

    // For the Code Review Section
    addCommentIfUnchecked('proper-impl', "Proper Implementation");
    addCommentIfUnchecked('proper-doc', "Proper Documentation");
    addCommentIfUnchecked('readability', "Readability");
    addCommentIfUnchecked('code-as-in', "Code File as Instructed");

    // For the presentation section
    addCommentIfUnchecked('cover-page', "Cover Page");
    addCommentIfUnchecked('formatting', "Correct Formatting");
    addCommentIfUnchecked('punctuation-typos', "No Punctuation & Typos");
    addCommentIfUnchecked('graphs-figures', "Graphs/Figures/Tables to Present the Findings");

    // For the Challenges and Discussion Section
    addCommentIfUnchecked('valid-challenges', "Identified Valid Challenges");
    addCommentIfUnchecked('overcome-challenges', "Successfully Overcame the Challenges");
    addCommentIfUnchecked('logical-discussion', "Logical and Solid Discussion");

    // Display the comments or indicate that there are none
    let commentsDisplay = document.getElementById('comments');
    if (comments.length > 0) {
        let commentStr = "The following parts are missing, not clearly discussed or not comprehensive:<br>" + comments.join("<br>");
        commentsDisplay.innerHTML = commentStr;
    } else {
        commentsDisplay.innerHTML = "All criteria have been met.";
    }
}

function resetForm() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Optionally, you can also reset the display for the total score.
    document.getElementById('total-score').innerText = "";
    document.getElementById('comments').innerText = "";
}
