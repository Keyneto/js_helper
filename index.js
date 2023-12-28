class Validator {
    string() {
        return new StringValidator();
    }
}

class StringValidator {
    constructor() {
        this.checks = [(value) => typeof value === 'string'];
    }

    containsNumber() {
        this.checks.push((value) => /[0-9]/.test(value));
        return this;
    }

    isValid(value) {
        return this.checks.every(check => check(value));
    }
}