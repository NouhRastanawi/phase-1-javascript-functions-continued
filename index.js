function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(str = "*"){
    return function(strInner='special'){
        return `You are ${str}${strInner}${str}!` 
    }
}
