export default {

    performAnalysis: (dataArr) => {
        let queTen = dataArr[9];
        //Q1 & Q2 have to be at least 2 & Q9 has to be at least 1
        if (dataArr[0] >= 2 && dataArr[1] >= 2 && dataArr[8] >= 1) {
                let queTracker = 0;
                //loop through the responses
                for (let i = 0; i < dataArr.length; i++) {
                    //If a response is greater than 2 or 3
                    if (dataArr[i] > 1) {
                        //add the # questions that are at least 2
                        queTracker++;
                        if (queTracker >= 5 && queTen > 1) {
                            return 'needs treatment';
                        }
                    }
                }
            }
        return 'no treatment needed';
    },


    generateResult: (dataArr) => {
        let severityScore = 0; //Set the initial score to 0
        dataArr.forEach((response) => { //loop through response array
            if (response > 0) { //..and only add you the responses > 0
                severityScore = severityScore + response
            }
        })
        return severityScore;
    },


    getResultInfor: (score) => {
        let result={};
            if( score >= 20){
                return result = {
                    score: score,
                    PD: 'Major Depression, servere',
                    TR: 'Antidepressant or psychotherapy (especially if not improved on monotherapy)'
                }
            }
            if( score >= 15 && score <= 19){
                return result = {
                    score: score,
                    PD: 'Major Depression, moderately servere',
                    TR: 'Antidepressant or psychotherapy'
                }
            }
            if( score >= 10 && score <= 14){
                return result = {
                    score: score,
                    PD: 'Minor Depression++, Dysthymia*,  Major Depression, mild',
                    TR: 'Support, watchful waiting, Antidepressant or psychotherapy'
                }
            }
            if( score >= 5 && score <= 9){
                return result = {
                    score: score,
                    PD: 'Minimum Symptoms*',
                    TR: 'Support, educate to call if worse, return in one month'
                }
            }
            if( score < 5){
                return result = {
                    score: score,
                    PD: 'No Symptoms',
                    TR: 'No Treatment Recommended'
                }
            }
    },
}