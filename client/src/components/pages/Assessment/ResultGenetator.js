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
                    PD: 'Major Depression (severe)',
                    TR: 'You should definitely seek help from a clinician. For the level of severity indicated by your responses, you should consider enlisting in regular counseling as well as an antidepressant regimen.'
                }
            }
            if( score >= 15 && score <= 19){
                return result = {
                    score: score,
                    PD: 'Major Depression (moderately severe)',
                    TR: 'While you might consider anti-depressants, you might benefit from regular psychotherapy alone. In any case, you should get in touch with a clinician to talk about your symptoms.'
                }
            }
            if( score >= 10 && score <= 14){
                return result = {
                    score: score,
                    PD: 'Minor Depression',
                    TR: 'It sounds like you might just be in a bit of a funk. Keep track of how you are feeling in our journaling app. If your do not improve within a month, consider a lifestyle change or seeking counseling.'
                }
            }
            if( score >= 5 && score <= 9){
                return result = {
                    score: score,
                    PD: 'Minimal Symptoms of Depression',
                    TR: 'It sounds like the shades of blue that you are experiencing are probably part of a robust and healthy emotional life. Start journaling to probe the contours of your day-to-day emotional life. Post your entries to our forums - sometimes conversation is the best medicine!'
                }
            }
            if( score < 5){
                return result = {
                    score: score,
                    PD: 'No Symptoms',
                    TR: 'Wow! You sound like you are really enjoying life. Consider writing a journal entry to reflect on how you have gotten to this zen place. Maybe even share it to the forums - you may just inspire someone!'
                }
            }
    },
}