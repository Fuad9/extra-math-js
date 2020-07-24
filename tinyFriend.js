function tinyFriend(names) {
    let shortestName = names[0];
    for (var i = 0; i < names.length; i++) {
        if (names[i] === "" || names.length == 0) {
            return ("Empty array or string is not accepted");
        } else if (names[i].length < shortestName.length) {
            shortestName = names[i];
        }
    }
    return shortestName;
}
console.log(tinyFriend([]));