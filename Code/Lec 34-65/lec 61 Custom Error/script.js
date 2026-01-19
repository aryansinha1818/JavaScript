try {
    //Error with the variable name
    //name;

    //error with message
    // throw new Error("Hello this is error");

    throw new ReferenceError("Hello this is error");
} catch (error) {
    //console.log(error);

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//MDN Reference error