"use strict";var c=require("repl"),n=require("@esbuild-kit/core-utils"),i=require("./package-eab616d0.cjs");function u(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var p=u(c);console.log(`Welcome to tsx v${i.version} (Node.js ${process.version}).
Type ".help" for more information.`);const t=p.default.start(),{eval:d}=t,f=async function(e,o,r,a){const s=await n.transform(e,r,{loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}}}).catch(l=>(console.log(l.message),{code:`
`}));return d.call(this,s.code,o,r,a)};t.eval=f;
