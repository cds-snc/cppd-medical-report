function userResearch20191125() {
    if(typeof process.env.FLAG_USER_RESEARCH_20191125 !== undefined ) {
        if(process.env.FLAG_USER_RESEARCH_20191125 == "false") {
            return false
        }
    }

    return true
}


const featureFlags = {
    USER_RESEARCH_20191125: userResearch20191125()
}

module.exports = featureFlags