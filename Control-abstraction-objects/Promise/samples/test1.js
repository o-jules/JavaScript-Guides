const inner = () => new Promise((resolve, reject) => {
  const i = Math.random()
  if (i > 0.5) {
    reject(i)
  } else {
    resolve(i)
  }
})

const outer = () => new Promise((resolve, reject) => {
  inner().then(
    success => {
      console.log('inner win', success)
      if (success < 0.25) {
        reject(success)
      } else {
        resolve(success)
      }
      return 'success'
    },
    failed => {
      console.log('inner lose', failed)
      resolve(failed)
      return 'failed'
    }
  ).then(i => {
    console.log('inner again', i)
  })
})

outer().then(
  success => {
    console.log('outer success', success)
  },
  failed => {
    console.log('outer failed', failed)
  }
)