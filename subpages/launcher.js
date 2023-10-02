function home() {
    location.href = "https://projecthive.fr.to"
}

function open() {
    //Creates new ABC
    var page = new ABC({
        "type": "blank", //Blank, blob, or overwrite
        "url": "https://example.com" //Any url
    })
    //Set the type
    page.setType("blank")
    //Set the url
    page.setUrl("https://example.com")
    //Get iframe code
    console.log(page.getCode())
    //Open page
    page.open()
}
