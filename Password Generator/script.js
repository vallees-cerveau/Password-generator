document.addEventListener("DOMContentLoaded", function () {

    const lengthInput = document.getElementById("length");
    const uppercaseInput = document.getElementById("uppercase");
    const lowercaseInput = document.getElementById("lowercase");
    const numbersInput = document.getElementById("numbers");
    const specialInput = document.getElementById("special");
    const generateButton = document.getElementById("generate");
    const resultHeading = document.getElementById("result");
    const copyButton = document.getElementById("copy");

    function generatePassword() {
        const length = lengthInput.value;
        const includeUppercase = uppercaseInput.checked;
        const includeLowercase = lowercaseInput.checked;
        const includeNumbers = numbersInput.checked;
        const includeSpecial = specialInput.checked;

        let characterPool = "";
        if (includeUppercase) characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) characterPool += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) characterPool += "0123456789";
        if (includeSpecial) characterPool += "!@#$%^&*()_-+={}[]|\:;\"'<>,.?/";

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            password += characterPool[randomIndex];
        }

        return password;
    }

    generateButton.addEventListener("click", function () {
        const password = generatePassword();
        resultHeading.textContent = password;
    });

    copyButton.addEventListener("click", function () {
        const password = resultHeading.textContent;
        navigator.clipboard.writeText(password);
    });

});
