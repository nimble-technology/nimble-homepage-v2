import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import PageTitle from './page-title-component';
import axios from "axios";
import BlogCard from './blog-card-component';
import { useMobileContext } from '../mobileContext';
import BlogCardWrapper from './blog-card-wrapper-component';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles/swiper-styles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    const isMobile = useMobileContext();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    useEffect(() => {
        const indexJsonVersion = process.env.REACT_APP_INDEX_JSON_VERSION;
        const url = `${baseUrl}/blogs/index.json?v=${indexJsonVersion}`;
        axios
            .get(url)
            .then(res => {
                const indexData = res.data;
                const filesToFetch = indexData.map(blog => ({
                    fileName: blog.fileName,
                    createDate: blog.createDate,
                    thumb: blog.thumb
                }));

                const fetchPromises = filesToFetch.map(fileData => {
                    const fileName = fileData.fileName;
                    const thumb = fileData.thumb;
                    return axios.get(`${baseUrl}/blogs/${fileName}`)
                        .then(response => {
                            return {
                                title: response.data.title,
                                createDate: response.data.createDate,
                                fileName: fileName,
                                thumb: thumb
                            };
                        });
                });

                Promise.all(fetchPromises)
                    .then(blogDataArray => {
                        setBlogs(blogDataArray);
                    })
                    .catch(error => console.error('Error fetching JSON files:', error));
            })
            .catch(error => console.error('Error fetching blog index:', error));
    }, []);

    const sideStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        background: '#F8F8F8',
        paddingTop: isMobile ? '10px' : '40px',
        paddingBottom: isMobile ? '10px' : '90px'

    };

    return (
        <Box sx={{ ...sideStyle }} >
            <PageTitle title='Our Media' />
            <Box
                sx={{
                    display: 'flex',
                    marginTop: isMobile ? '40px' : '60px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false
                    }}
                    pagination={{ clickable: true }}
                    initialSlide={1}
                    modules={[EffectCoverflow, Pagination]}
                    className="styles.swiper"
                >
                    {blogs.map((blog, index) => (
                        <SwiperSlide className="styles.slide" key={index}>
                            <BlogCardWrapper>
                                <BlogCard title={blog.title} date={blog.createDate} fileName={blog.fileName} thumb={blog.thumb}> </BlogCard>
                            </BlogCardWrapper>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </Box>
        </Box>
    );
};

export default Blog;
