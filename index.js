

const sandboxProxies = new WeakMap()

function compileCode (src) {  
  src = `
  with (sandbox) { 
  	${src} 
  }
  `;
  const code = new Function('sandbox', src)

  return function (sandbox) {
    if (!sandboxProxies.has(sandbox)) {
      const sandboxProxy = new Proxy(sandbox, {has, get})
      sandboxProxies.set(sandbox, sandboxProxy)
    }
    return code(sandboxProxies.get(sandbox))
  }
}

function has (target, key) {  
  return true
}

function get (target, key) {  
  if (key === Symbol.unscopables) return undefined
  return target[key]
}

const result = compileCode("return a;")

console.log(result({a: 1000}));

document.getElementById('test').innerHTML=1234589+"qqqqss"

