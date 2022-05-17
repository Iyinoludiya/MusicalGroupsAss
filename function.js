let groupNum = 6

function musicalGroups() {
if (groupNum <= 0) {
    console.log("not a group")
} else if (groupNum === 1) {
    console.log("solo")
} else if (groupNum === 2) {
    console.log("duet")
} else if (groupNum === 3) {
    console.log("trio")
} else if (groupNum === 4) {
    console.log("quartet")
} else if (groupNum > 4) {
    console.log("this is a large group")
}
}

musicalGroups()
