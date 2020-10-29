const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (input) => {
    let result = {}
    const words = input.split(' ')
    for(const word of words)
    {
        noWords++
        if(word in result){
            result[word]++
        } else {
            result[word] = 1
        }
    }
    return result
}

// const getFrequency = (input, word) =>
// {
//     let result = {}
//     let noWords = 0
//     const words = input.split(' ')
//     for(const word of words)
//     {
//         noWords++
//         if(word in result){
//             result[word]++
//         } else {
//             result[word] = 1
//         }
//     }
//     return result[word]/noWords
// }

// console.log(getCounts(sampleString))

// console.log(getFrequency(sampleString, 'the'))

const getFrequency = (input, target) =>
{
    let total = 0
    let appearances = 0
    const words = input.split(' ')
    for(const word of words)
    {
        total++
        if(target === word){
          appearances++
        } 
    }
    return appearances/total
}

console.log(getFrequency(sampleString, 'the'))