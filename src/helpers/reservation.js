export const groupDataByTableFloor = (data) => {
	// Kiểm tra nếu dữ liệu không tồn tại hoặc là mảng rỗng
	if (!data || data.length === 0) {
		return []
	}
	// Tạo một đối tượng để lưu trữ dữ liệu nhóm
	const groupedData = {}

	// Lặp qua mỗi mục trong mảng dữ liệu
	data.forEach((item) => {
		// Kiểm tra xem đã có nhóm cho tầng này chưa
		if (!groupedData[item.tableFloor]) {
			// Nếu chưa có, tạo một mảng mới và thêm mục vào đó
			groupedData[item.tableFloor] = [item]
		} else {
			// Nếu đã có, thêm mục vào mảng tương ứng
			groupedData[item.tableFloor].push(item)
		}
	})

	// Chuyển đổi đối tượng nhóm thành mảng
	const resultArray = Object.values(groupedData)

	// Trả về mảng đã nhóm hoặc mảng rỗng nếu không có dữ liệu
	return resultArray.length > 0 ? resultArray : []
}
