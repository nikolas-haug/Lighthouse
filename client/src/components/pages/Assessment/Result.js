export default {
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
        // console.log(score)
        let result={};
            if( score >= 20){
                return result = {
                    score: score,
                    PD: 'Major Depression, servere',
                    TR: 'Antidepressant or psychotherapy (especially if not improved on monotherapy)'
                }
                // console.log(result)
            }
            if( score >= 15 && score <= 19){
                return result = {
                    score: score,
                    PD: 'Major Depression, moderately servere',
                    TR: 'Antidepressant or psychotherapy'
                }
                // console.log(result)
            }
            if( score >= 10 && score <= 14){
                return result = {
                    score: score,
                    PD: 'Minor Depression++, Dysthymia*,  Major Depression, mild',
                    TR: 'Support, watchful waiting, Antidepressant or psychotherapy'
                }
                // console.log(result)
            }
            if( score >= 5 && score <= 9){
                return result = {
                    score: score,
                    PD: 'Minimum Symptoms*',
                    TR: 'Support, educate to call if worse, return in one month'
                }
                // console.log(result)
            }
            if( score < 5){
                return result = {
                    score: score,
                    PD: 'No Symptoms',
                    TR: 'No Treatment Recommended'
                }
                // console.log(result)
            }
    },




    performAnalysis: (dataArr) => {
        let queTen = dataArr[9];
        //Q1 & Q2 have to be at least 2
        if (dataArr[0] >= 2 && dataArr[1] >= 2) {
            //Q9 has to be at least 1
            if (dataArr[8] >= 1) { //This line will be merged with 54 after testing
                //declear a variable to hold the total from 1 to 9 
                let total = 0;
                let queTracker = 0;
                //loop through the responses
                for (let i = 0; i < dataArr.length; i++) {
                    //If a response is greater than 2 or 3
                    if (dataArr[i] > 1) {
                        //add the # questions that are at least 2
                        queTracker++;
                        total = total + dataArr[i];
                        if (queTracker >= 5 && queTen > 1) {
                            console.log(queTracker);
                            console.log(total);
                            console.log('symptom counts. The depression analysis shows that you need treatment.');
                            return total;
                        }
                    }
                }
                console.log('symtom does not count');
                return total;
            }
            console.log("Q9 not qualified")
            return;
        }
        console.log('Q1 & Q2 not qualified')
        return;
    }
}