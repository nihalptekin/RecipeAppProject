import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  /* SALMON olan navbar */
  padding: 0 2rem;
  display: flex;
  justify-content: space-between; //yatayda aralıklı objeler halinde ortala
  align-items: center; // dikeyde ortala
  flex-wrap: wrap;
  /* Varsayılan olarak esnek öğeler tek bir satıra sığmaya çalışırlar. Gerektiğinde birden fazla satıra yaymak için bu özelliği kullanabilirsiniz */
  background: black;
  border-radius: 0 0 10px 10px;
  height: 75px;
  font-size: 2rem;
  color: white;
  /* background: #e1f1dd; */
`;



export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime ... tek tek about vs yazanların özellikleri YEŞİL*/


  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  /* kelimelerin altı çizili olmasın */
  color: #FFB000;

  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    /* hamburger meydana çıktığında sonrasında tıklanınca linklerde
    /* ekran küçülünce alttaki stiller olsun */
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 91%;
  }
`;
export const Menu = styled.div`
  /* navbardaki 3 kelime about ...hepsini içine alan sarmalın (kutunun ) özellikleri*/
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* içinde bulunduğu div in  stillerine göre ayarla kendini, bunu yazmazsak food app in altında kalacak */
  /* 3 kelime  açılınca üstteki özelliklerde olsun*/
  @media (max-width: 768px) {
     overflow: hidden; 
   /* display: none; */
    /* tamamen gizler, hamburger tıklanınca bile açılmaz, o yüzden hidden kullandık */
    /* uzun yazı olurda taşarsa gizle (hamburgere dönüşünce)*/
    flex-direction: column;
    width: 100%;
    height:200px;
    /* props olarak, osman=true geldi mesela */
     /* max-height: ${({ osman }) => (osman ? "300px" : "0")};  */

     /*  alttaki gibi de kontrol edebiliriz . Menu div i display flex ve flex-direction column old için alt altalar*/
    display: ${({ osman }) => (osman ? "flex" : "none")};

    /* max-height:300px; */
    /* 3 çizgiye ilk tıklandığında 300 px açılsın, sonraki tıklamada kapansın */
    /* max-height:300px yazarsak hep açık olur */
  }

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    /* kelimelerin altı çizili olmasın */
  

    transition: all 0.3s ease-in;
    font-size: 2rem;
    font-family: "Girassol", sans-serif;
    &:hover {
      color: #00adb5;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      /* hamburger meydana çıktığında 
    /* ekran küçülünce alttaki stiller olsun */
      border: 1px solid #00adb5;
      border-radius: 10px;
      width: 91%;
    }
  }
`;
export const Logo = styled(MenuLink)`

  
  padding: 1rem 0;
  color: #FFB000;
  /* text-decoration: none; */
  font-weight: 800;
  /* font-size: 2rem; */
  i {
    /* font-family: "Girassol", sans-serif; */
  }
  span {
    /* font-family: "Girassol", sans-serif; */
    font-weight: 400;
    /* font-size: 2rem; */
    color: #FFB000;
  }
`;

export const Hamburger = styled.div`
  display: none;
  /* Bir öğeyi gizleme özelliği  Öğe gizlenecek ve sayfa, öğe orada değilmiş gibi alttaki stiller yok gibi görüntülenecektir: hamburger ekran büyükken görünmesin 768 den küçülmeye başlayınca görünsün*/
  
  cursor: pointer;
  
@media (max-width: 768px) {
display: flex;

}

`;
