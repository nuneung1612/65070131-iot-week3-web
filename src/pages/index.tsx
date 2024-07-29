import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย
            ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์ในวิชา Internet of Things และนายกฤตณัฏฐ์
            ศิริพรนพคุณ เป็นผู้ช่วยสอนในหัวข้อ FastAPI และ React ในวิชานี้
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="text-right mt-8">
          ปัจจุบันค่าเฟ่ และห้องสมุดของเรา อยู่ในช่วงการดูแลของ นางสาวปราณปรีญา เม่งมั่งมี รหัส 65070131 คนสวย ที่อาจจะไม่ได้ฉลาดมาก แต่ว่าก็พอดูแลคาเฟ่แห่งนี้ได้อยู่มั้ง
         <br></br> คาเฟ่ของเราได้รับการันตีมิชลิน ไพลอต ซูเปอร์สปอร์ต ซึ่งเป็นยางรถยนต์ชั้นนำ เมนูเครื่องดื่มภายในคาเฟ่ของเรามีความหลากหลาย มีวัตถุดิบดีๆ หลายอย่าง ไม่ว่าจะเป็น โกโก้จากป่าหิมพานต์ นมวัวนำเข้าจากลุ่มดาวพฤษภ และอื่นๆ อีกมากมาย ขาดเพียงอย่างเดียวคือ
        ความอร่อย เพราะเรายึดถือในคติที่คนโบราณได้กล่าวไว้ว่า อุกะอุอุ อุกะกะ <br></br><br></br>และหากลูกค้าท่านใดต้องการที่จะอ่านหนังสือ คาเฟ่ของเราขอนำเสนอ Thik Python
        คู่มือประกอบการเรียนการสอนยอดนิยมภายในคณะไอทีลาดกระบัง ที่สนุกและเปี่ยมไปด้วยความรู้ <br></br>
        อนึ่ง สามสิ่งที่ชีวิตแสนสั้นของข้าพเจ้าไม่สามารถหนีพ้นคือ ความตาย ภาษี และดิจิทัลฟุตปริ้นท์ จึงทำให้ไม่สะดวกใจกับการใส่รูปใบหน้าอันงดงามของข้าพเจ้าไว้บนเว็บแห่งนี้ <br></br>ไม่ได้เกี่ยวกับความสามารถในการใช้ React ที่ต่ำเตี้ยเรี่ยดินของข้าพเจ้าแต่อย่างไร
          {/* TODO: ชื่อของตนเอง, รหัสประจำตัวนักศึกษา และแนะนำคาเฟ่นี้ต่ออีกสักหน่อย + ใส่รูปของตนเอง (ไม่จำเป็นหากไม่สะดวกใจใส่รูป)
          ซึ่งมีบริการ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          placeat sit ea sapiente officia sunt cumque impedit, reiciendis quis eius asperiores!
          Minus, mollitia? Vitae inventore odio quod ducimus similique, expedita sequi, reiciendis
          rem recusandae impedit voluptatibus quo veritatis ut quis et suscipit? Eligendi, neque!
          Earum quaerat unde similique totam. Pariatur! */}
        </p>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
