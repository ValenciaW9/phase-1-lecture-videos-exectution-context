Class Cat{
	constructor(name,breed, age){
		this.name = name
		this.breed = breed
		this.age = age
		this.favFood = []
	
		 }
        introduce(){
        	return 'Hi my name is $(this,name)'
         }
        addFood = (food) => {
        	this.favFood.push(food)
         }

         loopThroughFoods(){
         	this.favfood.forEach(function(food){
         		console.log(this)
         		this.favfood.forEach(this.logFood)
         	     }
          }
            logFood() => (food){
           	     console.log(this)
                 console.log('Hi my name is ${this.name} and I love to eat ${food}')
          }
     }
    let dutchess = new Cat('dutchess', 'domestic korat' , 17)
    let jason    = new Cat('Jason', 'domestic short hair', 2)
    dutchess.addfood('fish')
    dutchess.addfood('chicken')
    dutchess.addfood('house plants')
    dutchess.addfood('peppermint')