import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="relative mt-32 ">
      <h2 className="text-[32px] md:text-5xl font-semibold mb-10 px-2 md:px-0 tracking-tight">
        WHAT PEOPLE SAYS
      </h2>
      <div className="relative flex mt-12 items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full  "
        >
          <CarouselContent className="gap-6">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="
                  w-full 
                  sm:w-[90vw] 
                  md:w-1/2 
                  xl:w-1/3 
                  min-w-[320px] 
                  max-w-[460px]
                  
                "
              >
                <Card className="relative h-[400px] rounded-2xl border-none   bg-white shadow-md my-2  flex flex-col justify-between">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div className="text-base text-[#212121] font-medium leading-relaxed mb-6">
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
            ))}
          </CarouselContent>

          <CarouselPrevious className="!absolute !-left-7 md:!-left-14 top-1/2 -translate-y-1/2 rounded-full border  shadow bg-white border-none  w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100 p-2 " />
          <CarouselNext className="!absolute  border-none  w-12 h-12 flex justify-center items-center text-[#f04436] hover:bg-gray-100 !-right-7 md:!-right-10 top-1/2 -translate-y-1/2 rounded-full border bg-white shadow p-2 " />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
