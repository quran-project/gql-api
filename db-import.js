const fs = require('fs')

const dir = fs.readdirSync(__dirname + '/database')

let npmScripts = ''

dir.forEach(file => {
    if (file.split('.')[1] === 'bson') {
        let name = file.split('.')[0]

        npmScripts += `npm run import-${name} && `

        console.log(
            `"import-${name}":"mongorestore -d quran -c ${name} database/${file}",`
        )
    }
})

console.log(npmScripts)
