const data = document.querySelector('#data');
const qr = document.querySelector('#qr');

data.onchange = e => {
        qr.innerHTML= '';
        const href = data.value;
        // size of the image
        const size = 330;
        const sizeh = 269;

        new QRCode(qr, {
            text: href,
            width: size,
            height: sizeh,

            colorDark: '#040404',
            colorLight: '#e9eef4'
        })
}
