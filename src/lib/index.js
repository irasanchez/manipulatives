export const dataTypes = [
    "Boolean",
    "Null",
    "Undefined",
    "Number",
    "BigInt",
    "String",
    "Symbol",
    "Object",
];

export const expressions = {
    easy: [
        { expression: 0, type: Number },
        { expression: "'number'", type: String },
        { expression: "5 + 5", type: Number },
        { expression: "0 + '1'", type: String },
        { expression: "'0' + 1", type: String },
    ],
    medium: [],
    hard: [],
};
