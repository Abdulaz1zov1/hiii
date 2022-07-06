import { useRef, useState, useEffect } from 'react'


function AnnouncementsAdmin() {
    const [searchTerm, setSearchTerm] = useState([])
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/announcements/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data)
            });
    }, [])
    return (
        <>
            <div class="row pt-5 announcements_list">
                <div class="col-xl-12">
                    <div class="card ">
                        <div class="card-body">
                            <div class="box">
                                <form name="search" className='search_form'>
                                    <input type="text" class="input" name="txt" onmouseout="document.search.txt.value = ''" onChange={e => {
                                        setSearchTerm(e.target.value)
                                    }} /> <span class="deff">Search</span>
                                </form>
                            </div>
                            <a href="/" class="btn btn-danger btn-sm float-right" >Dashboardga qaytish</a>
                            <a href="/admin/announcement/add" class="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"> E`lon qo'shish</a>

                            <h4 class="mt-0 mb-4 pt-2">Barcha e`lonlar ro'yhati</h4>
                            <div class="table-responsive mt-5">
                                <table class="table table-hover">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">Rasm</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nomi</th>
                                            <th scope="col">Sana</th>
                                            <th scope="col">Matn</th>
                                            <th scope="col">EDIT </th>
                                            <th scope="col">DELETE </th>
                                        </tr>
                                    </thead>
                                    {announcements.reverse().filter((val) => {
                                        if (searchTerm == "") {
                                            return val
                                        } else if (val.title_uz.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).map(item => (
                                        <tbody class="list_item_2">
                                            <td><img src={item.img} class="sizeArticleImage" alt="" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.title_uz}</td>
                                            <td>{item.date}</td>
                                            <td className='list_body'>Content...</td>
                                            <td class=""><a href={`announcements/edit/${item.id}`} class="btn btn-warning button_news_edit bg-success">Edit</a></td>
                                            <td class=""><a class="btn btn-danger button_delete_news bg-danger text-light" onClick={() => {
                                                let answer = prompt("siz rostan o'chirmoqchimisiz? Y/N")
                                                if (answer == "Y") {
                                                    fetch('http://tcti.uz/api/announcements/delete', {
                                                        method: 'DELETE',
                                                        headers: {
                                                            'Accept': 'application/json',
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify(
                                                            {
                                                                id: item.id
                                                            }
                                                        )
                                                    }).then(function (res) { return res.json(); })
                                                        .then(function (data) {
                                                            console.log("ok");
                                                        })
                                                    window.location.reload()
                                                } else {

                                                }
                                            }}>Delete</a></td>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnnouncementsAdmin;
