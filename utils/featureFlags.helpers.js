function userResearch20191125() {
    if(typeof process.env.FLAG_USER_RESEARCH_20191125 !== "undefined" ) {
        if(process.env.FLAG_USER_RESEARCH_20191125 !== "false") {
            return true
        }
    }
    return false
}


const featureFlags = {
    USER_RESEARCH_20191125: userResearch20191125(), // Default: false
}

module.exports = featureFlags


console.log("----------------------")
console.log("Feature Flags:")
console.log(featureFlags)
console.log("----------------------")