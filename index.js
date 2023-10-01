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
        "url": atob("aHR0cHM6Ly9lZHVjYXRpb24uZnIudG8=")
    })
    page.setType("blank")
    page.setUrl(atob("aHR0cDovL3Byb2plY3RoaXZlLmZyLnRvLw=="))
    console.log(page.getCode())
    page.open()
    window.close
}
