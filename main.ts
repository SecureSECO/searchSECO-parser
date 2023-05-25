import Parser from './src/Parser'
import * as readline from 'readline'

(async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question("Please enter a file or path to parse: ", async (input: string) => {
        console.log("Parsing...")
        const { result } = await Parser.ParseFiles( input.includes('.') ? { files: [ input ] } : { path: input })
        console.log("Parsing complete! \n Extracted data:")
        console.log(result)
    })
})()