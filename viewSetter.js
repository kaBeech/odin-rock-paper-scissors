const styleSet = document.querySelector('#style');
const resultsLeftSet = document.querySelector('#resultsLeft');
const resultsRightSet = document.querySelector('#resultsRight');
const resultsMobileSet = document.querySelector('#resultsMobile');

if (window.outerWidth < window.outerHeight) {
    styleSet.setAttribute("href", "./styleMobile.css");
    while (resultsLeftSet.hasChildNodes()) {
        resultsLeftSet.removeChild(resultsLeftSet.firstChild);
    }
    while (resultsRightSet.hasChildNodes()) {
        resultsRightSet.removeChild(resultsRightSet.firstChild);
    }
    const newMatchResult = document.createElement('h2');
    newMatchResult.classList.add('matchResult');
    resultsMobileSet.appendChild(newMatchResult);
    const newMatchDetails = document.createElement('h2');
    newMatchDetails.classList.add('matchDetails');
    resultsMobileSet.appendChild(newMatchDetails);
}