import { useState } from "react";
import emailjs from 'emailjs-com';

function MailToMe() {
    const [openMailForm, setOpenMailForm] = useState(false)
    const [formData, setFormData] = useState({
        name : '박수아',
        email: 'tndk4997@naver.com',
        message : 'sample'
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(formData)
    }
    const sendEmail = (e) =>{

        emailjs.send("service_0m0pxcp","template_6hogvdt",formData,'yT4NqXc--HGx2KRzE')
        .then((response) => {
            console.log("success",response.status, response.text)
            setFormData()
        },(error) => {
            console.log('FAILED',error)
        })
    }
    const handleOpenForm = () => {
        setOpenMailForm(!openMailForm)
    }

    return ( 
        <>
            <div className="mail-button" onClick={handleOpenForm}>
                <div>의견</div>
                <div>보내기</div>
            </div>
            <div className={openMailForm ? "mail-form-backgrond" : "mail-form-background-close"} onClick={handleOpenForm}>
            </div>
            <div className={openMailForm ? "mail-form":"mail-form-close"}>
                <div>
                    <h3>소중한 의견을 보내주세요</h3>
                    <form>
                        <div>
                            <input type="text" placeholder="이름" name="name" onChange={handleChange}></input>
                        </div>
                        <div>
                            <input type="textarea" placeholder="내용" name="message" onChange={handleChange}></input>
                        </div>
                        <button type="submit" onClick={sendEmail}>보내기</button>
                    </form>
                    
                </div>
            </div>
        </>
     );
}

export default MailToMe;