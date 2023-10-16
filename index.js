const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

app.get("/product", (req, res) => {
    res.send("sales app")
})
app.get("/mobile", (req, res) => {
    const mobiledata = [{
            model: "S23 Ultra ",
            color: "black",
            storage: "128GB",
            brand: "Samsung",
            price: 95000,
            img: "https://cdn1.smartprix.com/rx-izLSMVlI0-w1200-h1200/zLSMVlI0.jpg"
        },
        {
            model: "14 pro max",
            color: "white",
            storage: "256GB",
            brand: "I Phone",
            price: 195000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsCaHOH2CQkqkp_i41pMStp3yMDwb_41xpw&usqp=CAU"
        },
        {
            model: "x3 pro",
            color: "gray",
            storage: "256GB",
            brand: "POCO",
            price: 21000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQww0XUp3U0v-c5lMNIdQCCNoI7Trsx6F00ww&usqp=CAU"
        },
        {
            model: "Pixel",
            color: "smokewhite",
            storage: "512GB",
            brand: "Google",
            price: 121000,
            img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/ezgif-4-b9a794e669-sixteen_nine.jpg?size=948:533"
        }
    ]
    res.send(mobiledata)
})
app.listen(4101, () => {
    console.log('API is running on port 4101');

})