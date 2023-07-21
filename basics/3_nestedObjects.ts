
type FamilyBlueprint = {
    wife: string,
    marriedSince: string,
    children: {
        son: string,
        daughter: string
    }
}


const family: FamilyBlueprint = {
    wife: "Chitra",
    marriedSince: "5 years",
    children: {
        son: "bud",
        daughter: "budi"
    }
}

function familyHistory(familyBlueprint: FamilyBlueprint): string{

    return familyBlueprint.children.son + " " 
        + familyBlueprint.children.daughter + " with " 
        + familyBlueprint.wife
}

let value = familyHistory(family)
console.log(value)

