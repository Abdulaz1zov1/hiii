import { useState, useEffect } from 'react'
import newsIcon from '../../images/newspaper-solid.png'
import pageIcon from '../../images/file-lines-solid.png'
import announcementIcon from '../../images/scroll-solid.png'

function Statistics() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
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
    const [pages, setPages] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/sub_categories/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPages(data)
            });
    }, [])
    return (
        <>
            <div class="row pt-3 statistics_wrapper">
                <div class="col-sm-6 col-xl-3">
                    <div class="card  bg-primary_all">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <img src={announcementIcon} alt="" width={35} />
                            </div>
                            <div>
                                <h5 class="font-16 text-white">Barcha E`lonlar</h5>
                            </div>
                            <h3 class="mt-4 text-white">
                                {announcements.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="card  bg-primary_all">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <img src={newsIcon} alt="" width={35} />
                            </div>
                            <div>
                                <h5 class="font-16 text-white">Barcha Yangiliklar</h5>
                            </div>
                            <h3 class="mt-4 text-white">
                                {news.length}
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-xl-3">
                    <div class="card  bg-primary_all">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25} />
                            </div>
                            <div>
                                <h5 class="font-16 text-white">Barcha Sahifalar</h5>
                            </div>
                            <h3 class="mt-4 text-white">
                                {pages.length}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;
