const fs = require('fs')

const dir = fs.readdirSync(__dirname + '/database')

let npmScripts = ''

dir.forEach(file => {
    if (file.split('.')[1] === 'bson') {
        let name = file.split('.')[0]

        npmScripts += `npm run import-${name} && `

        const importScript = `"import-${name}":"mongorestore -h ds347665.mlab.com:47665 -d quran -u quran -p quran123 database/${file}",`

        console.log(importScript)

        // console.log(
        //     `"import-${name}":"mongorestore -d quran -c ${name} database/${file}",`
        // )
    }
})

console.log(npmScripts)
