import CommonWrapper from "@/common/CommonWrapper";
import { CardContent } from "@/components/ui/card";
import {
  Network,
  Search,
  ShoppingCart,
  Star,
  Target,
  User,
} from "lucide-react";

const ArrowLeftToRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="258"
    height="8"
    viewBox="0 0 258 8"
    fill="none"
  >
    <path
      d="M257.854 4.35355C258.049 4.15829 258.049 3.84171 257.854 3.64645L254.672 0.464466C254.476 0.269204 254.16 0.269204 253.964 0.464466C253.769 0.659728 253.769 0.976311 253.964 1.17157L256.793 4L253.964 6.82843C253.769 7.02369 253.769 7.34027 253.964 7.53553C254.16 7.7308 254.476 7.7308 254.672 7.53553L257.854 4.35355ZM0 4V4.5H1.00586V4V3.5H0V4ZM3.01758 4V4.5H5.0293V4V3.5H3.01758V4ZM7.04102 4V4.5H9.05273V4V3.5H7.04102V4ZM11.0645 4V4.5H13.0762V4V3.5H11.0645V4ZM15.0879 4V4.5H17.0996V4V3.5H15.0879V4ZM19.1113 4V4.5H21.123V4V3.5H19.1113V4ZM23.1348 4V4.5H25.1465V4V3.5H23.1348V4ZM27.1582 4V4.5H29.1699V4V3.5H27.1582V4ZM31.1816 4V4.5H33.1934V4V3.5H31.1816V4ZM35.2051 4V4.5H37.2168V4V3.5H35.2051V4ZM39.2285 4V4.5H41.2402V4V3.5H39.2285V4ZM43.252 4V4.5H45.2637V4V3.5H43.252V4ZM47.2754 4V4.5H49.2871V4V3.5H47.2754V4ZM51.2988 4V4.5H53.3105V4V3.5H51.2988V4ZM55.3223 4V4.5H57.334V4V3.5H55.3223V4ZM59.3457 4V4.5H61.3574V4V3.5H59.3457V4ZM63.3691 4V4.5H65.3809V4V3.5H63.3691V4ZM67.3926 4V4.5H69.4043V4V3.5H67.3926V4ZM71.416 4V4.5H73.4277V4V3.5H71.416V4ZM75.4395 4V4.5H77.4512V4V3.5H75.4395V4ZM79.4629 4V4.5H81.4746V4V3.5H79.4629V4ZM83.4863 4V4.5H85.498V4V3.5H83.4863V4ZM87.5098 4V4.5H89.5215V4V3.5H87.5098V4ZM91.5332 4V4.5H93.5449V4V3.5H91.5332V4ZM95.5566 4V4.5H97.5684V4V3.5H95.5566V4ZM99.5801 4V4.5H101.592V4V3.5H99.5801V4ZM103.604 4V4.5H105.615V4V3.5H103.604V4ZM107.627 4V4.5H109.639V4V3.5H107.627V4ZM111.65 4V4.5H113.662V4V3.5H111.65V4ZM115.674 4V4.5H117.686V4V3.5H115.674V4ZM119.697 4V4.5H121.709V4V3.5H119.697V4ZM123.721 4V4.5H125.732V4V3.5H123.721V4ZM127.744 4V4.5H129.756V4V3.5H127.744V4ZM131.768 4V4.5H133.779V4V3.5H131.768V4ZM135.791 4V4.5H137.803V4V3.5H135.791V4ZM139.814 4V4.5H141.826V4V3.5H139.814V4ZM143.838 4V4.5H145.85V4V3.5H143.838V4ZM147.861 4V4.5H149.873V4V3.5H147.861V4ZM151.885 4V4.5H153.896V4V3.5H151.885V4ZM155.908 4V4.5H157.92V4V3.5H155.908V4ZM159.932 4V4.5H161.943V4V3.5H159.932V4ZM163.955 4V4.5H165.967V4V3.5H163.955V4ZM167.979 4V4.5H169.99V4V3.5H167.979V4ZM172.002 4V4.5H174.014V4V3.5H172.002V4ZM176.025 4V4.5H178.037V4V3.5H176.025V4ZM180.049 4V4.5H182.061V4V3.5H180.049V4ZM184.072 4V4.5H186.084V4V3.5H184.072V4ZM188.096 4V4.5H190.107V4V3.5H188.096V4ZM192.119 4V4.5H194.131V4V3.5H192.119V4ZM196.143 4V4.5H198.154V4V3.5H196.143V4ZM200.166 4V4.5H202.178V4V3.5H200.166V4ZM204.189 4V4.5H206.201V4V3.5H204.189V4ZM208.213 4V4.5H210.225V4V3.5H208.213V4ZM212.236 4V4.5H214.248V4V3.5H212.236V4ZM216.26 4V4.5H218.271V4V3.5H216.26V4ZM220.283 4V4.5H222.295V4V3.5H220.283V4ZM224.307 4V4.5H226.318V4V3.5H224.307V4ZM228.33 4V4.5H230.342V4V3.5H228.33V4ZM232.354 4V4.5H234.365V4V3.5H232.354V4ZM236.377 4V4.5H238.389V4V3.5H236.377V4ZM240.4 4V4.5H242.412V4V3.5H240.4V4ZM244.424 4V4.5H246.436V4V3.5H244.424V4ZM248.447 4V4.5H250.459V4V3.5H248.447V4ZM252.471 4V4.5H254.482V4V3.5H252.471V4ZM256.494 4V4.5H257.5V4V3.5H256.494V4Z"
      fill="#B3B3B3"
    />
  </svg>
);

const ArrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="136"
    viewBox="0 0 8 136"
    fill="none"
  >
    <path
      d="M3.64645 135.354C3.84171 135.549 4.1583 135.549 4.35356 135.354L7.53554 132.172C7.7308 131.976 7.7308 131.66 7.53554 131.464C7.34028 131.269 7.0237 131.269 6.82843 131.464L4.00001 134.293L1.17158 131.464C0.976316 131.269 0.659734 131.269 0.464472 131.464C0.26921 131.66 0.26921 131.976 0.464472 132.172L3.64645 135.354ZM4 0L3.5 2.18557e-08L3.5 0.992647L4 0.992647L4.5 0.992647L4.5 -2.18557e-08L4 0ZM4 2.97794L3.5 2.97794L3.5 4.96323L4 4.96323L4.5 4.96323L4.5 2.97794L4 2.97794ZM4 6.94853L3.5 6.94853L3.5 8.93382L4 8.93382L4.5 8.93382L4.5 6.94853L4 6.94853ZM4 10.9191L3.5 10.9191L3.5 12.9044L4 12.9044L4.5 12.9044L4.5 10.9191L4 10.9191ZM4 14.8897L3.5 14.8897L3.5 16.875L4 16.875L4.5 16.875L4.5 14.8897L4 14.8897ZM4 18.8603L3.5 18.8603L3.5 20.8456L4 20.8456L4.5 20.8456L4.5 18.8603L4 18.8603ZM4 22.8309L3.5 22.8309L3.5 24.8162L4 24.8162L4.5 24.8162L4.5 22.8309L4 22.8309ZM4 26.8015L3.5 26.8015L3.5 28.7868L4 28.7868L4.5 28.7868L4.5 26.8015L4 26.8015ZM4 30.7721L3.5 30.7721L3.5 32.7574L4 32.7574L4.5 32.7574L4.5 30.7721L4 30.7721ZM4 34.7426L3.5 34.7426L3.5 36.7279L4 36.7279L4.5 36.7279L4.5 34.7426L4 34.7426ZM4 38.7132L3.5 38.7132L3.5 40.6985L4 40.6985L4.5 40.6985L4.5 38.7132L4 38.7132ZM4 42.6838L3.5 42.6838L3.5 44.6691L4 44.6691L4.5 44.6691L4.5 42.6838L4 42.6838ZM4 46.6544L3.5 46.6544L3.5 48.6397L4 48.6397L4.5 48.6397L4.5 46.6544L4 46.6544ZM4 50.625L3.5 50.625L3.5 52.6103L4 52.6103L4.5 52.6103L4.5 50.625L4 50.625ZM4 54.5956L3.5 54.5956L3.5 56.5809L4 56.5809L4.5 56.5809L4.5 54.5956L4 54.5956ZM4 58.5662L3.5 58.5662L3.5 60.5515L4 60.5515L4.5 60.5515L4.5 58.5662L4 58.5662ZM4 62.5368L3.5 62.5368L3.5 64.5221L4 64.5221L4.5 64.5221L4.5 62.5368L4 62.5368ZM4 66.5074L3.5 66.5074L3.5 68.4926L4 68.4926L4.5 68.4926L4.5 66.5074L4 66.5074ZM4 70.4779L3.5 70.4779L3.5 72.4632L4 72.4632L4.5 72.4632L4.5 70.4779L4 70.4779ZM4 74.4485L3.5 74.4485L3.5 76.4338L4 76.4338L4.5 76.4338L4.5 74.4485L4 74.4485ZM4 78.4191L3.5 78.4191L3.5 80.4044L4 80.4044L4.5 80.4044L4.5 78.4191L4 78.4191ZM4 82.3897L3.5 82.3897L3.5 84.375L4 84.375L4.5 84.375L4.5 82.3897L4 82.3897ZM4 86.3603L3.5 86.3603L3.5 88.3456L4 88.3456L4.5 88.3456L4.5 86.3603L4 86.3603ZM4 90.3308L3.5 90.3308L3.5 92.3161L4 92.3161L4.5 92.3161L4.5 90.3308L4 90.3308ZM4 94.3014L3.5 94.3014L3.5 96.2867L4 96.2867L4.5 96.2867L4.5 94.3014L4 94.3014ZM4 98.272L3.5 98.272L3.5 100.257L4 100.257L4.5 100.257L4.5 98.272L4 98.272ZM4 102.243L3.5 102.243L3.5 104.228L4 104.228L4.5 104.228L4.5 102.243L4 102.243ZM4 106.213L3.5 106.213L3.5 108.198L4 108.198L4.5 108.198L4.5 106.213L4 106.213ZM4 110.184L3.5 110.184L3.5 112.169L4 112.169L4.5 112.169L4.5 110.184L4 110.184ZM4 114.154L3.5 114.154L3.50001 116.14L4.00001 116.14L4.50001 116.14L4.5 114.154L4 114.154ZM4.00001 118.125L3.50001 118.125L3.50001 120.11L4.00001 120.11L4.50001 120.11L4.50001 118.125L4.00001 118.125ZM4.00001 122.095L3.50001 122.095L3.50001 124.081L4.00001 124.081L4.50001 124.081L4.50001 122.095L4.00001 122.095ZM4.00001 126.066L3.50001 126.066L3.50001 128.051L4.00001 128.051L4.50001 128.051L4.50001 126.066L4.00001 126.066ZM4.00001 130.037L3.50001 130.037L3.50001 132.022L4.00001 132.022L4.50001 132.022L4.50001 130.037L4.00001 130.037ZM4.00001 134.007L3.50001 134.007L3.50001 135L4.00001 135L4.50001 135L4.50001 134.007L4.00001 134.007Z"
      fill="#B3B3B3"
    />
  </svg>
);

const ArrowRightToLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="259"
    height="8"
    viewBox="0 0 259 8"
    fill="none"
  >
    <path
      d="M0.646454 4.35355C0.451172 4.15829 0.451172 3.84171 0.646454 3.64645L3.82843 0.464466C4.0237 0.269204 4.34027 0.269204 4.53554 0.464466C4.73079 0.659728 4.73079 0.976311 4.53554 1.17157L1.70709 4L4.53554 6.82843C4.73079 7.02369 4.73079 7.34027 4.53554 7.53553C4.34027 7.7308 4.0237 7.7308 3.82843 7.53553L0.646454 4.35355ZM258.5 4V4.5H257.494V4V3.5H258.5V4ZM255.482 4V4.5H253.471V4V3.5H255.482V4ZM251.459 4V4.5H249.447V4V3.5H251.459V4ZM247.436 4V4.5H245.424V4V3.5H247.436V4ZM243.412 4V4.5H241.4V4V3.5H243.412V4ZM239.389 4V4.5H237.377V4V3.5H239.389V4ZM235.365 4V4.5H233.354V4V3.5H235.365V4ZM231.342 4V4.5H229.33V4V3.5H231.342V4ZM227.318 4V4.5H225.307V4V3.5H227.318V4ZM223.295 4V4.5H221.283V4V3.5H223.295V4ZM219.271 4V4.5H217.26V4V3.5H219.271V4ZM215.248 4V4.5H213.236V4V3.5H215.248V4ZM211.225 4V4.5H209.213V4V3.5H211.225V4ZM207.201 4V4.5H205.189V4V3.5H207.201V4ZM203.178 4V4.5H201.166V4V3.5H203.178V4ZM199.154 4V4.5H197.143V4V3.5H199.154V4ZM195.131 4V4.5H193.119V4V3.5H195.131V4ZM191.107 4V4.5H189.096V4V3.5H191.107V4ZM187.084 4V4.5H185.072V4V3.5H187.084V4ZM183.061 4V4.5H181.049V4V3.5H183.061V4ZM179.037 4V4.5H177.025V4V3.5H179.037V4ZM175.014 4V4.5H173.002V4V3.5H175.014V4ZM170.99 4V4.5H168.979V4V3.5H170.99V4ZM166.967 4V4.5H164.955V4V3.5H166.967V4ZM162.943 4V4.5H160.932V4V3.5H162.943V4ZM158.92 4V4.5H156.908V4V3.5H158.92V4ZM154.896 4V4.5H152.885V4V3.5H154.896V4ZM150.873 4V4.5H148.861V4V3.5H150.873V4ZM146.85 4V4.5H144.838V4V3.5H146.85V4ZM142.826 4V4.5H140.814V4V3.5H142.826V4ZM138.803 4V4.5H136.791V4V3.5H138.803V4ZM134.779 4V4.5H132.768V4V3.5H134.779V4ZM130.756 4V4.5H128.744V4V3.5H130.756V4ZM126.732 4V4.5H124.721V4V3.5H126.732V4ZM122.709 4V4.5H120.697V4V3.5H122.709V4ZM118.686 4V4.5H116.674V4V3.5H118.686V4ZM114.662 4V4.5H112.65V4V3.5H114.662V4ZM110.639 4V4.5H108.627V4V3.5H110.639V4ZM106.615 4V4.5H104.604V4V3.5H106.615V4ZM102.592 4V4.5H100.58V4V3.5H102.592V4ZM98.5684 4V4.5H96.5566V4V3.5H98.5684V4ZM94.5449 4V4.5H92.5332V4V3.5H94.5449V4ZM90.5215 4V4.5H88.5098V4V3.5H90.5215V4ZM86.498 4V4.5H84.4863V4V3.5H86.498V4ZM82.4746 4V4.5H80.4629V4V3.5H82.4746V4ZM78.4512 4V4.5H76.4395V4V3.5H78.4512V4ZM74.4277 4V4.5H72.416V4V3.5H74.4277V4ZM70.4043 4V4.5H68.3926V4V3.5H70.4043V4ZM66.3809 4V4.5H64.3691V4V3.5H66.3809V4ZM62.3574 4V4.5H60.3457V4V3.5H62.3574V4ZM58.334 4V4.5H56.3223V4V3.5H58.334V4ZM54.3105 4V4.5H52.2988V4V3.5H54.3105V4ZM50.2871 4V4.5H48.2754V4V3.5H50.2871V4ZM46.2637 4V4.5H44.252V4V3.5H46.2637V4ZM42.2402 4V4.5H40.2285V4V3.5H42.2402V4ZM38.2168 4V4.5H36.2051V4V3.5H38.2168V4ZM34.1934 4V4.5H32.1816V4V3.5H34.1934V4ZM30.1699 4V4.5H28.1582V4V3.5H30.1699V4ZM26.1465 4V4.5H24.1348V4V3.5H26.1465V4ZM22.123 4V4.5H20.1113V4V3.5H22.123V4ZM18.0996 4V4.5H16.0879V4V3.5H18.0996V4ZM14.0762 4V4.5H12.0645V4V3.5H14.0762V4ZM10.0527 4V4.5H8.04102V4V3.5H10.0527V4ZM6.0293 4V4.5H4.01758V4V3.5H6.0293V4ZM2.00586 4V4.5H1V4V3.5H2.00586V4Z"
      fill="#B3B3B3"
    />
  </svg>
);

const HowItWorks = () => {
  return (
    <CommonWrapper>
      <section className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 whitespace-nowrap">
            HOW IT WORKS
          </h2>
        </div>

        <div className="flex flex-col gap-0 items-center w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
            <div className="flex flex-col items-center w-[90vw] max-w-xs md:w-72">
              <CardContent className=" text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 leading-tight whitespace-nowrap">
                  Sign Up & Create Your Profile
                </h3>
                <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                  Quickly create your account and{" "}
                  <br className="hidden lg:block" /> share your details.
                </p>
              </CardContent>
            </div>

            <div className="hidden xl:flex items-center justify-center">
              {ArrowLeftToRight}
            </div>

            <div className="flex flex-col items-center w-[90vw] max-w-xs md:w-72">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 leading-tight whitespace-nowrap">
                  Browse & Discover
                </h3>
                <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                  Find products and services that suit{" "}
                  <br className="hidden lg:block" /> your needs.
                </p>
              </CardContent>
            </div>

            <div className="hidden xl:flex items-center justify-center">
              {ArrowLeftToRight}
            </div>

            <div className="flex flex-col items-center w-[90vw] max-w-xs md:w-72">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 leading-tight whitespace-nowrap">
                  Connect with Suppliers
                </h3>
                <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                  Reach out directly to suppliers for{" "}
                  <br className="hidden lg:block" /> details.
                </p>
              </CardContent>
            </div>
          </div>

          <div className="hidden xl:flex justify-end w-full">
            <div className="w-64"></div>
            <div className="w-64 flex items-center justify-center">
              {ArrowDown}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
            <div className="flex flex-col items-center w-[90vw] max-w-xs md:w-72">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 leading-tight whitespace-nowrap">
                  Track & Receive
                </h3>
                <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                  Follow your order from our <br className="hidden lg:block" />{" "}
                  warehouse to your door.
                </p>
              </CardContent>
            </div>

            <div className="hidden xl:flex items-center justify-center">
              {ArrowRightToLeft}
            </div>

            <div className="flex flex-col items-center w-[90vw] max-w-xs md:w-72">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 leading-tight whitespace-nowrap">
                  Rate & Review
                </h3>
                <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                  Leave your feedback and help{" "}
                  <br className="hidden lg:block" /> others make better choices.
                </p>
              </CardContent>
            </div>

            <div className="hidden xl:flex items-center justify-center">
              {ArrowRightToLeft}
            </div>

            <div className="flex flex-col items-center w-[90vw] max-w-xs md:w-72">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 leading-tight whitespace-nowrap">
                  Place Your Order
                </h3>
                <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                  Securely place your order and enjoy{" "}
                  <br className="hidden lg:block" /> protected payments.
                </p>
              </CardContent>
            </div>
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default HowItWorks;
