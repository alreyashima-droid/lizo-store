
export default function AdminPage() {
  return (
    <div className="admin">
      <h1>لوحة التحكم</h1>

      <input placeholder="اسم المنتج" />
      <input placeholder="السعر" />

      <select>
        <option>50ml</option>
        <option>70ml</option>
        <option>100ml</option>
        <option>200ml</option>
      </select>

      <select>
        <option>رجالي</option>
        <option>نسائي</option>
        <option>للجنسين</option>
      </select>

      <input type="file" />

      <button>إضافة المنتج</button>
    </div>
  )
}
