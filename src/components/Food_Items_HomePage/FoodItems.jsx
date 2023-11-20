import mainMenu_Picture1 from "~/assets/images/homePage/mainMenu/image_itemsList_6.svg"
function FoodItems(props) {
    var title = props.title ||"Bún Chả Hà Nội";
    return ( 
        <div className="w-[300px] h-[400px] bg-sub1 border border-sub2 border-solid rounded-3xl flex flex-col ">
            <div className="mt-7 flex justify-center">
                <img src={mainMenu_Picture1} alt="" />
            </div>
            <div className="pl-6">
                <p className="mt-7 text-primary font-normal text-2xl">{title}</p>
                <p className="my-7 text-second text-xl font-normal">Giá 59.000 VND</p>
            </div>
            <div className="flex justify-center">
              <button className="font-normal text-2xl text-third bg-primary leading-5 w-[150px]">Thêm</button>
            </div>
        </div>
     );
}

export default FoodItems ;