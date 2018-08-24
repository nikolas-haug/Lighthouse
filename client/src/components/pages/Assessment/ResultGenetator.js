export default {
    //this method get the sum of the responses greater than zero
    generateResult: (dataArr) => {
        let score = 0; 
        dataArr.forEach((response) => { 
            if (response > 0) {
                score = score + response
            }
        })

        return getResultInfor(score);
        //this function takes the total score and returns the matching result.
        function getResultInfor(score) {
            let result = {};
            switch (true) {
                case score >= 20:
                    result = {
                        date: Date.now(),
                        score: score,
                        PD: 'Major Depression (severe)',
                        TR: 'You should definitely seek help from a clinician. For the level of severity indicated by your responses, you should consider enlisting in regular counseling as well as an antidepressant regimen.',
                        bar: {
                            height: '175px',
                            background: '#f77a7a'
                        }
                    };
                    break;
                case score >= 15 && score <= 19:
                    result = {
                        date: Date.now(),
                        score: score,
                        PD: 'Major Depression (moderately severe)',
                        TR: 'While you might consider anti-depressants, you might benefit from regular psychotherapy alone. In any case, you should get in touch with a clinician to talk about your symptoms.',
                        bar: {
                            height: '150px',
                            background: '#f3b0b0'
                        }
                    };
                    break;
                case score >= 10 && score <= 14:
                    result = {
                        date: Date.now(),
                        score: score,
                        PD: 'Minor Depression',
                        TR: 'It sounds like you might just be in a bit of a funk. Keep track of how you are feeling in our journaling app. If your do not improve within a month, consider a lifestyle change or seeking counseling.',
                        bar: {
                            height: '100px',
                            background: '#f3e2e5'
                        }
                    };
                    break;
                case score >= 5 && score <= 9:
                    result = {
                        date: Date.now(),
                        score: score,
                        PD: 'Minimal Symptoms of Depression',
                        TR: 'It sounds like the shades of blue that you are experiencing are probably part of a robust and healthy emotional life. Start journaling to probe the contours of your score-to-score emotional life. Post your entries to our forums - sometimes conversation is the best medicine!',
                        bar: {
                            height: '75px',
                            background: '#fff0f3'
                        }
                    };
                    break;
                case score < 5:
                    result = {
                        date: Date.now(),
                        score: score,
                        PD: 'No Symptoms',
                        TR: 'Wow! You sound like you are really enjoying life. Consider writing a journal entry to reflect on how you have gotten to this zen place. Maybe even share it to the forums - you may just inspire someone!',
                        bar: {
                            height: '50px',
                            background: '#f1ecec',
                        }
                    };
            }
            return result;
        }
    },
}
