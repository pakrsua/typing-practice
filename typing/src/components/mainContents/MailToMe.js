import { useState } from "react";
import emailjs from 'emailjs-com';

function MailToMe() {
    const [formData, setFormData] = useState({
        name : 'sample',
        email: 'tndk4997@naver.com',
        message : 'sample'
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData
        })
    }
    const sendEmail = (e) =>{
        e.preventDefault();

        const tmeplateParams = {
            name: "sample",
            email : "tndk4997@naver.com",
            message : "sample"
        }
        emailjs.send("service_0m0pxcp","template_6hogvdt",tmeplateParams,"yT4NqXc--HGx2KRzE")
        .then((response) => {
            console.log("success",response.status, response.text)
            setFormData({name:'',email:'',message:''})
        },(error) => {
            console.log('FAILED',error)
        })
    }

    return ( 
        <>
            <div className="mail-button" onClick={sendEmail}>
                <div>의견</div>
                <div>보내기</div>
            </div>
        </>
     );
}

export default MailToMe;