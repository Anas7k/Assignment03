for (let i = 1; i <= 100; i++) {
    let output;
    if (i % 3 === 0 && i % 5 === 0) {
        output = "Marco! Polo!";
    } else if (i % 3 === 0) {
        output = "Marco!";
    } else if (i % 5 === 0) {
        output = "Polo!";
    } else {
        output = String(i);
    }
    console.log(output);
}
