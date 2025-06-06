import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { FaEye, FaVideo } from "react-icons/fa";

import Head from 'next/head'
import PopunderAds from '@/components/Ads/Popunder';
import channels from "../../JsonData/Channels.json"
import { SearchIcon } from '@heroicons/react/outline';
import Pagination from '../../components/Pagination';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function Index({ finalDataArray, pages }) {



    const router = useRouter();
    const { code, pornstarname, isReady } = router.query;

    const [data, setdata] = useState(channels.slice(0, 60))
    const [page, setpage] = useState(1)


    // useEffect(() => {
    //     let index = 0

    //     async function downloadImage(url, name) {
    //         await fetch(url, {
    //             method: "GET",
    //             headers: {}
    //         })
    //             .then(response => {
    //                 response.arrayBuffer().then(function (buffer) {
    //                     const url = window.URL.createObjectURL(new Blob([buffer]));
    //                     const link = document.createElement("a");
    //                     link.href = url;
    //                     link.setAttribute("download", name); //or any other extension
    //                     document.body.appendChild(link);
    //                     link.click();


    //                 });
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     }


    //     // const myInterval = setInterval(() => {
    //     //     console.log(index);
    //     //     downloadImage(jsonData[index].url, jsonData[index].name)
    //     //     if (index === jsonData.length - 1) {
    //     //         clearInterval(myInterval);
    //     //     }
    //     //     index = index + 1
    //     // }, 1000);

    // }, []);

    const onChangeHandler = (key) => {


        if (key.length === 0) {
            setsuggestedData([])

        }
        if (key.length > 1) {

            var array = []
            channels.filter(obj => {
                if (obj.channel_name.toLowerCase().includes(key.trim().toLowerCase())) {
                    array.push(obj.channel_name)
                }
            })
            if (array) {
                if (array.length > 10) {
                    setsuggestedData(array.slice(0, 9))
                }
                else {
                    setsuggestedData(array)
                }
            }
        }

    }

    const customiseUrl = (channel_href) => {

        const creatorCode = channel_href.substring(1, channel_href.indexOf("/creator"))
        const creatorName = channel_href.substring(channel_href.indexOf("/creator/") + 9, channel_href.length - 1)

        return `/creators/${creatorCode}/${creatorName}`

    }


    return (

        <div className="">
            <div className='basicMargin'>

                <Head>
                    <title>Exclusive Adult Videos and Top Porn Creators - LuvGalore</title>
                    <meta name="description" content="Discover the hottest Japanese porn movies categorized by channels on LuvGalore! Explore the best XXX JAV channels and enjoy free sex scenes from JAVHD, CARIBBEANCOM, JAVHUB, JAPANHDV." />
                    <meta name="keywords" content="porn, xxx, streaming porn, HD porn, adult videos, pussy videos, sex movies, LuvGalore" />
                    <meta property="og:title" content="Exclusive Adult Videos and Top Porn Creators - LuvGalore" />
                    <meta property="og:description" content="Discover the hottest Japanese porn movies categorized by channels on LuvGalore! Explore the best XXX JAV channels and enjoy free sex scenes from JAVHD, CARIBBEANCOM, JAVHUB, JAPANHDV." />
                    <meta name="twitter:title" content="Exclusive Adult Videos and Top Porn Creators - LuvGalore" />
                    <meta name="twitter:description" content="Discover the hottest Japanese porn movies categorized by channels on LuvGalore! Explore the best XXX JAV channels and enjoy free sex scenes from JAVHD, CARIBBEANCOM, JAVHUB, JAPANHDV." />
                    <link rel="canonical" href="https://www.LuvGalore.com/creators" />
                </Head> 



                <PopunderAds />

                <div className='flex items-center md:pr-10 pt-2 my-1  md:my-2 pl-1'>
                    <p className=' mt-4 mb-2 lg:mb-4 2xl:my-6 text-left lg:text-left  text-2xl lg:text-3xl font-Dmsans text-theme font-poppins font-medium  border-b-[3px] border-[#FFBB00]'>All Creators</p>

                    <p className='text-md md:text-xl  pl-1 pr-1  flex-grow font-inter  text-right text-gray-900 '>{`Page-1`}</p>
                </div>


                <div className="my-4 mb-2 lg:mb-4 2xl:my-6 flex justify-between items-center  rounded  text-white  p-2 px-3  w-full">
                    <p className='text-left lg:text-left  flex-grow text-2xl lg:text-3xl font-Dmsans text-theme font-poppins font-medium'>🔥 Hot New Creators</p>
                </div>

                {/* "  {
    creatorHref: '/ctle/creator/noturgirlfriend/',
    creatorImage: 'https://spankbang.party/avatar/creators/598226.jpg?v=1742783455',
    creatorViews: '45K',
    creatorVideos: '95',
    creatorName: 'notUrGirlfriend'
  }," */}

                <div className={`grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5  2xl:grid-cols-6 py-3  gap-3 md:gap-5 lg:gap-4`}>
                    {finalDataArray.map(obj => {

                        const href = customiseUrl(obj.creatorHref)
                        return (
                            <Link key={obj.creatorName} href={href}>
                                <div className="relative hover:scale-105 transform transition duration-150 rounded ">
                                    <div className='relative'>

                                        <img
                                            className="object-cover aspect-[9/11] w-full rounded-[15px] border-[1px] border-gray-200"
                                            alt={obj.creatorName}
                                            src={obj.creatorImage}
                                            loading="lazy"
                                        />
                                        <span className="flex items-center gap-1 text-[12px] m-1.5 font-inter text-white  bg-black/50 rounded-[5px] px-2 py-[1px] absolute bottom-0 left-0 ">
                                            <FaEye className="text-white text-[14px]" /> {obj.creatorViews}
                                        </span>
                                        <span className="flex items-center gap-1 text-[12px] m-1.5 font-inter text-white  bg-black/50 rounded-[5px] px-2 py-[1px] absolute bottom-0 right-0 ">
                                            <FaVideo className="text-white text-[14px]" /> {obj.creatorVideos}
                                        </span>
                                    </div>
                                    <h2 className="mt-1 font-inter rounded-b  text-[14px] sm:text-[16px] font-semibold  2xl:text-[18px] px-1 pb-3 lg:pb-4 w-full text-center text-theme">
                                        {obj.creatorName}
                                    </h2>


                                </div>
                            </Link>


                        )
                    })}

                </div>




            </div>

            <Pagination data={{ url: `/creators`, currentPageNumberURL: "1", pages: pages }} />

        </div>
    )
}


export default Index

export async function getStaticProps({ req, res }) {


    const parcelData = { url: `https://spankbang.party/creators`, page: "1" };
    const API_URL = `${process.env.BACKEND_URL}getCreators`;
    const rawResponse = await fetch(API_URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(parcelData),
    });


    const { finalDataArray, pages } = await rawResponse.json();

    return {
        props: {
            finalDataArray: finalDataArray,
            pages: pages
        }
    }

}




