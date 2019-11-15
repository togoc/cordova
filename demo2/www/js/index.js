let b1 = document.querySelector('.b1')
let b2 = document.querySelector('.b2')
let img = document.querySelector('img')


document.addEventListener("deviceready", function() {
    console.log("deviceready is done")
    b1.addEventListener("click", takePic, false)
    b2.addEventListener("click", getPic, false)
}, false)

function takePic() {
    navigator.camera.getPicture(success, error, {})

    function success(url) {
        console.log("拍照成功")
        img.src = url
    }

    function error() {
        console.log("拍照失败")
    }
}

function getPic() {

}
