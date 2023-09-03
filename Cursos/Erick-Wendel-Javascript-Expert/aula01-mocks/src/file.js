class File {
    static async csvToJson(filePath) {
        return 'hello!'
    }
}

(async () => {
    const result = File.csvToJson('./../mocks/threeItems-valid.csv')
    console.log('result')
})()