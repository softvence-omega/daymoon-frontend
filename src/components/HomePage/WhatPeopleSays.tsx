import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Ralph Edwards",
    role: "Buyer",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "“Lorem ipsum dolor sit amet consectetur. Nibh libero facilisis ultricies et eget sagittis amet iaculis. Nunc fringilla imperdiet facilisis sit. A nunc iaculis magna dapibus cras. Sit erat gravida nisi eget at sapien interdum.”",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "Seller",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "“Lorem ipsum dolor sit amet consectetur. Nibh libero facilisis ultricies et eget sagittis amet iaculis. Nunc fringilla imperdiet facilisis sit. A nunc iaculis magna dapibus cras. Sit erat gravida nisi eget at sapien interdum.”",
  },
  {
    id: 3,
    name: "Ronald Richards",
    role: "Supplier",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    text: "“Lorem ipsum dolor sit amet consectetur. Nibh libero facilisis ultricies et eget sagittis amet iaculis. Nunc fringilla imperdiet facilisis sit. A nunc iaculis magna dapibus cras. Sit erat gravida nisi eget at sapien interdum.”",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    role: "Buyer",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "“Quick and easy! Lorem ipsum dolor sit amet consectetur. Sit erat gravida nisi eget at sapien interdum.”",
  },
  {
    id: 5,
    name: "Dianne Russell",
    role: "Seller",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    text: "“Nibh libero facilisis ultricies et eget sagittis amet iaculis. Cras. Sit erat gravida nisi eget at sapien interdum.”",
  },
  {
    id: 6,
    name: "Courtney Henry",
    role: "Supplier",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    text: "“A nunc iaculis magna dapibus cras. Sit erat gravida nisi eget at sapien interdum. Very smooth process.”",
  },
];
const TestimonialCarousel = () => {
  return (
    <section className=" relative mt-0 lg:mt-32 ">
      <h2 className="text-2xl md:text-5xl max-[767px]:font-medium max-[767px]:text-center font-semibold px-2 md:px-0 tracking-tight ">
        WHAT PEOPLE SAYS
      </h2>
      <div className="relative  md:ml-0 flex mt-6 md:mt-12 items-center justify-center ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent className="gap-6 ">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CarouselItem
                  className="
                   
                 
                  w-[95vw] 
                  md:w-1/2 
                  xl:w-1/3 
                 
                   md:min-w-[424px]          
                "
                >
                  <Card
                    className=" relative  md:h-[400px] border-[#e5e5e5]   
                  rounded-xl  border-1  bg-white  my-2  flex flex-col justify-between"
                  >
                    <CardContent className="p-8 h-full flex flex-col justify-between">
                      <div className="text-sm md:text-base  text-[#212121] font-medium leading-relaxed mb-6">
                        {review.text}
                      </div>

                      <div className="absolute left-8 bottom-6 flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.name}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-[13px] text-[#222] leading-tight">
                            {review.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {review.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>

          <CarouselPrevious className="!absolute  -left-6 xl:-left-14 top-1/3 md:top-1/2 -translate-y-1/2 rounded-full border  cursor-pointer shadow bg-white border-none  w-12 h-12 md:flex justify-center items-center text-[#f04436] hover:bg-gray-100 p-2 " />
          <CarouselNext className="!absolute  border-none  w-12 h-12  top-1/3 md:top-1/2 md:flex justify-center items-center cursor-pointer text-[#f04436] hover:bg-gray-100 -right-5 xl:-right-12  -translate-y-1/2 rounded-full border bg-white shadow p-2 " />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
