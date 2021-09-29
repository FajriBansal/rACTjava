import logo from './logo.svg';
import './App.css';

function App() {
  
 
  return (
    <div className="Parentbox">
<fotoproduk/>
<produkinfo isdiscount = "yes" name = "youyoyoy" category="holiday"/>
<reviewitem />
    </div>
  );
}

function reviewitem(){
  const users = [
    {
      "id": 1,
      "name": "Yamaniku",
      "review":"Harganya murah tapi kualitasnya bukan makanan kucing biasa"
    },
    {
      "id": 2,
      "name": "Nekoguchi",
      "review":"Sangat puas akan pelayanannya gercep dan tangkas"
    },
    {
      "id": 3,
      "name": "Suchiyaki",
      "review":"Barangnya sama seperti yang ada di iklan tidak mengecewakan"
    }
  ];
  const listReview = users.map ((itemReview) =>
  <div className= "item">
<img src="neko.jpg"/>
<div className="user">
  <h3>{itemReview.name}</h3>
  <p>{itemReview.review}</p>
</div>
</div>
  );
  return(
<div className="reviewbox">
  <h2>Review</h2>
{listReview}
</div>
  );
}

function fotoproduk(){
  return(
<div class= "foto">
  <img src="sepatu.png"/>
</div>
  );
}

function checkdiscount(props){
  const { isdiscount } = props;
  if(isdiscount == "yes"){
  return(

        <p> Discount 50% off</p>
      );
    }
    else if (isdiscount == "coming"){
      return(
        <p> Akan ada diskon . . .</p>
      );
    }
    else {
      return(
<p>Belum ada Discount</p>
      );
    }
  
}

function produkinfo(props){
  const {category , name, isdiscount } = props;
  const price = 7400000;
  const benefits= ["tidak kusut terkena air","bahan lebih halus","anti karat dan api"];
  const listBenefits = benefits.map((itemBenefit) =>
  <li>{itemBenefit}</li>
);
  return(
    <div className="deskripsi">
  <p className="cate">{category}</p>
<h1 className="title">{name}</h1>
<p className="price">IDR {price}</p>
<checkdiscount isdiscount={isdiscount}/>
<p className="info">
Keunggulan :
Menggunakan Bahan Mess yang Berkualitas Tinggi
Desain Elegan
Nyaman Dikenakan
Awet dan Tahan Lama
Cocok Digunakan Sehari hari
Bahan berkualitas tinggi
</p>
<ul>
{itemBenefit}
</ul>

<a onClick={(e) => tambahchart(name, e)} href="#">Add to Chart</a>
</div>
  )
  function tambahchart(e){
    return console.log("Membeli Produk" + e);
  }
}

export default App;
