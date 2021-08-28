const data_detail = {
    0: {img: "image/bag.jpg", price: 499, data: "Fancybag กระเป๋าเป้สะพายแฟชั่น PASTEL<br>ขนาด:  30X40X13 CM<br>พกพาง่าย น้ำหนักเบา<br>สามารถใส่ของได้จิปาถะ"},
    1: {img: "image/shoe.jpg", price: 207, data: "Gerry gang รองเท้าผ้าใบ แฟชั่น สีขาวสุดฮิต เบอร์ 33-40<br>แบรนด์: Gerry Gang<br>ประเภทของการรับประกัน: ไม่มีการประกัน<br>นุ่ม ทนทาน ทรงสวยล้ำ ทันสมัย<br>เหมาะสำหรับใส่เล่นพละ ใส่เที่ยวทั่วไป"},
    2: {img: "image/clothes.jpg", price: 350, data: "เสื้อไหมพรมกันหนาว<br>ผ้าไหมพรม อุ่น<br>ขนาด ฟรีไซด์<br>น้ำหนัก: 0.52 กก."},
    3: {img: "image/yoka.jpg", price: 490, data: "ชุดออกกำลังกาย ชุดวิ่ง ชุดกีฬา ชุดโยคะ สปอร์ตบรา 2ชิ้น<br>ผ้าหนา แต่ยงคงระบายอากาศได้ดี<br>สปอร์ตบรากระชับแบบ high impact มีฟองน้ำถอดซักได้<br>กางเกงผ้านิ่มใส่สบาย กระชับ ยืดหยุ่นสูง<br>เหมาะกับกิจกรรมทุกรูปแบบ ออกกำลังกาย วิ่ง กีฬา โยคะ"},
    4: {img: "image/golf.jpg", price: 8900, data: "ไม้กอล์ฟระดับพรีเมี่ยม มีการออกแบบได้สวยงาม<br>มีน้ำหนักเบา<br>ทุกไม้ผลิตขึ้นมาด้วยความพิถีพิถัน สวยงาม<br>น้ำหนักสวิงเวทของทุกไม้เท่ากัน<br>ก้านกราไฟต์ FLEX - R ดีดนุ่มมากได้ระยะ<br>เพิ่มสมดุลและน้ำหนักหัว"},
    5: {img: "image/hat.jpg", price: 65, data: "หมวก smile<br>หมวกทรงบักเก็ต<br>สามารถใส่ได้ทั้ง 2 ด้าน<br>ขนาด: 58cm<br>น้ำหนัก: 80g<br>วัสดุ: ผ้า"},
}

function show_detail(alt, n) {
    const title = document.getElementById("ModalLabel")
    const img = document.getElementById("img-body")
    const body = document.getElementById("detail_body")
    const price = document.getElementById("price_body")

    title.innerHTML = alt
    img.src = data_detail[n].img
    price.innerText = `${data_detail[n].price} บาท`
    body.innerHTML = data_detail[n].data
    
}

function get_url(event) {
    const form = event.target
    const user = document.getElementById("user").value.toLowerCase()
    if (user === "admin") return form.action = "selectmode.html"
    form.action = "showdata.html"

}

function addShop() {
    const addShop = document.getElementById("addShop")
    let currentShop = parseInt(addShop.innerHTML) || 0
    currentShop += 1
    addShop.innerHTML = currentShop

    const title = document.getElementById("ModalLabel")
    const price_body = document.getElementById("price_body")
    const price = price_body.innerHTML.split(' ')[0]

    const img_body = document.getElementById("img-body").attributes.src.value
    const detail_addShop = document.getElementById("detail_addShop")

    const id = new Date().getTime()

    if (detail_addShop.innerHTML === "ไม่มีสินค้า") detail_addShop.innerHTML = ''
    detail_addShop.innerHTML += `<span id="${id}" name="item"><img width="48px" src="${img_body}"> ${title.innerHTML} <span style="color: #ff0000">${price}</span> บาท <a id="btn_delete" onclick="btn_delete('${id}', ${price})" href="#" style="color: #ff0000">ลบ</a><br></span>`
    

    const sumPrice = document.getElementById("sumPrice")
    const currentPrice = document.getElementById("currentPrice")
    if (!currentPrice) return sumPrice.innerHTML = `รวม <span id="currentPrice" style="color: #ff0000">${price}</span> บาท`

    let cPrice = parseFloat(currentPrice.innerHTML)
    cPrice += parseFloat(price)
    sumPrice.innerHTML = `รวม <span id="currentPrice" style="color: #ff0000">${cPrice}</span> บาท`
    
}


function btn_delete(id, price) {
    const addShop = document.getElementById("addShop")
    let current_addShop = addShop.innerHTML
    current_addShop -= 1

    const detail_addShop = document.getElementById("detail_addShop")
    if (current_addShop === 0) {
        detail_addShop.innerHTML = "ไม่มีสินค้า"
        addShop.innerHTML = ''
    } else {
        addShop.innerHTML = current_addShop
        document.getElementById(id).remove()
    }
    
    const currentPrice = document.getElementById("currentPrice")
    let current_Price = parseFloat(currentPrice.innerHTML)
    current_Price -= parseFloat(price)
    if (current_Price === 0) return document.getElementById("sumPrice").innerHTML = ''
    currentPrice.innerHTML = current_Price

}


