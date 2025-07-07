import CommonWrapper from "@/common/CommonWrapper"
import DynamicTabs from "@/components/ReUseable/DynamicTabs"
import productIcon from "@/assets/Home/products.png"
import manuIcon from "@/assets/Home/manu.png"
import GlobalSearchBar from "@/components/ReUseable/GlobalSearchBar"
import { NewArrivalBanner } from "@/components/Shop/NewArrival"
import ShopCategories from "@/components/Shop/ShopCategories"
import HomeProducts from "@/components/ReUseable/HomeProducts"
import ChooseYourPlan from "@/components/ReUseable/ChooseYourPlan"

const BuyerHome = () => {
    const buyerTabItems = [
        {
            value: "product",
            label: "Products",
            icon: productIcon,
            content: (
                <>
                    <GlobalSearchBar />
                    <NewArrivalBanner />
                    <ShopCategories number={8} />
                    <HomeProducts
                        cols={{ mobile: 2, md: 4, lg: 6 }}
                        rows={{ mobile: 2, md: 4, lg: 8 }}
                    />
                    <ChooseYourPlan/>
                </>
            )
        },
        {
            value: "manufacturer",
            label: "Manufacturers",
            icon: manuIcon,
            content: (
                <div className="text-center p-4">
                    Manufacturers tab content coming soon!
                </div>
            )
        }
    ]

    return (
        <div>
            <CommonWrapper>
                <DynamicTabs tabItems={buyerTabItems} />
            </CommonWrapper>
        </div>
    )
}

export default BuyerHome
