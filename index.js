import { compile, serialize, stringify } from "stylis";

const css = `
div {
    .hoge {
        color: red;
    }
    > .hoge {
        color: blue;
    }
    & .hoge {
        color: blue;
    }
    &.hoge{
        color: blue;
    }
}
`;

console.log(serialize(compile(css), stringify));
