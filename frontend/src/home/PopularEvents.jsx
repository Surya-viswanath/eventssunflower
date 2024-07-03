import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import Eventcard from '../Common/Eventcard';
import Container from '../Common/Container';
// import EventCard from '../allEvents/EventCard';

const PopularEvents = () => {
    const fetchEvents = async () => {
        try {
          const response = await axios.get("http://localhost:4000/events");
          return response.data; 
        } catch (error) {
          return error.massage;
        }
      };
    
      const {
        data: events = [],
        isLoading,
        error,
      } = useQuery({
        queryKey: ["events"],
        queryFn: fetchEvents,
      });
      if (isLoading) {
        return (
          // <Lottie
          //   className="flex justify-center items-center min-h-[70%]"
          //   animationData={loadingAnimation}
          //   width={500}
          //   height={350}
          // />
          ('loading...')
        );
      }
    
      if (error) {
        return <p>Error loading events: {error.message}</p>;
      }

    return (
        <div className="bg-[#E9F8F3B2] py-16">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-1/4">
                        <h1 className="text-4xl md:text-center text-[#050C26] font-bold my-6">
                            Most <span style={{color:'#9C0C0D'}}><br />Popular<br />Events</span>
                        </h1>
                    </div>
                    <div className="w-3/4" >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                events?.slice(0, 5).map(event => <SwiperSlide key={event._id} >
                                    <Eventcard event={event}/>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularEvents;