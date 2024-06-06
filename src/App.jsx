import React, { useState } from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

const App = () => {
  let products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://www.mactrast.com/wp-content/uploads/2019/10/iphone-8-1-500x250.png",
      images: [
        "https://5.imimg.com/data5/IY/JR/MY-44062996/iphone-6_-6s_-back-cover_-bullet-proof-screen-guard-500x500.jpg",
        "https://5.imimg.com/data5/GLADMIN/Default/2023/3/EZ/JI/NH/185698171/smart-mobile-phones-500x500.jpg",
        "https://avesta.tj/wp-content/uploads/2017/11/03-5-500x250.jpg",
        "https://http2.mlstatic.com/D_NQ_NP_786573-MPE26069747956_092017-O.webp",
        "https://www.t-mobile.com/news/_admin/uploads/2022/03/nr-article-NPI-3-8-22-500x250.png",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://www.moneytap.com/images-ns/iPhone13mini.webp",
      images: [
        "https://www.moneytap.com/images-ns/iPhone13pro.webp",
        "https://www.moneytap.com/images-ns/iPhone13promax.webp",
        "https://aktionen-tarife.de/1und1/inhalte/2017/12/apple-iphone-x-mit-1und1-handyvertrag.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fY36ozVTV5vjBVzvuo163uAGltbmFOZwpbIsa1nqvQ&s",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://images.samsung.com/is/image/samsung/assets/in/galaxy-tab-s9/feature/galaxy-tab-s9-kv-pc.jpg",
      images: [
        "https://images.samsung.com/is/image/samsung/assets/in/galaxy-tab-s9/feature/galaxy-tab-s9-processor-mo.jpg",
      ],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://5.imimg.com/data5/GLADMIN/Default/2022/11/IX/AE/UH/71306176/youtube-500x500.jpg",
      images: [
        "https://5.imimg.com/data5/GLADMIN/Default/2022/11/BI/HT/KG/71306176/youtube-500x500.jpg",
        "https://jmcomms.com/wp-content/uploads/2021/04/OppoA945G-500x250.jpg",
        "https://hamariweb.com/mobiles/LargeImages/4492_04.jpg",
        "https://i.ytimg.com/vi/8Z7L4EN0pHw/sddefault.jpg",
        "https://qph.cf2.quoracdn.net/main-qimg-d2531547907fe2b37c37e3a85a4b0de9-pjlq",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/10557/huawei2.jpg?w=500&ar=2:1&fit=crop&crop=faces,edges&auto=format",
      images: [
        "https://mobilmania.zive.cz/getthumbnail.aspx?w=20000&h=20000&q=100&id_file=424627751",
        "https://http2.mlstatic.com/D_NQ_NP_903287-MPE46656944571_072021-O.webp",
        "https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Huawei_P30Pro_neue_Farben_zur_IFA.jpg",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <Provider store={Store}>
          <Cart data={products} />
        </Provider>
      </div>
    </div>
  );
};

export default App;
