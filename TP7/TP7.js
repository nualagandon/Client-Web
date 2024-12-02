const question = {
    "id": 1,
    "parole": "Incroyablement puissantes, rapides et obéissantes les machines sont aussi totalement stupides.",
    "célébrité":"Gérard Berry"
}

const questionComplete = {
    "id": 1,
    "parole": "Incroyablement puissantes, rapides et obéissantes les machines sont aussi totalement stupides.",
    "célébrité": "Gérard Berry",
    "possibilités": ["Tim Berners Lee","Ada Lovelace","Gérard Berry"]
}

const lesQuestions = [
    {
        "id": 1,
        "parole": "Incroyablement puissantes, rapides et obéissantes les machines sont aussi totalement stupides.",
        "célébrité": "Gérard Berry",
        "possibilités": ["Tim Berners Lee","Ada Lovelace","Gérard Berry"]
    },
    {
    "id": 2,
    "parole": "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.",
    "célébrité": "Tim Berners Lee",
    "possibilités": ["Tim Berners Lee","Ada Lovelace","Gérard Berry"]
    },
    {
        "id": 3,
        "parole": "La machine analytique n'a nullement la prétention de créer quelque chose par elle-même.",
        "célébrité": "Ada Lovelace",
        "possibilités": ["Tim Berners Lee","Ada Lovelace","Gérard Berry"]
    }
]


console.log("**********contenu de la variable question");
for (const key in question) {
    console.log(key + ":" + question[key]);
};

console.log("**********contenu de la variable questionComplete");
for (const key in questionComplete) {
    if (key === "possibilités") {
        console.log("*" + key + ":");
        for (const item of questionComplete[key]) {
            console.log("**" + item);
        }
    } else {
        console.log("*" + key + ":" + questionComplete[key]);
    }
}

console.log("**********contenu de la variable lesQuestions");
for (const elem in lesQuestions) {
    for (key in lesQuestions[elem]) {
        if (key === "possibilités") {
            console.log("*" + key + ":");
            for (const item of lesQuestions[elem][key]) {
                console.log("**" + item);
            }
        } else {
            console.log("*" + key + ":" + lesQuestions[elem][key]);
        }
    }
}