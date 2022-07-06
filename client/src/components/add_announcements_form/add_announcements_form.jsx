import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
function AddAnnouncementsForm() {
    const announcements_title_uz = useRef()
    const announcements_title_ru = useRef()
    const announcements_title_en = useRef()
    const announcements_body_uz = useRef()
    const announcements_body_ru = useRef()
    const announcements_body_en = useRef()
    const announcements_img = useRef()
    const announcements_date = useRef()
    return (
        <>
            <div class="content announcements_list2">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <h4>Yangi E`lon qo'shish</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title">Yangi E`lon qo'shish</h4>
                                    <form autocomplete="off" onSubmit={(e) => {
                                        e.preventDefault()
                                        fetch('http://tcti.uz/api/announcements/add', {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(
                                                {
                                                    img: announcements_img.current.value,
                                                    title_uz: announcements_title_uz.current.value,
                                                    body_uz: announcements_body_uz.current.getContent(),
                                                    title_ru: announcements_title_ru.current.value,
                                                    body_ru: announcements_body_ru.current.getContent(),
                                                    title_en: announcements_title_en.current.value,
                                                    body_en: announcements_body_en.current.getContent(),
                                                    date: announcements_date.current.value
                                                }
                                            )
                                        }).then(function (res) { return res.json(); })
                                            .then(function (data) { console.log(data); })
                                        window.location = '/admin/announcement'
                                    }}>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">E`lon nomi o'zbek tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_title_uz} class="form-control input_elon_news_name_uz" type="text" name="name" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">E`lon nomi rus tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_title_ru} class="form-control input_elon_news_name_ru" type="text" name="name" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">E`lon nomi ingliz tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_title_en} class="form-control input_elon_news_name_en" type="text" name="name" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">To'liq matni o'zbek tilida</label>
                                            <div class="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => announcements_body_uz.current = editor}

                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image link code'
                                                        ],
                                                        toolbar: 'code | undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link | code',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">To'liq matni rus tilida</label>
                                            <div class="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => announcements_body_ru.current = editor}

                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image link code'
                                                        ],
                                                        toolbar: 'code | undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link | code',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">To'liq matni ingliz tilida</label>
                                            <div class="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => announcements_body_en.current = editor}

                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image code'
                                                        ],
                                                        toolbar: ' code | undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link | code',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">E`lon surati</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_img} class="form-control Input_elon_news_image" type="text" name="image" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">E`lon sanasi</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_date} class="form-control Input_elon_news_date" type="text" name="image" />
                                            </div>
                                        </div>

                                        <div>
                                            <a href="/api/news/all" class="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                            <button type="submit" class="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddAnnouncementsForm;
