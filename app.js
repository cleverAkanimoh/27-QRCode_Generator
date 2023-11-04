const data = document.querySelector('#data');
const qr = document.querySelector('#qr');

data.onchange = e => {
        qr.innerHTML= '';
        const text = data.value;
        // size of the image
        const width = 330;
        const height = 269;

        new QRCode(qr, {
            text,
            width,
            height,
            colorDark: '#040404',
            colorLight: '#e9eef4'
        })
}
