import { useState } from "react";

const sampleProducts = [
  { id: "1", name: "디로브 시크릿 친환경 실리콘 딜도 - 1개 S", stock: 75 },
  { id: "2", name: "디로브 시크릿 친환경 실리콘 딜도 - 1개 XL", stock: 57 },
  { id: "3", name: "디로브 시크릿 친환경 실리콘 딜도 - 1개 L", stock: 51 },
  { id: "4", name: "디로브 여자 모노키니 원피스 수영복 - M", stock: 34 },
  { id: "5", name: "디로브 여자 모노키니 원피스 수영복 - XL", stock: 28 },
];

export default function Home() {
  const [productList, setProductList] = useState(sampleProducts);

  const getAdStatus = (stock) => (stock === 0 ? "OFF" : "ON");

  const toggleAdStatus = (id) => {
    setProductList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              stock: item.stock === 0 ? 1 : 0,
            }
          : item
      )
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">📦 쿠팡 재고 모니터링 & 광고 상태</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productList.map((product) => (
          <div key={product.id} className="rounded-2xl shadow-md hover:shadow-lg transition p-6 border">
            <div className="text-lg font-semibold text-gray-800">{product.name}</div>
            <div className="text-sm mt-1">🧾 재고: <span className="font-medium">{product.stock}</span></div>
            <div className="text-sm mt-1">📢 광고 상태: <span className={getAdStatus(product.stock) === "ON" ? "text-green-600 font-bold" : "text-red-500 font-bold"}>{getAdStatus(product.stock)}</span></div>
            <button
              onClick={() => toggleAdStatus(product.id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {product.stock === 0 ? "재고 복구하기" : "재고 0으로 설정"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}