import { useRef, useState } from "react";


function Upload_COMPONENT() {
    const imgRef = useRef()
    const vidRef = useRef()
    const fileRef = useRef()

    const [file, setFile] = useState()
    return (
        <>
            <div class="d-flex upload_wrapper">
                <div class="m-5">
                    <form enctype="multipart/form-data">
                        <div class="download">
                            <p>Fayl yuklash</p>
                        </div>

                        <div class="files">`
                            <a >
                                Fayllar
                            </a>
                        </div>

                        <input type="file" class="file_input_download" ref={fileRef} />

                        <div class="max_size">
                            <p>Max:100mb</p>
                        </div>

                        <div class="upload_button_2">

                        </div>

                        <div class="upload_button_3">
                            <button class="upload_button_file" onClick={(e) => {
                                e.preventDefault()
                                const formData = new FormData()
                                formData.append('name', fileRef.current.files[0])
                                var requestOptions = {
                                    method: 'POST',
                                    headers: {
                                        "Access-Control-Allow-Origin": "*"
                                    },
                                    body: formData,
                                    redirect: 'follow'
                                };
                                fetch("http://tcti.uz/api/upload/add", requestOptions)
                                    .then(response => response.json())
                                    .then(result => {
                                        console.log(result);
                                        alert("Muvafaqiyatli saqlandi!")
                                    })
                                    .catch(error => console.log('error', error));
                            }}>
                                <a >
                                    Yuklash
                                </a>
                            </button>

                            <div>

                            </div>
                        </div>
                    </form>
                </div>
                <div class="m-5">


                </div>
                <div class="m-5">

                </div>


            </div>


            {/* <div class="loader">
    <img src="/img/loader.svg" alt=""/>
</div> */}
        </>
    );
}

export default Upload_COMPONENT;
