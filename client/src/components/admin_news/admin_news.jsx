import newsIcon from '../../images/newspaper-solid.png'
import { useState, useEffect } from 'react';

function AdminNews() {
    const [news, setNews] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    console.log(news);
    return (
        <div className='ml-5 admin_news_section'>
            <div class="row pt-5">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="box content_wrapper">
                                <form name="search" className='search_form'>
                                    <input type="text" class="input" name="txt" onmouseout="document.search.txt.value = ''" onChange={e => {
                                        setSearchTerm(e.target.value)
                                    }} /> <span class="deff">Search</span>
                                </form>
                            </div>
                            <a href="/" class="btn btn-danger btn-sm float-right">Asosiy sahifaga o'tish</a>
                            <a href="/admin/news/add" class="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right">
                                Yangiliklar qo'shish</a>
                            <h4 class="mt-0 mb-4">
                                Barcha yangiliklar ro'yhati
                            </h4>
                            <div class="table-responsive">
                                <table class="table table-hover mt-5">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">Rasm</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nomi</th>
                                            <th scope="col">Sana</th>
                                            <th scope="col">Matn</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    {news.reverse().filter((val) => {
                                        if (searchTerm == "") {
                                            return val
                                        } else if (val.title_uz.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).map(item => (
                                        <tbody class="list-item">
                                            <td><img src={item.img} class="sizeArticleImage" alt="" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.title_uz}</td>
                                            <td>{item.date}</td>
                                            <td class="list_body">Content...</td>
                                            <td class=""><a href={`news_edit/${item.id}`} class="btn btn-warning button_news_edit bg-success">Edit</a></td>
                                            <td class=""><a class="btn btn-danger button_delete_news bg-danger text-light" onClick={() => {
                                                let answer = prompt("siz rostan o'chirmoqchimisiz? Y/N")
                                                if (answer == "Y") {
                                                    fetch('http://tcti.uz/api/news/delete', {
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
        </div>
    );
}

export default AdminNews;
