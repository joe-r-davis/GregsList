function PropertyController(){
    //Private
    var propertyService = new PropertyService()


    function draw(){
        var propertyArr = propertyService.getProperties()
        var template = ''
        for (let i = 0; i < propertyArr.length; i++) {
            const property = propertyArr[i];
            template += `
            <div class="col-sm-3">
                <img src="${property.img}">
                <p>${property.category}</p>
                <p>${property.address}</p>
                <p>${property.price}</p>
            </div>
            
            `
        }
        document.getElementById('board-properties').innerHTML = template
    }

    this.addProperty = function addProperty(event){
        event.preventDefault();
        debugger
        var form = event.target
        // propObj.category, propObj.bedrooms, propObj.lister, propObj.address, propObj.price, propObj.img
        var propObj = {
            category: form.category.value,
            bedrooms: form.bedrooms.value,
            lister: form.lister.value,
            address: form.address.value,
            img: form.img.value
        }
        propertyService.addProperty(propObj)
        document.getElementById('property-form').reset()
        draw()
    }





    console.log("Controller is up and running")

    draw()




}