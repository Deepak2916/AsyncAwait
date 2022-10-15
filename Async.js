console.log('person1:showsticket');
console.log('person2:shows ticket');
const preMovie= async()=>{
const promiseWife=new Promise((resolve, reject) => {
     setTimeout(()=> resolve('ticket'),3000)
})
const getPopcorn=new Promise((resolve, reject) =>resolve(`popcorn`))

const addButter=new Promise((resolve, reject) =>resolve('butter'))
const getColdDrinks=new Promise((resolve, reject) =>resolve('cool drinks'))

let ticket=await promiseWife;

console.log('wife:i have the tics')
console.log('husband: we should go in')
console.log('wife:no i am hungry')

let popcorn=await getPopcorn;

console.log('husband: I got some popcorn')
console.log('husband:we should go in')
console.log('wife: I need butter on my popcorn')

let butter = await addButter;
console.log(`husband: i got some ${butter}. enything else?`);
console.log('wife: I want cool drink')

let coolDrink=await getColdDrinks;
console.log(`husband: I got ${coolDrink}`)
console.log('wife: ok, we should go in')

return ticket
}
preMovie().then((m)=>console.log(`person3: shows ${m}`))

console.log('person4:shows ticket');
console.log('person5:shows ticket');
