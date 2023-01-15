

const form = document.forms["forma"];
const formm = document.getElementById('forma');



const inputArr = Array.from(form);
const validInputArr = [];

inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validInputArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
formm.addEventListener("submit", buttonHandler);

function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
        console.log("val")
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
        el.setAttribute("is-valid", "1");
    } else {
        el.style.border = "2px solid rgb(196, 0, 0)";
        el.setAttribute("is-valid", "0");
    }
}

function ready() // функция потенциально для нескольких файлов, но т.к. валидация для одного - убрал multiple
{
    var inputs = document.querySelectorAll('#file-input');
    Array.prototype.forEach.call(inputs, function(input){
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e){
            console.log(this.files);
            var fileName = '';
            fileName = this.files[0].name;

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;

        });

    });

};



document.addEventListener("DOMContentLoaded", ready)

async function asyncPost() {

    var input = document.querySelector('input[type="file"]');

    var data_value = new FormData();
    data_value.append('file', input.files[0]);


    const email_value = document.getElementById('email').value; //взяли значение почты из формы
    const name_value = document.getElementById('name').value; //взяли значение ФИО из формы

    const pass_value = document.getElementById('pass').value; // Взяли значение пароля из формы

    const second_pass_value = document.getElementById('second-pass').value;


    const admin_value = document.getElementById('admin').checked; //взяли значение(boolean) для категории admin
    const reverse_value = document.getElementById('reverse').checked; //взяли значение(boolean) для категории reverse
    const stegano_value = document.getElementById('stegano').checked; //взяли значение(boolean) для категории stegano
    const ppc_value = document.getElementById('ppc').checked; //взяли значение(boolean) для категории ppc
    const forensic_value = document.getElementById('forensic').checked; //взяли значение(boolean) для категории forensic
    const crypto_value = document.getElementById('crypto').checked; //взяли значение(boolean) для категории crypto
    const web_value = document.getElementById('web').checked; //взяли значение(boolean) для категории web
    const network_value = document.getElementById('network').checked; //взяли значение(boolean) для категории network
    const osint_value = document.getElementById('osint').checked; //взяли значение(boolean) для категории osint

    if (pass_value == second_pass_value){

        if (name_value) {

            const res = await fetch('http://localhost:3000/cyberpolygon/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: {
                    email: email_value,
                    name: name_value,
                    password: pass_value,
                    img: data_value,
                    admin: admin_value,
                    reverse: reverse_value,
                    stegano: stegano_value,
                    ppc: ppc_value,
                    forensic: forensic_value,
                    crypto: crypto_value,
                    web: web_value,
                    network: network_value,
                    osint: osint_value
                }
            });



            const todo = await res.json();
            console.log(todo);
        }
    }
}

function buttonHandler(e){
    const isAllValid = [];
    validInputArr.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    if (isAllValid[0] == "1" && isAllValid[1] == "1" && isAllValid[2] == "1" && isAllValid[3] == "1") {
        asyncPost();
    }
}

