import c from"repl";import{transform as l}from"@esbuild-kit/core-utils";import{v as m}from"./package-5a2461d7.js";console.log(`Welcome to tsx v${m} (Node.js ${process.version}).
Type ".help" for more information.`);const e=c.start(),{eval:p}=e,i=async function(r,t,o,s){const n=await l(r,o,{loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}}}).catch(a=>(console.log(a.message),{code:`
`}));return p.call(this,n.code,t,o,s)};e.eval=i;
