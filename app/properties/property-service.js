function PropertyService(){

    //Private
    var properties = []
    var categories = ['rooms and shares', 'apts/housing for rent', 'real estate- by broker', 'real estate- by owner', 'office and commercial']

    function Property(category, bedrooms, lister, address, price, img) {
        this.category = categories[category]
        this.bedrooms = bedrooms
        this.lister = lister
        this.address = address
        this.price = price
        this.img = img
    }



    //Public
    this.getProperties = function getProperties(){
        return JSON.parse(JSON.stringify(properties))
    }

    this.addProperty = function addProperty(propObj) {
        var newProperty = new Property(propObj.category, propObj.bedrooms, propObj.lister, propObj.address, propObj.price, propObj.img)
        properties.push(newProperty)
    }

    //deleteProperty?

    console.log("Service is up and runniung")
    properties.push(new Property(1, 2, 'Property Mgmt Inc.', '2800 Chinden Ave.', 750, 'https://images.craigslist.org/00404_cEe0Rl61g39_300x300.jpg'))
    properties.push(new Property(0, 1, 'Ben Proctor', '1201 Airline Ave.', 450, 'https://images.craigslist.org/00y0y_alO4avubodD_300x300.jpg'))
    properties.push(new Property(3, 3, 'FISBO - By Owner LLC', '4954 E. Dreamlane', 275000, 'https://images.craigslist.org/00r0r_8dae9ROeww7_300x300.jpg'))
    properties.push(new Property(4, 5, 'Dental Expressions', '1309 N. 9th', 575000, 'https://images.craigslist.org/00Q0Q_8XrWU9TvqsN_300x300.jpg'))


}