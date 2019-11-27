function flag(env) { 
    if(typeof env !== "undefined" ) {
        if(env !== "false") {
            return true
        }
    }
    return false
}


const featureFlags = {
    USER_RESEARCH_20191125: flag(process.env.FLAG_USER_RESEARCH_20191125), // Default: false
    COOKIE_STORE_20191126: flag(process.env.COOKIE_STORE_20191126), // Default: false
}

module.exports = featureFlags


console.log("----------------------")
console.log("Feature Flags:")
console.log(featureFlags)
console.log("----------------------")