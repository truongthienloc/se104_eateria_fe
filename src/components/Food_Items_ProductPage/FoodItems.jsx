
function FoodItems(props) {
    var title = props.title ||"Bún Chả Hà Nội";
    return ( 
        <div className="w-[590px] h-[170px] bg-third border border-third rounded-2xl flex flex-row space-x-4 ">
            
            <div className="pl-6">
                <p className="mt-7 text-primary font-normal text-2xl">{title}</p>
                <p className="my-11 text-second text-xl font-normal pt-3">Giá 59.000 VND</p>
            </div>
            <div className="flex items-end pl-4 mb-4">
              <button className="font-normal text-2xl text-third bg-primary leading-5 w-[150px] h-[50px] ">Thêm</button>
            </div>
            <div className="w-[150px] h-[150px] flex mt-[10px]">
                <img className="ml-8" src="src\assets\images\productPage\food\image_itemsList_1.svg" alt="" />
            </div>
        </div>
     );
}

export default FoodItems ;