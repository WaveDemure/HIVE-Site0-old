function openGame() {
    var page = new ABC({
        "type": "blank",
        "url": atob("aHR0cHM6Ly9lZHVjYXRpb24uZnIudG8=")
    })
    page.setType("blank")
    page.setUrl(atob("aHR0cHM6Ly9lZHVjYXRpb24uZnIudG8="))
    console.log(page.getCode())
    page.open()
    window.close
}

function openHome() {
    var page = new ABC({
        "type": "blank",
        "url": atob("aHR0cHM6Ly9wcm9qZWN0aGl2ZS5mci50by8=")
    })
    page.setType("blank")
    page.setUrl(atob("aHR0cHM6Ly9wcm9qZWN0aGl2ZS5mci50by8="))
    console.log(page.getCode())
    page.open()
    window.close
}
