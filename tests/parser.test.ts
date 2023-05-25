import Parser from '../src/Parser'
import HashData from '../src/HashData'


describe('The parser', () => {

    const results = {
        "js": <HashData[]>[],
        "python": <HashData[]>[],
        "cpp": <HashData[]>[],
        "cs": <HashData[]>[],
        "java": <HashData[]>[]
    }

    beforeAll(async () => {
        results["js"] = (await Parser.ParseFiles({ files: [ 'tests/to_parse/a.js' ] })).result
        results["python"] = (await Parser.ParseFiles({ files: [ 'tests/to_parse/a.py' ] })).result
        results["cpp"] = (await Parser.ParseFiles({ files: [ 'tests/to_parse/a.cpp' ] })).result
        results["cs"] = (await Parser.ParseFiles({ files: [ 'tests/to_parse/a.cs' ] })).result
        results["java"] = (await Parser.ParseFiles({ files: [ 'tests/to_parse/a.java' ] })).result
    })

    describe("extracts correct function hashes from", () => {
        test('a javascript file', async () => {
            const resultMap = {
                "main": {
                    Hash: "4e9ae211289aa2952bc0095b809e5811"
                },
                "test": {
                    Hash: "87c0b95dd6809eb25d88182619a67cc3" 
                },
                "multiply": { 
                    Hash: "74575f74059e69eda6903e280881dd0e"
                }
            }
    
            results["js"].forEach((r: HashData) => {
                expect(r.Hash).toBe(resultMap[r.FunctionName as keyof typeof resultMap].Hash)
            })
        })

        test('a python file', () => {
            const resultMap = {
                "main": {
                    Hash: "e98a29cebb7e0c784e380e773420d3e5"
                },
                "test": {
                    Hash: "2265ae19af53210fff624a55552e2754" 
                },
                "multiply": { 
                    Hash: "b530d6067cdedb1a971647bccefb68df"
                }
            }
            results["python"].forEach((r: HashData) => {
                expect(r.Hash).toBe(resultMap[r.FunctionName as keyof typeof resultMap].Hash)
            })
        })

        test('a cpp file', () => {
            const resultMap = {
                "main": {
                    Hash: "2fb63ed9e80d5b0b592d8ed77360e034"
                },
                "test": {
                    Hash: "87c0b95dd6809eb25d88182619a67cc3" 
                },
                "multiply": { 
                    Hash: "74575f74059e69eda6903e280881dd0e"
                }
            }
            results["cpp"].forEach((r: HashData) => {
                expect(r.Hash).toBe(resultMap[r.FunctionName as keyof typeof resultMap].Hash)
            })
        })

        test('a csharp file', () => {
            const resultMap = {
                "Main": {
                    Hash: "86d6e84b3e87436fc7a1543885553871"
                },
                "Test": {
                    Hash: "e97f3a052bc552c84481ca54a44c8aa3" 
                },
                "Multiply": { 
                    Hash: "74575f74059e69eda6903e280881dd0e"
                }
            }
            results["cs"].forEach((r: HashData) => {
                expect(r.Hash).toBe(resultMap[r.FunctionName as keyof typeof resultMap].Hash)
            })
        })

        test('a java file', () => {
            const resultMap = {
                "Main": {
                    Hash: "ba6ede36f60c0dbeda878c7e859fa0b2"
                },
                "Test": {
                    Hash: "45495c06036f13bd1bf7ce95a5fff54e" 
                },
                "Multiply": { 
                    Hash: "74575f74059e69eda6903e280881dd0e"
                }
            }
            results["java"].forEach((r: HashData) => {
                expect(r.Hash).toBe(resultMap[r.FunctionName as keyof typeof resultMap].Hash)
            })
        })
    })
})


