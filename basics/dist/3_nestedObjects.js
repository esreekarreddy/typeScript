"use strict";
const family = {
    wife: "Chitra",
    marriedSince: "5 years",
    children: {
        son: "bud",
        daughter: "budi"
    }
};
function familyHistory(familyBlueprint) {
    return familyBlueprint.children.son + " "
        + familyBlueprint.children.daughter + " with "
        + familyBlueprint.wife;
}
let value = familyHistory(family);
console.log(value);
