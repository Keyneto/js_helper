class Validator {
    string() {
        return new StringSchema();
    }

    array() {
        return new ArraySchema();
    }
}

class StringSchema {
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

class ArraySchema {
    constructor() {
        this.checks = [(value) => Array.isArray(value)];
    }

    containsNumber() {
        this.checks.push((value) => value.every((item) => typeof item === 'number' && item % 1 === 0));
        return this;
    }

    isValid(value) {
        return this.checks.every((check) => check(value));
    }

    custom(condition) {
        this.checks.push((value) => value.every(condition));
        return this;
    }
}