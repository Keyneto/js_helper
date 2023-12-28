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
} /// весь класс есть в index.js

export default StringSchema;