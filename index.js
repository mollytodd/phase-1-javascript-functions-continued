function saturdayFun(activity = "roller-skate!") {
    return `This Saturday, I want to ${activity}`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));


const mondayWork = function (activity = "go to the office.") {
    return `This Monday, I will ${activity}`
}

mondayWork()
mondayWork("work from home.")

function wrapAdjective(flair = "*") {
    return function charQuality(personality = "special"){
    return `You are ${flair}${personality}${flair}!`}
    }
  
    const exictingPrompt = wrapAdjective ("!!!")
    const result = excitingPrompt("a dedicated programmer")

console.log(result);
  
      
    //