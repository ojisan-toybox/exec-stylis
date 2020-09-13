import { compile, serialize, stringify, tokenize, parse } from "stylis";

const css = `
div {
    .hoge {
        color: red;
    }
    &:hover {
        color: blue;
    }
    :hover {
        color: blue;
    }
}
`;

// const a = compile(css);
// debugger;
// console.log(a);
console.log(serialize(compile(css), stringify));
// console.log(tokenize(css));
// console.log(parse(css));
